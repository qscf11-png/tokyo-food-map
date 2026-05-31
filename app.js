const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const searchInput = $('#search-input');
const searchClear = $('#search-clear');
const restaurantList = $('#restaurant-list');
const nearbyList = $('#nearby-list');
const resultsCount = $('#results-count');
const loadingSpinner = $('#loading-spinner');
const noResults = $('#no-results');
const sortOptions = $('#sort-options');
const cardTemplate = $('#card-template');
const categoryContainer = $('#category-tags-container');
const btnOpenModal = $('#btn-open-modal');
const btnCloseModal = $('#btn-close-modal');
const btnCancelModal = $('#btn-cancel-modal');
const addModal = $('#add-modal');
const addForm = $('#add-form');
const btnLocate = $('#btn-locate');
const locationTitle = $('#location-title');
const locationDesc = $('#location-desc');

// 細分類改為依實際資料動態產生 (見 renderCategoryTags)

let currentPosition = null;
let currentData = [];
let currentCategory = 'all';
let currentRegion = 'all';
let currentType = 'all';
let mapInstance = null;
let markersLayer = null;
let activePage = 'page-explore';

function getAllData() {
    const saved = localStorage.getItem('tokyoFoodMapCustomData');
    let custom = [];
    if (saved) {
        try { custom = JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return [...japanRecommendationData, ...custom].map(item => ({ ...item }));
}

function init() {
    currentData = getAllData();
    renderCategoryTags();
    applyFilters();
    setupEvents();
}

function setupEvents() {
    // 底部導航
    $$('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => switchPage(btn.dataset.page));
    });

    // 區域
    $$('.region-chips .chip').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.region-chips .chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentRegion = btn.dataset.region;
            currentCategory = 'all'; // 切換地區時重設細分類
            renderCategoryTags();    // 依新地區更新可用分類
            applyFilters();
        });
    });

    // 類型
    $$('.type-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.type-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentType = btn.dataset.type;
            currentCategory = 'all';
            renderCategoryTags();
            applyFilters();
        });
    });

    // 細分類 (事件代理)
    categoryContainer.addEventListener('click', (e) => {
        const tag = e.target.closest('.cat-tag');
        if (!tag) return;
        categoryContainer.querySelectorAll('.cat-tag').forEach(b => b.classList.remove('active'));
        tag.classList.add('active');
        currentCategory = tag.dataset.category;
        applyFilters();
    });

    // 搜尋
    searchInput.addEventListener('input', (e) => {
        searchClear.style.display = e.target.value ? 'flex' : 'none';
        applyFilters(e.target.value.toLowerCase().trim());
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchClear.style.display = 'none';
        applyFilters();
    });

    // 定位
    btnLocate.addEventListener('click', handleGeolocation);

    // Modal
    btnOpenModal.addEventListener('click', () => { addModal.style.display = 'flex'; });
    btnCloseModal.addEventListener('click', closeModal);
    btnCancelModal.addEventListener('click', closeModal);
    addModal.addEventListener('click', (e) => { if (e.target === addModal) closeModal(); });
    addForm.addEventListener('submit', handleAddItem);
}

function switchPage(pageId) {
    activePage = pageId;

    $$('.page').forEach(p => p.classList.remove('active'));
    $(`#${pageId}`).classList.add('active');

    $$('.nav-item').forEach(n => n.classList.remove('active'));
    $$(`.nav-item[data-page="${pageId}"]`).forEach(n => n.classList.add('active'));

    // 顯示/隱藏 header
    const header = $('#app-header');
    if (pageId === 'page-map') {
        header.style.display = 'none';
    } else {
        header.style.display = 'block';
    }

    if (pageId === 'page-map') {
        if (!mapInstance) {
            setTimeout(() => { initMap(); updateMapMarkers(); }, 150);
        } else {
            setTimeout(() => { mapInstance.invalidateSize(); updateMapMarkers(); }, 150);
        }
    }

    if (pageId === 'page-nearby' && currentPosition) {
        renderNearbyList();
    }
}

function renderCategoryTags() {
    categoryContainer.innerHTML = '';

    // 選「全部」類型時不顯示細分類
    if (currentType === 'all') return;

    const allBtn = document.createElement('button');
    allBtn.className = `cat-tag ${currentCategory === 'all' ? 'active' : ''}`;
    allBtn.dataset.category = 'all';
    allBtn.textContent = '全部';
    categoryContainer.appendChild(allBtn);

    // 依目前類型與地區，從實際資料動態取出存在的分類 (大阪/京都分類會自動出現)
    const cats = [...new Set(
        getAllData()
            .filter(item => item.type === currentType && (currentRegion === 'all' || item.region === currentRegion))
            .map(item => item.category)
    )];
    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `cat-tag ${currentCategory === cat ? 'active' : ''}`;
        btn.dataset.category = cat;
        btn.textContent = cat;
        categoryContainer.appendChild(btn);
    });
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

    renderList(currentData, restaurantList);

    if (activePage === 'page-map' && mapInstance) {
        updateMapMarkers();
    }
}

function renderList(data, container) {
    container.innerHTML = '';
    resultsCount.textContent = `${data.length} 項結果`;

    if (data.length === 0) {
        container.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    container.style.display = 'flex';
    noResults.style.display = 'none';

    data.forEach(item => {
        const clone = cardTemplate.content.cloneNode(true);
        const card = clone.querySelector('.item-card');
        card.setAttribute('data-type', item.type || 'food');

        const typeIcon = item.type === 'food' ? '🍜' : item.type === 'spot' ? '⛩️' : '🛍️';
        const nameEl = clone.querySelector('.restaurant-name');
        nameEl.innerHTML = `<span class="card-type-icon">${typeIcon}</span>${item.name}<span class="card-tag">${item.region} · ${item.category}</span>`;

        clone.querySelector('.recommendation-reason').textContent = item.reason;

        const badge = clone.querySelector('.distance-badge');
        const hasCoords = item.lat && item.lng;

        if (item.distance !== undefined && hasCoords) {
            badge.style.display = 'flex';
            badge.querySelector('.distance-value').textContent =
                item.distance > 100 ? `${item.distance.toFixed(0)} km` :
                    item.distance < 1 ? `${(item.distance * 1000).toFixed(0)} m` :
                        `${item.distance.toFixed(1)} km`;
        }

        const mapBtn = clone.querySelector('.map-btn');
        if (hasCoords || item.mapsQuery) {
            mapBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery || item.name)}`;
        } else {
            mapBtn.style.display = 'none';
        }

        container.appendChild(clone);
    });
}

function renderNearbyList() {
    if (!currentPosition) return;

    const allData = getAllData();
    calculateDistances(allData);
    const nearbyData = allData
        .filter(item => item.distance !== undefined)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 20);

    nearbyList.innerHTML = '';

    nearbyData.forEach(item => {
        const clone = cardTemplate.content.cloneNode(true);
        const card = clone.querySelector('.item-card');
        card.setAttribute('data-type', item.type || 'food');

        const typeIcon = item.type === 'food' ? '🍜' : item.type === 'spot' ? '⛩️' : '🛍️';
        const nameEl = clone.querySelector('.restaurant-name');
        nameEl.innerHTML = `<span class="card-type-icon">${typeIcon}</span>${item.name}<span class="card-tag">${item.region} · ${item.category}</span>`;

        clone.querySelector('.recommendation-reason').textContent = item.reason;

        const badge = clone.querySelector('.distance-badge');
        if (item.distance !== undefined) {
            badge.style.display = 'flex';
            badge.querySelector('.distance-value').textContent =
                item.distance > 100 ? `${item.distance.toFixed(0)} km` :
                    item.distance < 1 ? `${(item.distance * 1000).toFixed(0)} m` :
                        `${item.distance.toFixed(1)} km`;
        }

        const mapBtn = clone.querySelector('.map-btn');
        if (item.lat && item.lng || item.mapsQuery) {
            mapBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery || item.name)}`;
        } else {
            mapBtn.style.display = 'none';
        }

        nearbyList.appendChild(clone);
    });
}

function handleGeolocation() {
    if (!navigator.geolocation) {
        showToast('您的瀏覽器不支援定位功能');
        return;
    }

    btnLocate.disabled = true;
    btnLocate.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>定位中...</span>';
    locationTitle.textContent = '正在取得位置...';

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            currentPosition = { lat: pos.coords.latitude, lng: pos.coords.longitude };

            btnLocate.classList.add('located');
            btnLocate.innerHTML = '<i class="fa-solid fa-check"></i><span>已定位</span>';
            btnLocate.disabled = false;

            locationTitle.textContent = '📍 已取得您的位置';
            locationDesc.textContent = '下方依距離排序顯示最近的推薦';
            sortOptions.style.display = 'flex';

            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${currentPosition.lat}&lon=${currentPosition.lng}&zoom=18&addressdetails=1`, {
                headers: { 'Accept-Language': 'zh-TW,zh;q=0.9,en;q=0.8' }
            })
                .then(r => r.json())
                .then(data => {
                    if (data.display_name) {
                        locationTitle.textContent = `📍 ${data.display_name}`;
                    }
                })
                .catch(() => {});

            applyFilters();
            renderNearbyList();
            showToast('定位成功！已依距離排序');
        },
        () => {
            btnLocate.disabled = false;
            btnLocate.innerHTML = '<i class="fa-solid fa-location-dot"></i><span>重新定位</span>';
            locationTitle.textContent = '定位失敗';
            locationDesc.textContent = '請確認已允許位置存取權限';
            showToast('無法取得位置，請檢查權限設定');
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function initMap() {
    const center = currentPosition ? [currentPosition.lat, currentPosition.lng] : [35.6812, 139.7671];
    const zoom = currentPosition ? 13 : 6;

    mapInstance = L.map('interactive-map', {
        zoomControl: false
    }).setView(center, zoom);

    L.control.zoom({ position: 'bottomright' }).addTo(mapInstance);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 19
    }).addTo(mapInstance);

    markersLayer = L.layerGroup().addTo(mapInstance);
    updateMapMarkers();
}

function updateMapMarkers() {
    if (!mapInstance || !markersLayer) return;
    markersLayer.clearLayers();

    if (currentPosition) {
        const userIcon = L.divIcon({
            html: '<div style="width:14px;height:14px;background:#ff6b6b;border-radius:50%;border:3px solid white;box-shadow:0 0 10px rgba(255,107,107,0.6);"></div>',
            iconSize: [14, 14],
            className: ''
        });
        L.marker([currentPosition.lat, currentPosition.lng], { icon: userIcon, zIndexOffset: 1000 })
            .bindPopup('<b>📍 您的位置</b>')
            .addTo(markersLayer);
    }

    const bounds = L.latLngBounds();
    if (currentPosition) bounds.extend([currentPosition.lat, currentPosition.lng]);

    let hasItems = false;
    currentData.forEach(item => {
        if (!item.lat || !item.lng) return;
        hasItems = true;

        const colors = { food: '#ff6b6b', spot: '#ffd93d', shop: '#4ecdc4' };
        const icons = { food: '🍜', spot: '⛩️', shop: '🛍️' };
        const color = colors[item.type] || '#ff6b6b';

        const icon = L.divIcon({
            html: `<div style="width:30px;height:30px;background:${color};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 2px 8px ${color}80;border:2px solid rgba(255,255,255,0.3);">${icons[item.type] || '📍'}</div>`,
            iconSize: [30, 30],
            className: ''
        });

        const popup = `
            <div style="min-width:180px;">
                <div class="popup-name">${icons[item.type] || ''} ${item.name}</div>
                <div class="popup-tags">
                    <span class="popup-tag">${item.region}</span>
                    <span class="popup-tag">${item.category}</span>
                </div>
                <div class="popup-reason">${item.reason}</div>
                <a class="popup-nav-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery || item.name)}" target="_blank">
                    <i class="fa-solid fa-diamond-turn-right"></i> 導航
                </a>
            </div>
        `;

        L.marker([item.lat, item.lng], { icon }).bindPopup(popup).addTo(markersLayer);
        bounds.extend([item.lat, item.lng]);
    });

    if ((hasItems || currentPosition) && currentData.length > 0) {
        try { mapInstance.fitBounds(bounds, { padding: [40, 40], maxZoom: 15, animate: false }); } catch (e) { /* ignore */ }
    }
}

function handleAddItem(e) {
    e.preventDefault();

    const newItem = {
        name: $('#new-name').value.trim(),
        region: $('#new-region').value,
        type: $('#new-type').value,
        category: $('#new-category').value.trim(),
        reason: $('#new-reason').value.trim(),
        mapsQuery: $('#new-name').value.trim() + ' ' + $('#new-region').value
    };

    const lat = $('#new-lat').value;
    const lng = $('#new-lng').value;
    if (lat && lng) {
        newItem.lat = parseFloat(lat);
        newItem.lng = parseFloat(lng);
    }

    saveToLocalStorage(newItem);
    applyFilters();
    showToast('已新增推薦項目！');
    closeModal();
}

function saveToLocalStorage(item) {
    const saved = localStorage.getItem('tokyoFoodMapCustomData');
    let custom = [];
    if (saved) {
        try { custom = JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    custom.push(item);
    localStorage.setItem('tokyoFoodMapCustomData', JSON.stringify(custom));
}

function calculateDistances(data) {
    if (!currentPosition) return;
    const R = 6371;
    data.forEach(item => {
        if (!item.lat || !item.lng) return;
        const dLat = (item.lat - currentPosition.lat) * Math.PI / 180;
        const dLng = (item.lng - currentPosition.lng) * Math.PI / 180;
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(currentPosition.lat * Math.PI / 180) * Math.cos(item.lat * Math.PI / 180) *
            Math.sin(dLng / 2) ** 2;
        item.distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    });
}

function closeModal() {
    addModal.style.display = 'none';
    addForm.reset();
}

function showToast(msg) {
    let toast = $('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
}

document.addEventListener('DOMContentLoaded', init);
