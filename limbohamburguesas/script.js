/**
 * LIMBO BURGERS v16.0 - FINAL UX/SENIOR VERSION
 */

const IMGS = {
    diablo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    limbus: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
    inferno: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80",
    pollo: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=600&q=80",
    vegan: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&q=80",
    sides: "https://images.unsplash.com/photo-1573014133633-560dd432ee64?w=600&q=80",
    alcohol: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80",
    drinks: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80"
};

const PRODUCTS = [
    // --- BURGERS CARNE (6) ---
    { id: 1, name: "Diablo Burger", price: 9800, cat: "burgers", img: IMGS.diablo, type: "carne", desc: "Doble carne, jalapeños y salsa volcánica." },
    { id: 2, name: "Limbus Quad", price: 12500, cat: "burgers", img: IMGS.limbus, type: "carne", desc: "4 medallones de 120g y extra bacon." },
    { id: 3, name: "Inferno BBQ", price: 9200, cat: "burgers", img: IMGS.inferno, type: "carne", desc: "Carne premium, aros de cebolla y BBQ ahumada." },
    { id: 4, name: "Purgatorio", price: 8900, cat: "burgers", img: IMGS.diablo, type: "carne", desc: "Huevo, jamón, muzzarella y cebolla caramelizada." },
    { id: 5, name: "Cheese Explosion", price: 8500, cat: "burgers", img: IMGS.limbus, type: "carne", desc: "Bañada en fondue de queso cheddar." },
    { id: 6, name: "Classic King", price: 7800, cat: "burgers", img: IMGS.inferno, type: "carne", desc: "La tradicional: lechuga, tomate y cheddar." },
    
    // --- BURGERS POLLO (3) ---
    { id: 7, name: "Holy Chicken", price: 8200, cat: "burgers", img: IMGS.pollo, type: "pollo", desc: "Pechuga crujiente, alioli y rúcula." },
    { id: 8, name: "Crispy Angel", price: 8500, cat: "burgers", img: IMGS.pollo, type: "pollo", desc: "Doble pollo frito estilo Kansas." },
    { id: 9, name: "Lemon Poultry", price: 8100, cat: "burgers", img: IMGS.pollo, type: "pollo", desc: "Pollo grillado con crema de limón." },

    // --- VEGGIE (6) ---
    { id: 10, name: "Eden Plant", price: 8800, cat: "veggie", img: IMGS.vegan, isVegan: true, desc: "NotBurger, palta y tomate." },
    { id: 11, name: "Falafel Heaven", price: 7900, cat: "veggie", img: IMGS.vegan, isVegan: true, desc: "Falafel casero y menta." },
    { id: 12, name: "Green Soul", price: 8200, cat: "veggie", img: IMGS.vegan, isVegan: true, desc: "Espinaca, avena y parmesano." },
    { id: 13, name: "Vegan Beast", price: 9100, cat: "veggie", img: IMGS.vegan, isVegan: true, desc: "Doble NotBurger y queso almendra." },
    { id: 14, name: "Mushroom Zen", price: 8600, cat: "veggie", img: IMGS.vegan, isVegan: true, desc: "Gírgolas grilladas y brotes." },
    { id: 15, name: "Tofu Fire", price: 8300, cat: "veggie", img: IMGS.vegan, isVegan: true, desc: "Tofu marinado en sriracha." },

    // --- SIDES (8) ---
    { id: 16, name: "Papas Cheddar", price: 4500, cat: "sides", img: IMGS.sides, desc: "Papas bastón con mucho cheddar y bacon." },
    { id: 17, name: "Papas Trufadas", price: 5200, cat: "sides", img: IMGS.sides, desc: "Aceite de trufa y parmesano." },
    { id: 18, name: "Aros de Cebolla", price: 3800, cat: "sides", img: IMGS.sides, desc: "12 unidades con salsa BBQ." },
    { id: 19, name: "Nuggets x10", price: 4200, cat: "sides", img: IMGS.sides, desc: "Puro pollo con dip de mostaza." },
    { id: 20, name: "Bastones Muzza", price: 4800, cat: "sides", img: IMGS.sides, desc: "6 unidades con pomodoro." },
    { id: 21, name: "Alitas BBQ", price: 5500, cat: "sides", img: IMGS.sides, desc: "6 alitas picantes." },
    { id: 22, name: "Coleslaw", price: 2900, cat: "sides", img: IMGS.sides, isVegan: true, desc: "Ensalada de repollo y zanahoria." },
    { id: 23, name: "Papas Rústicas", price: 3500, cat: "sides", img: IMGS.sides, isVegan: true, desc: "Con piel y romero fresco." },

    // --- BEBIDAS (20) ---
    { id: 24, name: "Cerveza IPA", price: 3500, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 25, name: "Cerveza Rubia", price: 3000, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 26, name: "Fernet Branca", price: 4500, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 27, name: "Gin Tonic", price: 4800, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 28, name: "Negroni", price: 5000, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 29, name: "Malbec Copa", price: 3800, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 30, name: "Coca Cola", price: 1800, cat: "drinks", img: IMGS.drinks },
    { id: 31, name: "Coca Zero", price: 1800, cat: "drinks", img: IMGS.drinks },
    { id: 32, name: "Sprite", price: 1800, cat: "drinks", img: IMGS.drinks },
    { id: 33, name: "Fanta", price: 1800, cat: "drinks", img: IMGS.drinks },
    { id: 34, name: "Agua Mineral", price: 1500, cat: "drinks", img: IMGS.drinks },
    { id: 35, name: "Limonada", price: 2200, cat: "drinks", img: IMGS.drinks },
    { id: 36, name: "Jugo Naranja", price: 2000, cat: "drinks", img: IMGS.drinks },
    { id: 37, name: "Aquarius Pera", price: 1700, cat: "drinks", img: IMGS.drinks },
    { id: 38, name: "Soda", price: 1200, cat: "drinks", img: IMGS.drinks },
    { id: 39, name: "Licuado Frutilla", price: 2800, cat: "drinks", img: IMGS.drinks },
    { id: 40, name: "Licuado Banana", price: 2800, cat: "drinks", img: IMGS.drinks },
    { id: 41, name: "Paso de los Toros", price: 1800, cat: "drinks", img: IMGS.drinks },
    { id: 42, name: "Agua con Gas", price: 1500, cat: "drinks", img: IMGS.drinks },
    { id: 43, name: "Cerveza Honey", price: 3500, cat: "drinks", img: IMGS.alcohol, isAlcohol: true }
];

let cart = JSON.parse(localStorage.getItem('limbo_v16_cart')) || [];
let deliveryMethod = 'pickup';
let currentProduct = null;

// --- RENDERIZADO ---
function renderMenu(filter = 'all') {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="menu-item">
                ${p.isVegan ? '<div class="badge-float vegan-b">🌱</div>' : ''}
                ${p.isAlcohol ? '<div class="badge-float alcohol-b">18+</div>' : ''}
                <img src="${p.img}" class="menu-img" alt="${p.name}">
                <div class="item-info">
                    <h3>${p.name.toUpperCase()}</h3>
                    <p>${p.desc || 'Sabor irresistible.'}</p>
                    <span class="price" style="font-size:1.6rem; color:var(--primary-fire); font-weight:800;">$${p.price.toLocaleString()}</span>
                    <button class="add-btn" onclick="checkAndOpenModal(${p.id})">AGREGAR AL PECADO</button>
                </div>
            </div>`;
    });
}

// --- LOGICA MODALES ---
function checkAndOpenModal(id) {
    const p = PRODUCTS.find(prod => prod.id === id);
    if(p.isAlcohol) {
        currentProduct = p;
        document.getElementById('ageModal').style.display = 'flex';
    } else if(p.cat === 'burgers' || p.cat === 'veggie') {
        openCustomModal(p);
    } else {
        addToCart(p.id, "Clásico", 0);
    }
}

document.getElementById('ageConfirmBtn').onclick = () => {
    document.getElementById('ageModal').style.display = 'none';
    addToCart(currentProduct.id, "Venta +18", 0);
};

function closeAgeModal() { document.getElementById('ageModal').style.display = 'none'; alert("No puedes comprar alcohol si eres menor."); }

function openCustomModal(p) {
    currentProduct = p;
    const body = document.getElementById('modalBody');
    body.innerHTML = `<h2>${p.name}</h2>`;

    if(p.type === 'carne') {
        body.innerHTML += `
            <div class="custom-opt">
                <label>PUNTO:</label>
                <select id="puntoCarne" onchange="updateModalPrice()">
                    <option value="Jugosa">Jugosa</option>
                    <option value="A punto">A punto</option>
                    <option value="Cocida">Cocida</option>
                </select>
            </div>`;
    }

    body.innerHTML += `
        <div class="custom-opt">
            <label><input type="checkbox" id="no_cebolla"> <span>Sin Cebolla</span></label>
            <label><input type="checkbox" id="no_tomate"> <span>Sin Tomate</span></label>
        </div>
        <div class="custom-opt">
            <p style="margin-bottom:10px; font-weight:800;">EXTRAS:</p>
            <label><input type="checkbox" class="extra-item" value="Extra Cheddar" data-p="500" onchange="updateModalPrice()"> <span>Extra Cheddar (+$500)</span></label>
            <label><input type="checkbox" class="extra-item" value="Bacon" data-p="800" onchange="updateModalPrice()"> <span>Bacon (+$800)</span></label>
            <label><input type="checkbox" class="extra-item" value="Huevo" data-p="400" onchange="updateModalPrice()"> <span>Huevo (+$400)</span></label>
        </div>`;
    
    document.getElementById('productModal').style.display = 'flex';
    updateModalPrice();
}

function updateModalPrice() {
    let total = currentProduct.price;
    document.querySelectorAll('.extra-item:checked').forEach(ex => total += parseInt(ex.dataset.p));
    document.getElementById('modalCurrentPrice').innerText = `$${total.toLocaleString()}`;
}

document.getElementById('confirmAdd').onclick = () => {
    let extras = [];
    let extraTotal = 0;
    const punto = document.getElementById('puntoCarne')?.value;
    if(punto) extras.push(punto);
    if(document.getElementById('no_cebolla').checked) extras.push("Sin cebolla");
    if(document.getElementById('no_tomate').checked) extras.push("Sin tomate");
    
    document.querySelectorAll('.extra-item:checked').forEach(ex => {
        extras.push(ex.value);
        extraTotal += parseInt(ex.dataset.p);
    });

    addToCart(currentProduct.id, extras.join(", ") || "Tradicional", extraTotal);
    closeModal();
};

function closeModal() { document.getElementById('productModal').style.display = 'none'; }

// --- CARRITO ---
function addToCart(id, detail, extra) {
    const p = PRODUCTS.find(prod => prod.id === id);
    cart.push({ ...p, cartId: Date.now(), finalPrice: p.price + extra, details: detail });
    updateUI();
}

function setDeliveryMethod(m) {
    deliveryMethod = m;
    document.getElementById('btnPickup').classList.toggle('active', m === 'pickup');
    document.getElementById('btnDelivery').classList.toggle('active', m === 'delivery');
    document.getElementById('zoneContainer').classList.toggle('hidden', m === 'pickup');
    updateUI();
}

function updateUI() {
    localStorage.setItem('limbo_v16_cart', JSON.stringify(cart));
    document.getElementById('cartCount').innerText = cart.length;
    
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.finalPrice;
        container.innerHTML += `
            <div style="padding:15px 0; border-bottom:1px solid #333;">
                <div style="display:flex; justify-content:space-between; font-weight:800;">
                    <span>${item.name}</span>
                    <span>$${item.finalPrice.toLocaleString()}</span>
                </div>
                <small style="color:var(--text-gray)">${item.details}</small>
                <button onclick="removeFromCart(${item.cartId})" style="background:none; border:none; color:red; cursor:pointer; display:block; margin-top:5px;">Eliminar</button>
            </div>`;
    });

    const shipping = deliveryMethod === 'delivery' ? parseInt(document.getElementById('deliveryZone').value) : 0;
    document.getElementById('subtotalVal').innerText = `$${subtotal.toLocaleString()}`;
    document.getElementById('shippingVal').innerText = `$${shipping.toLocaleString()}`;
    document.getElementById('totalVal').innerText = `$${(subtotal + shipping).toLocaleString()}`;
}

function removeFromCart(id) { cart = cart.filter(i => i.cartId !== id); updateUI(); }

// --- TICKET WHATSAPP ---
function sendWhatsAppOrder() {
    if(cart.length === 0) return alert("Carrito vacío");
    const ship = deliveryMethod === 'delivery' ? parseInt(document.getElementById('deliveryZone').value) : 0;
    const sub = cart.reduce((a, b) => a + b.finalPrice, 0);
    const zone = document.querySelector('#deliveryZone option:checked').text;

    let msg = `🔥 *ORDEN LIMBO v16* \n\n`;
    cart.forEach(i => msg += `• *${i.name}*\n  _${i.details}_ \n  $${i.finalPrice.toLocaleString()}\n\n`);
    msg += `──────────────────\n`;
    msg += `📍 *ENTREGA:* ${deliveryMethod === 'pickup' ? 'Retiro en Local' : 'Envío ('+zone+')'}\n`;
    msg += `💰 *SUBTOTAL:* $${sub.toLocaleString()}\n`;
    msg += `🛵 *ENVÍO:* $${ship.toLocaleString()}\n`;
    msg += `🚀 *TOTAL FINAL: $${(sub + ship).toLocaleString()}*\n\n`;
    msg += `_Enviado desde Mendoza, Argentina_`;

    window.open(`https://wa.me/5492615349682?text=${encodeURIComponent(msg)}`, '_blank');
}

// EVENTS
document.getElementById('cartToggle').onclick = () => document.getElementById('cartPanel').classList.add('active');
document.getElementById('closeCart').onclick = () => document.getElementById('cartPanel').classList.remove('active');
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderMenu(btn.dataset.filter);
    };
});

window.onload = () => { renderMenu(); updateUI(); };