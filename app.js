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
const categoryTagsContainer = document.getElementById('category-tags-container');
const regionBtns = document.querySelectorAll('.region-btn');
const typeBtns = document.querySelectorAll('.type-btn');
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelModal = document.getElementById('btn-cancel-modal');
const addModal = document.getElementById('add-modal');
const addForm = document.getElementById('add-form');
const btnToggleMap = document.getElementById('btn-toggle-map');
const mapSection = document.getElementById('map-section');
const resultsSection = document.querySelector('.results-section');

// 分類配置
const categoryConfigs = {
    all: [],
    food: ["拉麵", "燒肉", "牛舌", "壽喜燒", "鰻魚", "炸豬排/牛排", "牛排", "咖啡甜點", "洋食", "壽司", "烏龍麵"],
    spot: ["神社寺院", "展望台", "主題樂園", "公園", "自然景觀", "購物中心"],
    shop: ["文具", "電器", "藥妝", "服飾", "伴手禮", "百貨公司"]
};

// 狀態管理
let currentPosition = null;
let currentData = [...japanRecommendationData];
let currentCategory = 'all';
let currentRegion = 'all';
let currentType = 'all';
let mapInstance = null;
let markersLayer = null;
let isMapMode = false;

// 取得所有資料 (基本 + 自訂)
function getAllData() {
    const savedData = localStorage.getItem('tokyoFoodMapCustomData');
    let customData = [];
    if (savedData) {
        try {
            customData = JSON.parse(savedData);
        } catch (e) {
            console.error('解析自訂資料失敗', e);
        }
    }
    // 回傳合併後的全新陣列
    return [...japanRecommendationData, ...customData].map(item => ({ ...item }));
}

// 啟動初始化
function init() {
    currentData = getAllData();
    renderCategoryTags(); // 初始化分類標籤
    applyFilters(); // 初始過濾
    setupEventListeners();
}

function setupEventListeners() {
    btnLocate.addEventListener('click', handleGeolocation);
    searchInput.addEventListener('input', handleSearch);

    // 動態分類標籤監聽 (使用事件代理)
    categoryTagsContainer.addEventListener('click', (e) => {
        const targetBtn = e.target.closest('.tag-btn');
        if (targetBtn) handleCategoryChange(targetBtn);
    });

    // 區域按鈕監聽
    regionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => handleRegionChange(e));
    });

    // 類型按鈕監聽
    typeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => handleTypeChange(e));
    });

    // 新增項目 Modal 監聽
    btnOpenModal.addEventListener('click', () => addModal.style.display = 'flex');
    btnCloseModal.addEventListener('click', closeAndResetModal);
    btnCancelModal.addEventListener('click', closeAndResetModal);

    // 點擊 Modal 外部關閉
    addModal.addEventListener('click', (e) => {
        if (e.target === addModal) closeAndResetModal();
    });

    // 處理表單送出
    addForm.addEventListener('submit', handleAddItem);

    // 處理地圖切換
    const btnMap = document.getElementById('btn-toggle-map');
    if (btnMap) {
        btnMap.addEventListener('click', toggleMapMode);
    }
}

function handleRegionChange(e) {
    const targetBtn = e.target.closest('.region-btn');
    if (!targetBtn) return;

    regionBtns.forEach(btn => btn.classList.remove('active'));
    targetBtn.classList.add('active');

    currentRegion = targetBtn.dataset.region;
    applyFilters();
}

function handleTypeChange(e) {
    const targetBtn = e.target.closest('.type-btn');
    if (!targetBtn) return;

    typeBtns.forEach(btn => btn.classList.remove('active'));
    targetBtn.classList.add('active');

    currentType = targetBtn.dataset.type;
    currentCategory = 'all'; // 切換大類型時，重設細分類

    renderCategoryTags(); // 更新細分類標籤
    applyFilters();
}

function renderCategoryTags() {
    categoryTagsContainer.innerHTML = '';

    // 預設加上「全部顯示」
    const allBtn = document.createElement('button');
    allBtn.className = `tag-btn ${currentCategory === 'all' ? 'active' : ''}`;
    allBtn.dataset.category = 'all';
    allBtn.textContent = '全部顯示';
    categoryTagsContainer.appendChild(allBtn);

    const categories = categoryConfigs[currentType] || [];
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `tag-btn ${currentCategory === cat ? 'active' : ''}`;
        btn.dataset.category = cat;
        btn.textContent = cat;
        categoryTagsContainer.appendChild(btn);
    });
}

function handleCategoryChange(targetBtn) {
    const allCategoryBtns = categoryTagsContainer.querySelectorAll('.tag-btn');
    allCategoryBtns.forEach(btn => btn.classList.remove('active'));
    targetBtn.classList.add('active');

    currentCategory = targetBtn.dataset.category;
    applyFilters();
}

function toggleMapMode() {
    isMapMode = !isMapMode;

    if (isMapMode) {
        btnToggleMap.innerHTML = '<i class="fa-solid fa-list"></i> 切換清單模式';
        resultsSection.style.display = 'none';
        mapSection.style.display = 'block';

        if (!mapInstance) {
            initMap();
        } else {
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
    const defaultCenter = [35.6812, 139.7671];
    const center = currentPosition ? [currentPosition.lat, currentPosition.lng] : defaultCenter;

    mapInstance = L.map('interactive-map').setView(center, currentPosition ? 13 : 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapInstance);

    markersLayer = L.layerGroup().addTo(mapInstance);
}

function updateMapMarkers() {
    if (!mapInstance || !markersLayer) return;

    markersLayer.clearLayers();

    // 使用者位置
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

    const bounds = L.latLngBounds();
    if (currentPosition) bounds.extend([currentPosition.lat, currentPosition.lng]);

    let hasValidItems = false;
    currentData.forEach(item => {
        if (item.lat && item.lng) {
            hasValidItems = true;

            const iconHtml = item.type === 'food' ? '<i class="fa-solid fa-utensils"></i>' :
                item.type === 'spot' ? '<i class="fa-solid fa-mountain-sun"></i>' :
                    '<i class="fa-solid fa-bag-shopping"></i>';

            const popupContent = `
                <div style="font-family: inherit; min-width: 200px;">
                    <h3 style="margin: 0 0 5px 0; font-size: 1.1rem;">${iconHtml} ${item.name}</h3>
                    <div style="margin-bottom: 5px;">
                        <span style="font-size: 0.8rem; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">${item.region}</span>
                        <span style="font-size: 0.8rem; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px; margin-left: 5px;">${item.category}</span>
                    </div>
                    <p style="margin: 8px 0; font-size: 0.9rem; color: #555;">${item.reason}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}&query_place_id=null" 
                       target="_blank" style="display: block; background: var(--secondary-color); color: white; text-align: center; padding: 8px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 10px;">
                        <i class="fa-solid fa-map-location-dot"></i> Google Maps 導航
                    </a>
                </div>
            `;

            L.marker([item.lat, item.lng])
                .bindPopup(popupContent)
                .addTo(markersLayer);

            bounds.extend([item.lat, item.lng]);
        }
    });

    if ((hasValidItems || currentPosition) && currentData.length > 0) {
        mapInstance.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
    }
}

function handleAddItem(e) {
    e.preventDefault();

    const newItem = {
        name: document.getElementById('new-name').value.trim(),
        region: document.getElementById('new-region').value,
        type: document.getElementById('new-type').value,
        category: document.getElementById('new-category').value.trim(),
        reason: document.getElementById('new-reason').value.trim(),
        mapsQuery: document.getElementById('new-name').value.trim() + " " + document.getElementById('new-region').value
    };

    const latInput = document.getElementById('new-lat').value;
    const lngInput = document.getElementById('new-lng').value;
    if (latInput && lngInput) {
        newItem.lat = parseFloat(latInput);
        newItem.lng = parseFloat(lngInput);
    }

    saveToLocalStorage(newItem);
    applyFilters();
    alert('成功新增項目！');
    closeAndResetModal();
}

function saveToLocalStorage(item) {
    const savedData = localStorage.getItem('tokyoFoodMapCustomData');
    let customData = [];
    if (savedData) {
        try {
            customData = JSON.parse(savedData);
        } catch (e) {
            console.error('解析自訂資料失敗', e);
        }
    }
    customData.push(item);
    localStorage.setItem('tokyoFoodMapCustomData', JSON.stringify(customData));
}

function handleGeolocation() {
    if (!navigator.geolocation) {
        alert('您的瀏覽器不支援地理位置功能！');
        return;
    }

    btnLocate.disabled = true;
    btnLocate.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 定位中...';
    locationTitle.textContent = '正在取得您的位置...';

    navigator.geolocation.getCurrentPosition(
        (position) => {
            currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            btnLocate.style.display = 'none';
            locationTitle.textContent = '📍 已取得您的座標';

            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${currentPosition.lat}&lon=${currentPosition.lng}&zoom=18&addressdetails=1`, {
                headers: { 'Accept-Language': 'zh-TW,zh;q=0.9,en;q=0.8' }
            })
                .then(response => response.json())
                .then(data => {
                    const address = data.display_name || '您的目前位置';
                    locationTitle.textContent = `📍 您目前位於: ${address}`;
                })
                .catch(() => {
                    locationTitle.textContent = '📍 已取得您的座標';
                });

            locationDesc.textContent = '已根據您的位置重新計算距離';
            sortOptions.style.display = 'block';

            const locationCard = document.querySelector('.location-card');
            if (locationCard) locationCard.style.display = 'none';

            applyFilters();
        },
        (error) => {
            btnLocate.disabled = false;
            btnLocate.innerHTML = '<i class="fa-solid fa-location-dot"></i> 重新嘗試定位';
            locationTitle.textContent = '無法取得位置';
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function applyFilters(searchTerm = searchInput.value.toLowerCase().trim()) {
    const allData = getAllData();

    currentData = allData.filter(item => {
        const matchSearch = item.name.toLowerCase().includes(searchTerm) ||
            item.reason.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm);

        const matchCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchRegion = currentRegion === 'all' || item.region === currentRegion;
        const matchType = currentType === 'all' || item.type === currentType;

        return matchSearch && matchCategory && matchRegion && matchType;
    });

    if (currentPosition) {
        calculateDistances(currentData);
        currentData.sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
    }

    renderList(currentData);
    if (isMapMode) updateMapMarkers();
}

function handleSearch(e) {
    applyFilters(e.target.value.toLowerCase().trim());
}

function renderList(data) {
    restaurantList.innerHTML = '';
    resultsCount.textContent = `(${data.length})`;

    if (data.length === 0) {
        restaurantList.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    restaurantList.style.display = 'grid';
    noResults.style.display = 'none';

    data.forEach(item => {
        const clone = cardTemplate.content.cloneNode(true);
        const nameElement = clone.querySelector('.restaurant-name');

        const typeIcon = item.type === 'food' ? '<i class="fa-solid fa-utensils"></i>' :
            item.type === 'spot' ? '<i class="fa-solid fa-mountain-sun"></i>' :
                '<i class="fa-solid fa-bag-shopping"></i>';

        nameElement.innerHTML = `${typeIcon} ${item.name} <span class="card-category-tag">${item.region} · ${item.category}</span>`;
        clone.querySelector('.recommendation-reason').textContent = item.reason;

        const distanceBadge = clone.querySelector('.distance-badge');
        const mapBtn = clone.querySelector('.map-btn');

        // 判斷是否需要地圖相關資訊 (經緯度)
        const hasCoords = item.lat && item.lng;

        if (item.distance !== undefined && hasCoords) {
            distanceBadge.style.display = 'flex';
            distanceBadge.querySelector('.distance-value').textContent =
                item.distance > 100 ? `約 ${item.distance.toFixed(0)} km` :
                    item.distance < 1 ? `${(item.distance * 1000).toFixed(0)} m` :
                        `${item.distance.toFixed(1)} km`;
        } else {
            distanceBadge.style.display = 'none';
        }

        // 判斷是否顯示地圖連結 (有經緯度 或 有指定店點 mapsQuery)
        if (hasCoords || item.mapsQuery) {
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery || item.name)}`;
            mapBtn.href = mapUrl;
            mapBtn.style.display = 'flex';
        } else {
            mapBtn.style.display = 'none';
        }

        restaurantList.appendChild(clone);
    });
}

function calculateDistances(data) {
    if (!currentPosition) return;
    const R = 6371;
    data.forEach(item => {
        if (!item.lat || !item.lng) return;
        const dLat = (item.lat - currentPosition.lat) * Math.PI / 180;
        const dLng = (item.lng - currentPosition.lng) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(currentPosition.lat * Math.PI / 180) * Math.cos(item.lat * Math.PI / 180) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        item.distance = R * c;
    });
}

function closeAndResetModal() {
    addModal.style.display = 'none';
    addForm.reset();
}

document.addEventListener('DOMContentLoaded', init);

