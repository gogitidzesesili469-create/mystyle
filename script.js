// საიტის საწყისი მონაცემები და კატალოგი
const initialCatalog = [
    { id: 1, name: "თეთრი ნაქსოვი ტოპი", category: "top", style: "casual", season: "summer", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500" },
    { id: 2, name: "კლასიკური შავი პიჯაკი", category: "outerwear", style: "elegant", season: "autumn", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500" },
    { id: 3, name: "მაღალწელიანი ჯინსი", category: "bottom", style: "streetwear", season: "spring", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500" },
    { id: 4, name: "აბრეშუმის ზაფხულის კაბა", category: "dresses", style: "coquette", season: "summer", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" },
    { id: 5, name: "ბეჟი ყოველდღიური შარვალი", category: "bottom", style: "old-money", season: "autumn", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500" },
    { id: 6, name: "კლასიკური თეთრი პერანგი", category: "shirts", style: "old-money", season: "spring", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500" },
    { id: 7, name: "რბილი ჰუდი", category: "sweaters", style: "streetwear", season: "winter", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500" },
    { id: 8, name: "ტყავის ქურთუკი", category: "outerwear", style: "streetwear", season: "autumn", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" }
];

const shoesCatalog = [
    { id: 101, name: "თეთრი ბოტასები", category: "shoes", style: "casual", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500" },
    { id: 102, name: "შავი მაღალქუსლიანი", category: "shoes", style: "elegant", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500" },
    { id: 103, name: "ზამთრის ტყავის ჩექმები", category: "shoes", style: "streetwear", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500" }
];

const accessoriesCatalog = [
    { id: 201, name: "ოქროსფერი ყელსაბამი", category: "accessory", style: "elegant", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500" },
    { id: 202, name: "მზის სათვალე", category: "accessory", style: "streetwear", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" }
];

const bagsCatalog = [
    { id: 301, name: "ტყავის ხელჩანთა", category: "bag", style: "old-money", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" },
    { id: 302, name: "პატარა საღამოს ჩანთა", category: "bag", style: "coquette", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500" }
];

const fashionStyles = [
    { name: "კოკეტის სტილი", original: "Coquette", desc: "ნაზი, ვარდისფერი და რომანტიკული დეტალები.", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" },
    { name: "ძველი ფულის სტილი", original: "Old Money", desc: "დანახარჯების გარეშე არისტოკრატული და მდიდრული მინიმალიზმი.", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500" },
    { name: "მინიმალისტური ყოველდღიური", original: "Clean Girl", desc: "სუფთა ხაზები, სადა ფერები და მოწესრიგებული ლუქი.", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500" },
    { name: "ქუჩის სტილი", original: "Streetwear", desc: "თავისუფალი ჰუდები, ჯინსები და სპორტული ფეხსაცმელები.", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500" }
];

// მიმდინარე აწყობილი აუთფიტი
let currentOutfit = {
    outerwear: null,
    top: null,
    bottom: null,
    shoes: null,
    bag: null,
    accessory: null
};

// აპლიკაციის ინიციალიზაცია
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    loadCatalogGrid('clothing-grid', initialCatalog);
    loadCatalogGrid('shoes-grid', shoesCatalog);
    loadCatalogGrid('accessories-grid', accessoriesCatalog);
    loadCatalogGrid('bags-grid', bagsCatalog);
    loadStylesGrid();
    loadPickerItems('all');
    loadUserWardrobe();
    loadSavedOutfits();
    setupFilters();
});

// ნავიგაცია
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const target = btn.getAttribute('data-target');
            document.querySelectorAll('.content-section').forEach(sec => {
                sec.classList.remove('active');
            });
            document.getElementById(target).classList.add('active');
        });
    });
}

function switchSection(targetId) {
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => {
        if(b.getAttribute('data-target') === targetId) b.classList.add('active');
        else b.classList.remove('active');
    });
}

function navigateToCategory(sectionId, cat) {
    switchSection(sectionId);
    if(sectionId === 'catalog-section') {
        document.getElementById('clothing-cat-filter').value = cat;
        filterCatalog();
    }
}

// კატალოგების ჩატვირთვა
function loadCatalogGrid(elementId, items) {
    const grid = document.getElementById(elementId);
    if(!grid) return;
    grid.innerHTML = items.map(item => `
        <div class="item-card">
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${translateCategory(item.category)}</p>
            <button class="secondary-btn" style="padding: 5px 10px; font-size:12px;" onclick='addToOutfitFromCatalog(${JSON.stringify(item)})'>აუთფიტში დამატება</button>
        </div>
    `).join('');
}

function translateCategory(cat) {
    const map = {
        top: "მაისური / ტოპი",
        bottom: "შარვალი / ქვედაბოლო",
        outerwear: "ქურთუკი / პალტო",
        shoes: "ფეხსაცმელი",
        bag: "ჩანთა",
        accessory: "აქსესუარი",
        shirts: "პერანგი",
        sweaters: "სვიტერი",
        dresses: "კაბა"
    };
    return map[cat] || cat;
}

// სტილების ჩატვირთვა
function loadStylesGrid() {
    const grid = document.getElementById('styles-grid-container');
    if(!grid) return;
    grid.innerHTML = fashionStyles.map(s => `
        <div class="item-card">
            <img src="${s.image}" alt="${s.name}">
            <h4>${s.name} (${s.original})</h4>
            <p>${s.desc}</p>
        </div>
    `).join('');
}

// აუთფიტების აწყობის ლოგიკა
function loadPickerItems(filterCat) {
    let allAvailable = [...initialCatalog, ...shoesCatalog, ...accessoriesCatalog, ...bagsCatalog];
    let userItems = JSON.parse(localStorage.getItem('user_wardrobe') || '[]');
    let combined = [...allAvailable, ...userItems];

    if(filterCat !== 'all') {
        combined = combined.filter(i => i.category === filterCat);
    }

    const pickerGrid = document.getElementById('picker-items');
    pickerGrid.innerHTML = combined.map(item => `
        <div class="picker-item" onclick='selectItemForOutfit(${JSON.stringify(item)})'>
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
        </div>
    `).join('');
}

function filterPicker(cat) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    loadPickerItems(cat);
}

function selectItemForOutfit(item) {
    let slotName = item.category;
    if(slotName === 'shirts' || slotName === 'sweaters') slotName = 'top';
    if(slotName === 'skirts' || slotName === 'shorts') slotName = 'bottom';
    
    currentOutfit[slotName] = item;
    updateMannequinDisplay();
}

function addToOutfitFromCatalog(item) {
    switchSection('builder-section');
    selectItemForOutfit(item);
}

function updateMannequinDisplay() {
    for(let slot in currentOutfit) {
        let slotEl = document.querySelector(`.slot[data-slot="${slot}"]`);
        if(!slotEl) continue;
        let item = currentOutfit[slot];
        if(item) {
            slotEl.innerHTML = `<strong>${translateSlot(slot)}:</strong> ${item.name}`;
            slotEl.classList.add('filled');
        } else {
            slotEl.innerHTML = `${translateSlot(slot)} (+)`;
            slotEl.classList.remove('filled');
        }
    }
}

function translateSlot(slot) {
    const map = { outerwear: "ქურთუკი/პალტო", top: "ზედა", bottom: "ქვედა", shoes: "ფეხსაცმელი", bag: "ჩანთა", accessory: "აქსესუარი" };
    return map[slot] || slot;
}

function clearOutfit() {
    currentOutfit = { outerwear: null, top: null, bottom: null, shoes: null, bag: null, accessory: null };
    updateMannequinDisplay();
}

function randomizeOutfit() {
    let allAvailable = [...initialCatalog, ...shoesCatalog, ...accessoriesCatalog, ...bagsCatalog, ...JSON.parse(localStorage.getItem('user_wardrobe') || '[]')];
    
    ['outerwear', 'top', 'bottom', 'shoes', 'bag', 'accessory'].forEach(slot => {
        let matches = allAvailable.filter(i => {
            if(slot === 'top') return i.category === 'top' || i.category === 'shirts' || i.category === 'sweaters';
            if(slot === 'bottom') return i.category === 'bottom' || i.category === 'skirts' || i.category === 'shorts';
            return i.category === slot;
        });
        if(matches.length > 0) {
            currentOutfit[slot] = matches[Math.floor(Math.random() * matches.length)];
        }
    });
    updateMannequinDisplay();
}

// შენახვა
function saveOutfit() {
    let saved = JSON.parse(localStorage.getItem('saved_outfits') || '[]');
    saved.push({ id: Date.now(), items: { ...currentOutfit } });
    localStorage.setItem('saved_outfits', JSON.stringify(saved));
    alert("აუთფიტი წარმატებით შეინახა რჩეულებში!");
    loadSavedOutfits();
}

function loadSavedOutfits() {
    let saved = JSON.parse(localStorage.getItem('saved_outfits') || '[]');
    const grid = document.getElementById('saved-outfits-grid');
    if(!grid) return;
    if(saved.length === 0) {
        grid.innerHTML = "<p>ჯერ არ გაქვთ შენახული აუთფიტები.</p>";
        return;
    }
    grid.innerHTML = saved.map(outfit => `
        <div class="item-card">
            <h4>შენახული ლუქი #${outfit.id.toString().slice(-4)}</h4>
            <div style="font-size:12px; color:#666; margin: 10px 0;">
                ${Object.values(outfit.items).filter(i => i !== null).map(i => i.name).join(', ')}
            </div>
            <button class="secondary-btn" style="padding:5px 10px; font-size:12px;" onclick="deleteOutfit(${outfit.id})">წაშლა</button>
        </div>
    `).join('');
}

function deleteOutfit(id) {
    let saved = JSON.parse(localStorage.getItem('saved_outfits') || '[]');
    saved = saved.filter(o => o.id !== id);
    localStorage.setItem('saved_outfits', JSON.stringify(saved));
    loadSavedOutfits();
}

// გარდერობი და ატვირთვა
function openUploadModal() {
    document.getElementById('upload-modal').style.display = 'flex';
}

function closeUploadModal() {
    document.getElementById('upload-modal').style.display = 'none';
}

document.getElementById('item-file')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            document.getElementById('image-preview').innerHTML = `<img src="${evt.target.result}" alt="Preview">`;
        }
        reader.readAsDataURL(file);
    }
});

function handleItemUpload(e) {
    e.preventDefault();
    const name = document.getElementById('item-name').value;
    const category = document.getElementById('item-category').value;
    const previewImg = document.querySelector('#image-preview img');
    
    if(!previewImg) {
        alert("გთხოვთ ატვირთოთ ფოტო!");
        return;
    }

    const newItem = {
        id: Date.now(),
        name: name,
        category: category,
        style: "casual",
        image: previewImg.src
    };

    let wardrobe = JSON.parse(localStorage.getItem('user_wardrobe') || '[]');
    wardrobe.push(newItem);
    localStorage.setItem('user_wardrobe', JSON.stringify(wardrobe));

    closeUploadModal();
    loadUserWardrobe();
    document.getElementById('upload-form').reset();
    document.getElementById('image-preview').innerHTML = '<span>ფოტოს წინასწარი ნახაზი</span>';
}

function loadUserWardrobe() {
    let wardrobe = JSON.parse(localStorage.getItem('user_wardrobe') || '[]');
    const grid = document.getElementById('user-wardrobe-grid');
    if(!grid) return;
    if(wardrobe.length === 0) {
        grid.innerHTML = "<p>თქვენი გარდერობი ცარიელია. დაამატეთ საკუთარი ნივთები!</p>";
        return;
    }
    grid.innerHTML = wardrobe.map(item => `
        <div class="item-card">
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${translateCategory(item.category)}</p>
            <button class="secondary-btn" style="padding: 5px 10px; font-size:12px; margin-right:5px;" onclick='addToOutfitFromCatalog(${JSON.stringify(item)})'>აუთფიტში</button>
            <button class="secondary-btn" style="padding: 5px 10px; font-size:12px; background:#ffdddd;" onclick="deleteUserItem(${item.id})">წაშლა</button>
        </div>
    `).join('');
}

function deleteUserItem(id) {
    let wardrobe = JSON.parse(localStorage.getItem('user_wardrobe') || '[]');
    wardrobe = wardrobe.filter(i => i.id !== id);
    localStorage.setItem('user_wardrobe', JSON.stringify(wardrobe));
    loadUserWardrobe();
}

// ფილტრაცია და ძებნა
function setupFilters() {
    const catFilter = document.getElementById('clothing-cat-filter');
    const styleFilter = document.getElementById('clothing-style-filter');
    const seasonFilter = document.getElementById('clothing-season-filter');

    if(catFilter) {
        catFilter.addEventListener('change', filterCatalog);
        styleFilter.addEventListener('change', filterCatalog);
        seasonFilter.addEventListener('change', filterCatalog);
    }
}

function filterCatalog() {
    const cat = document.getElementById('clothing-cat-filter').value;
    const style = document.getElementById('clothing-style-filter').value;
    const season = document.getElementById('clothing-season-filter').value;

    let filtered = initialCatalog.filter(item => {
        let matchCat = (cat === 'all' || item.category === cat);
        let matchStyle = (style === 'all' || item.style === style);
        let matchSeason = (season === 'all' || item.season === season);
        return matchCat && matchStyle && matchSeason;
    });

    loadCatalogGrid('clothing-grid', filtered);
}