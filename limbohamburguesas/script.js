/**
 * LIMBO BURGERS v17.0 - ELITE ENGINE
 * Catálogo Completo de 43 Productos & Logística Mendoza
 */

const IMGS = {
    carne: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    pollo: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=600&q=80",
    veggie: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&q=80",
    sides: "https://www.cucinare.tv/wp-content/uploads/2024/08/Papas-fritas-7.jpg",
    alcohol: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80",
    bebidas: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80"
};

const PRODUCTS = [
    // --- HAMBURGUESAS CARNE (6) ---
    { id: 1, name: "Diablo Burger", price: 9800, cat: "burgers", type: "beef", img: IMGS.carne, desc: "Doble carne, cheddar, jalapeños y salsa volcánica." },
    { id: 2, name: "Limbus Quad", price: 12500, cat: "burgers", type: "beef", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80", desc: "4 medallones de 120g, extra bacon y baño de cheddar." },
    { id: 3, name: "Inferno BBQ", price: 9200, cat: "burgers", type: "beef", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80", desc: "Carne premium, aros de cebolla y BBQ ahumada." },
    { id: 4, name: "Purgatorio", price: 8900, cat: "burgers", type: "beef", img: IMGS.carne, desc: "Huevo frito, jamón, muzzarella y cebolla caramelizada." },
    { id: 5, name: "Cheese Explosion", price: 8500, cat: "burgers", type: "beef", img: IMGS.carne, desc: "Bañada en fondue de queso cheddar premium." },
    { id: 6, name: "Classic King", price: 7800, cat: "burgers", type: "beef", img: IMGS.carne, desc: "La tradicional: lechuga, tomate, cheddar y mayo." },

    // --- HAMBURGUESAS POLLO (3) ---
    { id: 7, name: "Holy Chicken", price: 8200, cat: "burgers", type: "chicken", img: IMGS.pollo, desc: "Pechuga crispy, alioli de lima y rúcula fresca." },
    { id: 8, name: "Crispy Angel", price: 8500, cat: "burgers", type: "chicken", img: IMGS.pollo, desc: "Doble pollo frito estilo Kentucky y pepinillos." },
    { id: 9, name: "Lemon Poultry", price: 8100, cat: "burgers", type: "chicken", img: IMGS.pollo, desc: "Pollo grillado con hierbas y crema de limón." },

    // --- VEGGIE / VEGAN (6) ---
    { id: 10, name: "Eden Plant", price: 8800, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "NotBurger, palta, tomate y cebolla morada." },
    { id: 11, name: "Falafel Heaven", price: 7900, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "Falafel casero, yogur vegano y menta fresca." },
    { id: 12, name: "Green Soul", price: 8200, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "Espinaca, avena y parmesano vegano." },
    { id: 13, name: "Vegan Beast", price: 9100, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "Doble medallón NotBurger y queso de almendras." },
    { id: 14, name: "Mushroom Zen", price: 8600, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "Gírgolas grilladas, hummus y brotes verdes." },
    { id: 15, name: "Tofu Fire", price: 8300, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "Tofu marinado en sriracha y sésamo negro." },

    // --- ACOMPAÑAMIENTOS (8) ---
    { id: 16, name: "Papas Cheddar", price: 4500, cat: "sides", img: IMGS.sides, desc: "Papas bastón con lluvia de cheddar y bacon." },
    { id: 17, name: "Papas Trufadas", price: 5200, cat: "sides", img: IMGS.sides, desc: "Aceite de trufa y queso parmesano rallado." },
    { id: 18, name: "Aros de Cebolla", price: 3800, cat: "sides", img: IMGS.sides, desc: "12 unidades crujientes con salsa BBQ." },
    { id: 19, name: "Nuggets de Pollo", price: 4200, cat: "sides", img: IMGS.sides, desc: "10 unidades de puro pollo con dip de mostaza." },
    { id: 20, name: "Bastones Muzza", price: 4800, cat: "sides", img: IMGS.sides, desc: "6 unidades con corazón de muzzarella hilada." },
    { id: 21, name: "Alitas BBQ", price: 5500, cat: "sides", img: IMGS.sides, desc: "6 alitas picantes estilo Buffalo." },
    { id: 22, name: "Coleslaw", price: 2900, cat: "sides", isVegan: true, img: IMGS.sides, desc: "Ensalada clásica de repollo y zanahoria." },
    { id: 23, name: "Papas Rústicas", price: 3500, cat: "sides", isVegan: true, img: IMGS.sides, desc: "Corte grueso con piel y romero fresco." },

    // --- BEBIDAS ALCOHOL (6) ---
    { id: 24, name: "Cerveza IPA", price: 3500, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 25, name: "Cerveza Rubia", price: 3000, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 26, name: "Fernet Branca", price: 4500, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 27, name: "Gin Tonic", price: 4800, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 28, name: "Negroni", price: 5000, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 29, name: "Copa Malbec", price: 3800, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },

    // --- BEBIDAS SIN ALCOHOL (14) ---
    { id: 30, name: "Coca Cola 500", price: 1800, cat: "drinks", img: IMGS.bebidas },
    { id: 31, name: "Coca Zero 500", price: 1800, cat: "drinks", img: IMGS.bebidas },
    { id: 32, name: "Sprite 500", price: 1800, cat: "drinks", img: IMGS.bebidas },
    { id: 33, name: "Fanta 500", price: 1800, cat: "drinks", img: IMGS.bebidas },
    { id: 34, name: "Agua Mineral", price: 1500, cat: "drinks", img: IMGS.bebidas },
    { id: 35, name: "Limonada Real", price: 2200, cat: "drinks", img: IMGS.bebidas },
    { id: 36, name: "Jugo Naranja", price: 2000, cat: "drinks", img: IMGS.bebidas },
    { id: 37, name: "Pomelada", price: 2200, cat: "drinks", img: IMGS.bebidas },
    { id: 38, name: "Paso de los Toros", price: 1800, cat: "drinks", img: IMGS.bebidas },
    { id: 39, name: "Aquarius Pera", price: 1700, cat: "drinks", img: IMGS.bebidas },
    { id: 40, name: "Aquarius Manzana", price: 1700, cat: "drinks", img: IMGS.bebidas },
    { id: 41, name: "Licuado Frutilla", price: 2800, cat: "drinks", img: IMGS.bebidas },
    { id: 42, name: "Licuado Banana", price: 2800, cat: "drinks", img: IMGS.bebidas },
    { id: 43, name: "Soda Sifón", price: 1200, cat: "drinks", img: IMGS.bebidas }
];

let cart = JSON.parse(localStorage.getItem('limbo_v17_cart')) || [];
let deliveryMode = 'pickup';
let currentProduct = null;

// --- INICIALIZACIÓN ---
function init() {
    renderMenu();
    updateCartUI();
    updateBusinessStatus();
    setInterval(updateBusinessStatus, 60000);
}

// --- LÓGICA DE ESTADO DEL LOCAL ---
function updateBusinessStatus() {
    const hour = new Date().getHours();
    const led = document.getElementById('led-indicator');
    const text = document.getElementById('status-text');
    const orderBtn = document.getElementById('orderBtn');
    
    // Abierto de 12:00 a 23:00
    const isOpen = hour >= 12 && hour < 23;
    
    if (isOpen) {
        led.className = 'led open';
        text.innerText = 'PARRILLA ENCENDIDA';
        text.style.color = '#25D366';
        if(orderBtn) orderBtn.disabled = false;
    } else {
        led.className = 'led closed';
        text.innerText = 'LOCAL CERRADO (12-23hs)';
        text.style.color = '#FF4500';
        if(orderBtn) orderBtn.disabled = true;
    }
}

// --- RENDERIZADO DEL MENÚ ---
function renderMenu(filter = 'all') {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
    
    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                ${p.isVegan ? '<span class="badge badge-vegan">🌱 VEGAN</span>' : ''}
                ${p.isAlcohol ? '<span class="badge badge-alcohol">🔞 +18</span>' : ''}
                <img src="${p.img}" class="product-img" alt="${p.name}" loading="lazy">
                <div class="product-info">
                    <h3>${p.name.toUpperCase()}</h3>
                    <p>${p.desc || 'Disfruta el sabor prohibido.'}</p>
                    <span class="price-tag">$${p.price.toLocaleString()}</span>
                    <button class="add-btn" onclick="handleProductAction(${p.id})">AGREGAR AL PEDIDO</button>
                </div>
            </div>
        `;
    });
}

// --- MANEJO DE ACCIÓN (MODAL O DIRECTO) ---
function handleProductAction(id) {
    const p = PRODUCTS.find(prod => prod.id === id);
    if(p.isAlcohol) {
        currentProduct = p;
        document.getElementById('ageModal').style.display = 'flex';
    } else if(p.cat === 'burgers' || p.cat === 'veggie') {
        openCustomModal(p);
    } else {
        addToCart(p.id, "Tradicional", 0);
    }
}

// --- MODAL PERSONALIZACIÓN ---
function openCustomModal(p) {
    currentProduct = p;
    const body = document.getElementById('modalBody');
    body.innerHTML = `<h2>${p.name}</h2>`;
    
    if (p.type === 'beef') {
        body.innerHTML += `
            <div class="opt-group">
                <label>PUNTO DE COCCIÓN:</label>
                <select id="cook-point" onchange="updateModalPrice()">
                    <option value="A punto">A punto (Jugosa)</option>
                    <option value="Cocida">Bien cocida</option>
                </select>
            </div>`;
    }
    
    body.innerHTML += `
        <div class="opt-group">
            <label><input type="checkbox" id="no-cebolla"> Sin Cebolla</label>
            <label><input type="checkbox" id="no-tomate"> Sin Tomate</label>
        </div>
        <div class="opt-group">
            <p style="margin-bottom:10px; font-weight:800; color:var(--primary-fire);">EXTRAS:</p>
            <label><input type="checkbox" class="extra-item" value="Cheddar" data-price="500" onchange="updateModalPrice()"> Extra Cheddar (+$500)</label>
            <label><input type="checkbox" class="extra-item" value="Bacon" data-price="800" onchange="updateModalPrice()"> Bacon (+$800)</label>
            <label><input type="checkbox" class="extra-item" value="Huevo" data-price="400" onchange="updateModalPrice()"> Huevo (+$400)</label>
        </div>
    `;
    
    document.getElementById('productModal').style.display = 'flex';
    updateModalPrice();
}

function updateModalPrice() {
    let total = currentProduct.price;
    document.querySelectorAll('.extra-item:checked').forEach(ex => {
        total += parseInt(ex.dataset.price);
    });
    document.getElementById('modalCurrentPrice').innerText = `$${total.toLocaleString()}`;
}

document.getElementById('confirmAdd').onclick = () => {
    let details = [];
    let extraTotal = 0;
    
    const point = document.getElementById('cook-point')?.value;
    if(point) details.push(point);
    
    if(document.getElementById('no-cebolla').checked) details.push("Sin cebolla");
    if(document.getElementById('no-tomate').checked) details.push("Sin tomate");
    
    document.querySelectorAll('.extra-item:checked').forEach(ex => {
        details.push(ex.value);
        extraTotal += parseInt(ex.dataset.price);
    });
    
    addToCart(currentProduct.id, details.join(", ") || "Clásica", extraTotal);
    closeModal();
};

// --- GESTIÓN DE CARRITO ---
function addToCart(id, detail, extra) {
    const p = PRODUCTS.find(prod => prod.id === id);
    cart.push({
        ...p,
        cartId: Date.now(),
        finalPrice: p.price + extra,
        detail: detail
    });
    updateCartUI();
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartUI();
}

function updateCartUI() {
    localStorage.setItem('limbo_v17_cart', JSON.stringify(cart));
    document.getElementById('cartCount').innerText = cart.length;
    
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.finalPrice;
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.2rem; border-bottom:1px solid #222; padding-bottom:0.8rem">
                <div>
                    <h4 style="color:var(--primary-fire)">${item.name}</h4>
                    <small>${item.detail}</small><br>
                    <strong>$${item.finalPrice.toLocaleString()}</strong>
                </div>
                <button onclick="removeFromCart(${item.cartId})" style="background:none; border:none; color:red; cursor:pointer; font-size:1.2rem">✕</button>
            </div>
        `;
    });
    
    const shipping = deliveryMode === 'delivery' ? parseInt(document.getElementById('zoneSelect').value) : 0;
    
    document.getElementById('subtotalVal').innerText = `$${subtotal.toLocaleString()}`;
    document.getElementById('shippingVal').innerText = `$${shipping.toLocaleString()}`;
    document.getElementById('totalVal').innerText = `$${(subtotal + shipping).toLocaleString()}`;
}

// --- LOGÍSTICA ---
function setDelivery(mode) {
    deliveryMode = mode;
    document.getElementById('btnPickup').classList.toggle('active', mode === 'pickup');
    document.getElementById('btnDelivery').classList.toggle('active', mode === 'delivery');
    document.getElementById('delivery-zones').classList.toggle('hidden', mode === 'pickup');
    updateCartUI();
}

// --- WHATSAPP TICKET ---
function sendOrder() {
    if(cart.length === 0) return alert("Tu pedido está vacío");
    
    const shipping = deliveryMode === 'delivery' ? parseInt(document.getElementById('zoneSelect').value) : 0;
    const sub = cart.reduce((acc, i) => acc + i.finalPrice, 0);
    const zoneText = document.querySelector('#zoneSelect option:checked').text;
    
    let msg = `🔥 *NUEVO PEDIDO - LIMBO BURGERS v17* \n\n`;
    cart.forEach((item, idx) => {
        msg += `*${idx + 1}. ${item.name}* \n   _${item.detail}_ \n   $${item.finalPrice.toLocaleString()}\n\n`;
    });
    
    msg += `──────────────────\n`;
    msg += `🛵 *ENTREGA:* ${deliveryMode === 'pickup' ? 'Retiro en Local' : 'Envío (' + zoneText + ')'}\n`;
    msg += `💰 *TOTAL FINAL: $${(sub + shipping).toLocaleString()}*\n`;
    msg += `──────────────────\n`;
    msg += `_Mendoza, Argentina_`;
    
    window.open(`https://wa.me/5492615349682?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- UTILIDADES MODAL ---
function closeModal() { document.getElementById('productModal').style.display = 'none'; }
function closeAgeModal() { document.getElementById('ageModal').style.display = 'none'; }
function confirmAge() { 
    closeAgeModal(); 
    addToCart(currentProduct.id, "Mayor de edad (+18)", 0); 
}

// --- EVENTOS UI ---
document.getElementById('cartToggle').onclick = () => document.getElementById('cartPanel').classList.add('active');
document.getElementById('closeCart').onclick = () => document.getElementById('cartPanel').classList.remove('active');

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderMenu(btn.dataset.filter);
    };
});

// RUN
init();