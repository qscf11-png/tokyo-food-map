// DOM 元素
const btnLocate = document.getElementById('btn-locate');
const locationTitle = document.getElementById('location-title');
const locationDesc = document.getElementById('location-desc');
const searchInput = document.getElementById('search-input');
const restaurantList = document.getElementById('restaurant-list');
const resultsCount = document.getElementById('results-count');
const loadingSpinner = document.getElementById('loading-spinner');
const noResults = document.getElementById('no-results');
const sortOptions = document.getElementById('sort-options');
const cardTemplate = document.getElementById('card-template');
const categoryBtns = document.querySelectorAll('.tag-btn');
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelModal = document.getElementById('btn-cancel-modal');
const addModal = document.getElementById('add-modal');
const addForm = document.getElementById('add-form');
const btnToggleMap = document.getElementById('btn-toggle-map');
const mapSection = document.getElementById('map-section');
const resultsSection = document.querySelector('.results-section');

// 狀態管理
let currentPosition = null;
let currentData = [...restaurantsData];
let currentCategory = 'all';
let mapInstance = null;
let markersLayer = null;
let isMapMode = false;

// 初始化載入自訂資料
function loadCustomData() {
    const savedData = localStorage.getItem('tokyoFoodMapCustomData');
    if (savedData) {
        try {
            const customRestaurants = JSON.parse(savedData);
            currentData = [...restaurantsData, ...customRestaurants];
        } catch (e) {
            console.error('解析自訂資料失敗', e);
        }
    }
}

// 啟動初始化
function init() {
    loadCustomData();
    renderList(currentData);
    setupEventListeners();
}

function setupEventListeners() {
    btnLocate.addEventListener('click', handleGeolocation);
    searchInput.addEventListener('input', handleSearch);

    // 分類按鈕監聽
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => handleCategoryChange(e));
    });

    // 新增餐廳 Modal 監聽
    btnOpenModal.addEventListener('click', () => addModal.style.display = 'flex');
    btnCloseModal.addEventListener('click', closeAndResetModal);
    btnCancelModal.addEventListener('click', closeAndResetModal);

    // 點擊 Modal 外部關閉
    addModal.addEventListener('click', (e) => {
        if (e.target === addModal) closeAndResetModal();
    });

    // 處理表單送出
    addForm.addEventListener('submit', handleAddRestaurant);

    // 處理地圖切換
    btnToggleMap.addEventListener('click', toggleMapMode);
}

function toggleMapMode() {
    isMapMode = !isMapMode;

    if (isMapMode) {
        btnToggleMap.innerHTML = '<i class="fa-solid fa-list"></i> 切換清單模式';
        resultsSection.style.display = 'none';
        mapSection.style.display = 'block';

        // 確保地圖已初始化
        if (!mapInstance) {
            initMap();
        } else {
            // 修正 Leaflet 在隱藏狀態下顯示不全的問題
            setTimeout(() => mapInstance.invalidateSize(), 100);
        }

        updateMapMarkers();

    } else {
        btnToggleMap.innerHTML = '<i class="fa-solid fa-map"></i> 切換地圖模式';
        mapSection.style.display = 'none';
        resultsSection.style.display = 'block';
    }
}

function initMap() {
    // 預設中心位置 (東京車站)
    const defaultCenter = [35.6812, 139.7671];
    const center = currentPosition ? [currentPosition.lat, currentPosition.lng] : defaultCenter;

    mapInstance = L.map('interactive-map').setView(center, currentPosition ? 13 : 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapInstance);

    markersLayer = L.layerGroup().addTo(mapInstance);
}

function updateMapMarkers() {
    if (!mapInstance || !markersLayer) return;

    markersLayer.clearLayers();

    // 加入使用者位置的 Marker
    if (currentPosition) {
        const userIcon = L.divIcon({
            html: '<i class="fa-solid fa-location-crosshairs fa-2x" style="color:var(--primary-color);"></i>',
            iconSize: [30, 30],
            className: 'custom-user-marker'
        });
        L.marker([currentPosition.lat, currentPosition.lng], { icon: userIcon, zIndexOffset: 1000 })
            .bindPopup('<b>📍 您的目前位置</b>')
            .addTo(markersLayer);
    }

    // 建立邊界以包含所有目標
    const bounds = L.latLngBounds();
    if (currentPosition) {
        bounds.extend([currentPosition.lat, currentPosition.lng]);
    }

    // 加入餐廳 Markers
    let hasValidRestaurants = false;
    currentData.forEach(item => {
        if (item.lat && item.lng) {
            hasValidRestaurants = true;

            // 彈出視窗內容
            const popupContent = `
                <div style="font-family: inherit; min-width: 200px;">
                    <h3 style="margin: 0 0 5px 0; font-size: 1.1rem;">${item.name}</h3>
                    <span style="font-size: 0.8rem; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">${item.category || '未分類'}</span>
                    <p style="margin: 8px 0; font-size: 0.9rem; color: #555;">${item.reason}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}&query_place_id=null" 
                       target="_blank" style="display: block; background: var(--secondary-color); color: white; text-align: center; padding: 5px; border-radius: 4px; text-decoration: none; font-weight: bold; margin-top: 10px;">
                        <i class="fa-solid fa-map-location-dot"></i> Google Maps 導航
                    </a>
                </div>
            `;

            const marker = L.marker([item.lat, item.lng])
                .bindPopup(popupContent)
                .addTo(markersLayer);

            bounds.extend([item.lat, item.lng]);
        }
    });

    // 如果有標記地點，則嘗試自動縮放視角
    if (hasValidRestaurants || currentPosition) {
        // 如果只有台灣位置，縮放會太遠，所以如果範圍太大我們就保留預設東京或台灣比例
        const zoomLevel = mapInstance.getBoundsZoom(bounds);
        if (zoomLevel > 3 && zoomLevel < 20) {
            mapInstance.fitBounds(bounds, { padding: [50, 50] });
        }
    }
}

function closeAndResetModal() {
    addModal.style.display = 'none';
    addForm.reset();
}

function handleAddRestaurant(e) {
    e.preventDefault();

    // 取得表單資料
    const newRestaurant = {
        name: document.getElementById('new-name').value.trim(),
        category: document.getElementById('new-category').value,
        reason: document.getElementById('new-reason').value.trim(),
        mapsQuery: document.getElementById('new-name').value.trim() + " 東京" // 預設加上東京以利搜尋
    };

    // 處理選填的經緯度
    const latInput = document.getElementById('new-lat').value;
    const lngInput = document.getElementById('new-lng').value;

    if (latInput && lngInput) {
        newRestaurant.lat = parseFloat(latInput);
        newRestaurant.lng = parseFloat(lngInput);
    }

    // 儲存至 LocalStorage
    saveToLocalStorage(newRestaurant);

    // 更新當前資料並重新渲染
    currentData.push(newRestaurant);
    applyFilters();

    // 提示與關閉
    alert('成功新增餐廳！');
    closeAndResetModal();
}

function saveToLocalStorage(restaurant) {
    const savedData = localStorage.getItem('tokyoFoodMapCustomData');
    let customRestaurants = [];

    if (savedData) {
        try {
            customRestaurants = JSON.parse(savedData);
        } catch (e) {
            console.error('解析自訂資料失敗', e);
        }
    }

    customRestaurants.push(restaurant);
    localStorage.setItem('tokyoFoodMapCustomData', JSON.stringify(customRestaurants));
}

// 處理取得位置
function handleGeolocation() {
    if (!navigator.geolocation) {
        alert('您的瀏覽器不支援地理位置功能！');
        return;
    }

    // 更新 UI 狀態
    btnLocate.disabled = true;
    btnLocate.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 定位中...';
    locationTitle.textContent = '正在取得您的位置...';
    locationDesc.textContent = '請在瀏覽器彈出的提示中允許存取位置資訊';

    navigator.geolocation.getCurrentPosition(
        // 成功
        (position) => {
            currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // 更新 UI 的初始文字
            btnLocate.style.display = 'none';
            locationTitle.textContent = '📍 已取得您的座標，正在轉換地址...';
            locationTitle.style.color = 'var(--primary-color)';

            // 呼叫免費 Reverse Geocoding API 轉換地址 (OpenStreetMap Nominatim)
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${currentPosition.lat}&lon=${currentPosition.lng}&zoom=18&addressdetails=1`, {
                headers: {
                    'Accept-Language': 'zh-TW,zh;q=0.9,en;q=0.8' // 盡量請求中文結果
                }
            })
                .then(response => response.json())
                .then(data => {
                    let addressName = '';
                    if (data && data.address) {
                        // 組合出比較乾淨的地址 (例如：台北市信義區)
                        const city = data.address.city || data.address.town || data.address.county || '';
                        const suburb = data.address.suburb || data.address.village || '';
                        const road = data.address.road || '';
                        addressName = `${city}${suburb}${road}`;
                    }

                    if (addressName) {
                        locationTitle.textContent = `📍 您目前位於: ${addressName}`;
                    } else {
                        locationTitle.textContent = '📍 已取得您的位置';
                    }
                })
                .catch(err => {
                    console.error("地址轉換失敗:", err);
                    locationTitle.textContent = '📍 已取得您的位置';
                });

            locationDesc.textContent = '列表與地圖已為您重新排序更新';
            sortOptions.style.display = 'block';

            if (isMapMode) {
                updateMapMarkers();
            }

            // 計算距離並重新根據目前的過濾條件渲染
            applyFilters();
        },
        // 失敗
        (error) => {
            btnLocate.disabled = false;
            btnLocate.innerHTML = '<i class="fa-solid fa-location-dot"></i> 重新嘗試定位';
            locationTitle.textContent = '無法取得位置';
            locationDesc.textContent = getGeolocationErrorMessage(error);
        },
        // 設定
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

// 處理搜尋與過濾功能
function applyFilters(searchTerm = searchInput.value.toLowerCase().trim()) {

    // 重新載入完整資料 (包含預設與自訂)
    loadCustomData();

    currentData = currentData.filter(restaurant => {
        // 1. 搜尋條件過濾
        const matchSearch = restaurant.name.toLowerCase().includes(searchTerm) ||
            restaurant.reason.toLowerCase().includes(searchTerm);

        // 2. 分類條件過濾
        const matchCategory = currentCategory === 'all' || restaurant.category === currentCategory;

        return matchSearch && matchCategory;
    });

    // 如果已經有位置資訊，重新計算距離並排序
    if (currentPosition) {
        calculateDistances();
        currentData.sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
    }

    renderList(currentData);

    if (isMapMode) {
        updateMapMarkers();
    }
}

// 處理搜尋功能
function handleSearch(e) {
    applyFilters(e.target.value.toLowerCase().trim());
}

function handleCategoryChange(e) {
    // 取得點擊的按鈕
    const targetBtn = e.target.closest('.tag-btn');
    if (!targetBtn) return;

    // 更新按鈕樣式
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    targetBtn.classList.add('active');

    // 更新狀態並套用過濾
    currentCategory = targetBtn.dataset.category;
    applyFilters();
}

// 渲染餐廳列表
function renderList(data) {
    // 清空目前列表
    restaurantList.innerHTML = '';

    // 更新數量
    resultsCount.textContent = `(${data.length})`;

    // 處理無結果
    if (data.length === 0) {
        restaurantList.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    restaurantList.style.display = 'grid';
    noResults.style.display = 'none';

    // 渲染卡片
    data.forEach(item => {
        const clone = cardTemplate.content.cloneNode(true);

        const nameElement = clone.querySelector('.restaurant-name');
        nameElement.textContent = item.name;

        // 加上分類標籤顯示
        if (item.category) {
            nameElement.innerHTML += ` <span class="card-category-tag">${item.category}</span>`;
        }

        clone.querySelector('.recommendation-reason').textContent = item.reason;

        // 處理距離顯示
        if (item.distance !== undefined) {
            const distanceBadge = clone.querySelector('.distance-badge');
            distanceBadge.style.display = 'flex';

            // 如果大於 100 公里，可能表示在台灣，顯示為公里
            if (item.distance > 100) {
                clone.querySelector('.distance-value').textContent = `約 ${(item.distance).toFixed(0)} 公里`;
            } else if (item.distance < 1) { // 小於 1 公里，顯示公尺
                clone.querySelector('.distance-value').textContent = `${(item.distance * 1000).toFixed(0)} 公尺`;
            } else { // 1~100 公里
                clone.querySelector('.distance-value').textContent = `${item.distance.toFixed(1)} km`;
            }
        }

        // 處理 Google Maps 連結
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}&query_place_id=null`;
        clone.querySelector('.map-btn').href = mapUrl;

        restaurantList.appendChild(clone);
    });
}

// Haversine 公式計算兩點間的距離 (回傳公里)
function calculateDistances() {
    currentData.forEach(restaurant => {
        // 如果沒有經緯度則不計算
        if (!restaurant.lat || !restaurant.lng) return;

        const R = 6371; // 地球半徑 (公里)
        const dLat = deg2rad(restaurant.lat - currentPosition.lat);
        const dLng = deg2rad(restaurant.lng - currentPosition.lng);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(currentPosition.lat)) * Math.cos(deg2rad(restaurant.lat)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        restaurant.distance = R * c;
    });
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function getGeolocationErrorMessage(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            return "您拒絕了位置存取請求。";
        case error.POSITION_UNAVAILABLE:
            return "位置資訊無法取得。";
        case error.TIMEOUT:
            return "取得位置超時，請重試。";
        default:
            return "發生未知錯誤。";
    }
}

// 啟動 App
document.addEventListener('DOMContentLoaded', init);
