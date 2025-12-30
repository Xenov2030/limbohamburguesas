/**
 * LIMBO BURGERS v19.0 GOLD - FINAL ENGINE
 * Desarrollado por Nicolas Aguirres
 */

// --- CONFIGURACIÓN DE RUTAS E IMÁGENES ---
const IMGS = {
    carne: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    pollo: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=600&q=80",
    veggie: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&q=80",
    sides: "recursos visuales/image.png", // RUTA LOCAL OBLIGATORIA PARA SIDES
    alcohol: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80",
    soft: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80"
};

const PRODUCTS = [
    // --- BURGERS CARNE (6) ---
    { id: 1, name: "Diablo Burger", price: 9800, cat: "burgers", type: "beef", img: IMGS.carne, desc: "Doble carne, cheddar, jalapeños y salsa volcánica." },
    { id: 2, name: "Limbus Quad", price: 12500, cat: "burgers", type: "beef", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80", desc: "4 medallones, bacon crocante y extra cheddar fundido." },
    { id: 3, name: "Inferno BBQ", price: 9200, cat: "burgers", type: "beef", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80", desc: "Carne premium, aros de cebolla y BBQ ahumada." },
    { id: 4, name: "Purgatorio", price: 8900, cat: "burgers", type: "beef", img: IMGS.carne, desc: "Huevo frito, jamón, muzzarella y cebolla caramelizada." },
    { id: 5, name: "Cheese Explosion", price: 8500, cat: "burgers", type: "beef", img: IMGS.carne, desc: "Bañada íntegramente en fondue de queso cheddar." },
    { id: 6, name: "Classic King", price: 7800, cat: "burgers", type: "beef", img: IMGS.carne, desc: "Lechuga, tomate, cheddar y nuestra mayo secreta." },

    // --- BURGERS POLLO (3) ---
    { id: 7, name: "Holy Chicken", price: 8200, cat: "burgers", type: "chicken", img: IMGS.pollo, desc: "Pechuga crispy, alioli de lima y rúcula fresca." },
    { id: 8, name: "Crispy Angel", price: 8500, cat: "burgers", type: "chicken", img: IMGS.pollo, desc: "Doble pollo frito estilo Kansas y pepinillos." },
    { id: 9, name: "Lemon Poultry", price: 8100, cat: "burgers", type: "chicken", img: IMGS.pollo, desc: "Pollo grillado con hierbas y crema de limón." },

    // --- VEGGIE / VEGAN (6) ---
    { id: 10, name: "Eden Plant", price: 8800, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "NotBurger, palta, tomate y cebolla morada." },
    { id: 11, name: "Falafel Heaven", price: 7900, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "Falafel casero, yogur vegano y menta fresca." },
    { id: 12, name: "Green Soul", price: 8200, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "Espinaca, avena y parmesano vegano." },
    { id: 13, name: "Vegan Beast", price: 9100, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "Doble NotBurger y queso de almendras." },
    { id: 14, name: "Mushroom Zen", price: 8600, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "Gírgolas grilladas y hummus de remolacha." },
    { id: 15, name: "Tofu Fire", price: 8300, cat: "veggie", isVegan: true, img: IMGS.veggie, desc: "Tofu marinado en sriracha y sésamo negro." },

    // --- SIDES (8) - IMAGEN LOCAL recursos visuales/image.png ---
    { id: 16, name: "Papas Cheddar", price: 4500, cat: "sides", img: IMGS.sides, desc: "Papas bastón con cheddar y bacon." },
    { id: 17, name: "Papas Trufadas", price: 5200, cat: "sides", img: IMGS.sides, desc: "Aceite de trufa y parmesano." },
    { id: 18, name: "Aros de Cebolla", price: 3800, cat: "sides", img: IMGS.sides, desc: "12 aros crujientes con salsa BBQ." },
    { id: 19, name: "Nuggets Pollo", price: 4200, cat: "sides", img: IMGS.sides, desc: "10 unidades con dip de mostaza dulce." },
    { id: 20, name: "Bastones Muzza", price: 4800, cat: "sides", img: IMGS.sides, desc: "6 unidades con pomodoro." },
    { id: 21, name: "Alitas BBQ", price: 5500, cat: "sides", img: IMGS.sides, desc: "6 alitas picantes estilo Buffalo." },
    { id: 22, name: "Coleslaw", price: 2900, cat: "sides", isVegan: true, img: IMGS.sides, desc: "Ensalada de repollo y zanahoria." },
    { id: 23, name: "Papas Rústicas", price: 3500, cat: "sides", isVegan: true, img: IMGS.sides, desc: "Con piel y romero fresco." },

    // --- BEBIDAS (20) ---
    { id: 24, name: "Cerveza IPA", price: 3500, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 25, name: "Cerveza Rubia", price: 3000, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 26, name: "Fernet Branca", price: 4500, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 27, name: "Gin Tonic", price: 4800, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 28, name: "Negroni", price: 5000, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 29, name: "Copa Malbec", price: 3800, cat: "drinks", isAlcohol: true, img: IMGS.alcohol },
    { id: 30, name: "Coca Cola 500ml", price: 1800, cat: "drinks", img: IMGS.soft },
    { id: 31, name: "Coca Zero 500ml", price: 1800, cat: "drinks", img: IMGS.soft },
    { id: 32, name: "Sprite 500ml", price: 1800, cat: "drinks", img: IMGS.soft },
    { id: 33, name: "Fanta 500ml", price: 1800, cat: "drinks", img: IMGS.soft },
    { id: 34, name: "Agua Mineral", price: 1500, cat: "drinks", img: IMGS.soft },
    { id: 35, name: "Limonada", price: 2200, cat: "drinks", img: IMGS.soft },
    { id: 36, name: "Jugo Naranja", price: 2000, cat: "drinks", img: IMGS.soft },
    { id: 37, name: "Aquarius Pera", price: 1700, cat: "drinks", img: IMGS.soft },
    { id: 38, name: "Aquarius Manzana", price: 1700, cat: "drinks", img: IMGS.soft },
    { id: 39, name: "Licuado Banana", price: 2800, cat: "drinks", img: IMGS.soft },
    { id: 40, name: "Licuado Frutilla", price: 2800, cat: "drinks", img: IMGS.soft },
    { id: 41, name: "Paso de los Toros", price: 1800, cat: "drinks", img: IMGS.soft },
    { id: 42, name: "Agua con Gas", price: 1500, cat: "drinks", img: IMGS.soft },
    { id: 43, name: "Soda Sifón", price: 1200, cat: "drinks", img: IMGS.soft }
];

let cart = JSON.parse(localStorage.getItem('limbo_cart_gold')) || [];
let deliveryMode = 'pickup';
let currentItem = null;

// --- LÓGICA DE NEGOCIO ---
function updateBusinessStatus() {
    const hour = new Date().getHours();
    const led = document.getElementById('led-indicator');
    const text = document.getElementById('status-text');
    const isOpen = hour >= 12 && hour < 23;
    
    if(isOpen) {
        led.className = 'led on';
        text.innerText = 'PARRILLA ENCENDIDA';
        text.style.color = '#25D366';
    } else {
        led.className = 'led off';
        text.innerText = 'CERRADO (Abre 12hs)';
        text.style.color = '#FF4500';
    }
}

function renderProducts(filter = 'all') {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="menu-item">
                ${p.isVegan ? '<div class="badge-float v-badge">🌱</div>' : ''}
                ${p.isAlcohol ? '<div class="badge-float a-badge">🔞</div>' : ''}
                <img src="${p.img}" class="menu-img" alt="${p.name}">
                <div class="item-info">
                    <h3>${p.name.toUpperCase()}</h3>
                    <p>${p.desc || 'Sabor artesanal premium.'}</p>
                    <span class="price">$${p.price.toLocaleString()}</span>
                    <button class="add-btn" onclick="handleAction(${p.id})">AGREGAR AL PEDIDO</button>
                </div>
            </div>`;
    });
}

function handleAction(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if(p.isAlcohol) {
        if(!confirm("🔞 Debes ser mayor de 18 años para comprar alcohol. ¿Confirmas tu edad?")) return;
    }
    
    if(p.cat === 'burgers' || p.cat === 'veggie') {
        openModal(p);
    } else {
        addToCart(p.id, "Tradicional", 0);
    }
}

// --- MODAL PERSONALIZACIÓN ---
function openModal(p) {
    currentItem = p;
    const body = document.getElementById('modalBody');
    body.innerHTML = `<h2>${p.name}</h2>`;

    if(p.type === 'beef') {
        body.innerHTML += `
            <div class="opt-group">
                <label>PUNTO DE CARNE:</label>
                <select id="punto" onchange="calcModalPrice()">
                    <option value="A punto">A punto</option>
                    <option value="Cocida">Bien cocida</option>
                    <option value="Jugosa">Jugosa</option>
                </select>
            </div>`;
    }

    body.innerHTML += `
        <div class="opt-group">
            <label><input type="checkbox" id="noTomate"> Sin Tomate</label>
            <label><input type="checkbox" id="noCebolla"> Sin Cebolla</label>
        </div>
        <div class="opt-group">
            <p style="margin-bottom:8px; font-weight:700;">AÑADIR EXTRAS:</p>
            <label><input type="checkbox" class="extra" data-p="500" value="Cheddar" onchange="calcModalPrice()"> Cheddar (+$500)</label>
            <label><input type="checkbox" class="extra" data-p="800" value="Bacon" onchange="calcModalPrice()"> Bacon (+$800)</label>
            <label><input type="checkbox" class="extra" data-p="400" value="Huevo" onchange="calcModalPrice()"> Huevo (+$400)</label>
        </div>`;
    
    document.getElementById('productModal').style.display = 'flex';
    calcModalPrice();
}

function calcModalPrice() {
    let total = currentItem.price;
    document.querySelectorAll('.extra:checked').forEach(ex => total += parseInt(ex.dataset.p));
    document.getElementById('modalCurrentPrice').innerText = `$${total.toLocaleString()}`;
}

document.getElementById('confirmAdd').onclick = () => {
    let extras = [];
    let extraPrice = 0;
    const punto = document.getElementById('punto')?.value;
    if(punto) extras.push(punto);
    
    if(document.getElementById('noTomate').checked) extras.push("Sin Tomate");
    if(document.getElementById('noCebolla').checked) extras.push("Sin Cebolla");
    
    document.querySelectorAll('.extra:checked').forEach(ex => {
        extras.push(ex.value);
        extraPrice += parseInt(ex.dataset.p);
    });

    addToCart(currentItem.id, extras.join(", ") || "Tradicional", extraPrice);
    closeModal();
};

function closeModal() { document.getElementById('productModal').style.display = 'none'; }

// --- LOGÍSTICA CARRITO ---
function setDeliveryMethod(method) {
    deliveryMode = method;
    document.getElementById('btnPickup').classList.toggle('active', method === 'pickup');
    document.getElementById('btnDelivery').classList.toggle('active', method === 'delivery');
    document.getElementById('zoneContainer').classList.toggle('hidden', method === 'pickup');
    calculateTotals();
}

function addToCart(id, detail, extra) {
    const p = PRODUCTS.find(x => x.id === id);
    cart.push({ ...p, cartId: Date.now(), finalPrice: p.price + extra, detail });
    calculateTotals();
    // Feedback visual: abrir el carrito al agregar
    document.getElementById('cartPanel').classList.add('active');
}

function removeFromCart(cartId) {
    cart = cart.filter(x => x.cartId !== cartId);
    calculateTotals();
}

function calculateTotals() {
    localStorage.setItem('limbo_cart_gold', JSON.stringify(cart));
    document.getElementById('cartCount').innerText = cart.length;
    
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.finalPrice;
        container.innerHTML += `
            <div style="padding:12px 0; border-bottom:1px solid #333; margin-bottom:5px;">
                <div style="display:flex; justify-content:space-between; font-weight:700;">
                    <span>${item.name}</span>
                    <span>$${item.finalPrice.toLocaleString()}</span>
                </div>
                <small style="color:var(--text-gray)">${item.detail}</small>
                <button onclick="removeFromCart(${item.cartId})" style="color:red; background:none; border:none; cursor:pointer; display:block; margin-top:5px; font-size:0.8rem;">Eliminar</button>
            </div>`;
    });

    const shipping = deliveryMode === 'delivery' ? parseInt(document.getElementById('deliveryZone').value) : 0;
    document.getElementById('subtotalVal').innerText = `$${subtotal.toLocaleString()}`;
    document.getElementById('shippingVal').innerText = `$${shipping.toLocaleString()}`;
    document.getElementById('totalVal').innerText = `$${(subtotal + shipping).toLocaleString()}`;
}

// --- CHECKOUT & LIMPIEZA POST-COMPRA ---
function checkout() {
    if(cart.length === 0) return alert("El carrito está vacío.");
    
    const ship = deliveryMode === 'delivery' ? parseInt(document.getElementById('deliveryZone').value) : 0;
    const zoneName = document.querySelector('#deliveryZone option:checked').text;
    const sub = cart.reduce((a, b) => a + b.finalPrice, 0);

    let msg = "🔥 *NUEVO PEDIDO - LIMBO BURGERS v19.0 GOLD* \n\n";
    cart.forEach((i, idx) => {
        msg += `*${idx+1}. ${i.name}* \n   _${i.detail}_ \n   $${i.finalPrice.toLocaleString()}\n\n`;
    });

    msg += `──────────────────\n`;
    msg += `🛵 *ENTREGA:* ${deliveryMode === 'pickup' ? 'Retiro en Local' : 'Envío ('+zoneName+')'}\n`;
    msg += `💰 *TOTAL FINAL: $${(sub + ship).toLocaleString()}*\n\n`;
    msg += `_Mendoza, Argentina_`;

    window.open(`https://wa.me/5492615349682?text=${encodeURIComponent(msg)}`, '_blank');

    // Tarea específica solicitada: Vaciar carrito tras el pedido
    clearCartState();
}

function clearCartState() {
    cart = [];
    localStorage.removeItem('limbo_cart_gold');
    calculateTotals();
    document.getElementById('cartPanel').classList.remove('active');
}

// --- EVENTOS UI ---
document.getElementById('cartToggle').onclick = () => document.getElementById('cartPanel').classList.add('active');
document.getElementById('closeCart').onclick = () => document.getElementById('cartPanel').classList.remove('active');

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    };
});

window.onload = () => {
    updateBusinessStatus();
    renderProducts();
    calculateTotals();
};