/**
 * LIMBO BURGERS v14.0 - SENIOR ARCHITECTURE
 */

const IMGS = {
    carne: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    pollo: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=600&q=80",
    veggie: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&q=80",
    sides: "https://images.unsplash.com/photo-1573014133633-560dd432ee64?w=600&q=80",
    alcohol: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80",
    soft: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80"
};

const PRODUCTS = [
    // BURGERS CARNE (6)
    { id: 1, name: "Diablo Burger", price: 9800, cat: "burgers", img: IMGS.carne, desc: "Doble carne, cheddar, jalapeños y salsa volcánica." },
    { id: 2, name: "Limbus Quad", price: 12500, cat: "burgers", img: IMGS.carne, desc: "Cuatro medallones de 120g y extra bacon." },
    { id: 3, name: "Inferno BBQ", price: 9200, cat: "burgers", img: IMGS.carne, desc: "Carne premium, aros de cebolla y BBQ secreta." },
    { id: 4, name: "Purgatorio", price: 8900, cat: "burgers", img: IMGS.carne, desc: "Huevo frito, jamón, muzzarella y cebolla caramelizada." },
    { id: 5, name: "Cheese Explosion", price: 8500, cat: "burgers", img: IMGS.carne, desc: "Bañada en fondue de cheddar ahumado." },
    { id: 6, name: "Classic King", price: 7800, cat: "burgers", img: IMGS.carne, desc: "Lechuga, tomate, cheddar y nuestra mayo." },
    
    // BURGERS POLLO (3)
    { id: 7, name: "Holy Chicken", price: 8200, cat: "burgers", img: IMGS.pollo, desc: "Pechuga crispy, alioli de lima y rúcula." },
    { id: 8, name: "Crispy Angel", price: 8500, cat: "burgers", img: IMGS.pollo, desc: "Doble pollo frito estilo Kentucky y pepinillos." },
    { id: 9, name: "Lemon Poultry", price: 8100, cat: "burgers", img: IMGS.pollo, desc: "Pollo grillado con hierbas y crema de limón." },
    
    // VEGGIE / VEGAN (6)
    { id: 10, name: "Eden Plant", price: 8800, cat: "veggie", img: IMGS.veggie, desc: "NotBurger, palta, tomate y cebolla morada." },
    { id: 11, name: "Falafel Heaven", price: 7900, cat: "veggie", img: IMGS.veggie, desc: "Falafel casero, yogur vegano y menta." },
    { id: 12, name: "Green Soul", price: 8200, cat: "veggie", img: IMGS.veggie, desc: "Medallón de espinaca y avena con parmesano." },
    { id: 13, name: "Vegan Beast", price: 9100, cat: "veggie", img: IMGS.veggie, desc: "Doble NotBurger con queso de almendras." },
    { id: 14, name: "Mushroom Zen", price: 8600, cat: "veggie", img: IMGS.veggie, desc: "Gírgolas grilladas, hummus y brotes." },
    { id: 15, name: "Tofu Fire", price: 8300, cat: "veggie", img: IMGS.veggie, desc: "Tofu marinado en sriracha y sésamo." },

    // SIDES (8)
    { id: 16, name: "Papas Cheddar", price: 4500, cat: "sides", img: IMGS.sides, desc: "Corte bastón con cheddar y bacon." },
    { id: 17, name: "Papas Trufadas", price: 5200, cat: "sides", img: IMGS.sides, desc: "Aceite de trufa y queso parmesano." },
    { id: 18, name: "Aros de Cebolla", price: 3800, cat: "sides", img: IMGS.sides, desc: "Extra crujientes con salsa BBQ." },
    { id: 19, name: "Nuggets x10", price: 4200, cat: "sides", img: IMGS.sides, desc: "Puro pollo con dip de mostaza dulce." },
    { id: 20, name: "Bastones Mozzarella", price: 4800, cat: "sides", img: IMGS.sides, desc: "6 unidades con pomodoro." },
    { id: 21, name: "Alitas BBQ", price: 5500, cat: "sides", img: IMGS.sides, desc: "6 alitas picantes estilo Buffalo." },
    { id: 22, name: "Coleslaw", price: 2900, cat: "sides", img: IMGS.sides, desc: "Repollo, zanahoria y aderezo Limbo." },
    { id: 23, name: "Papas Rústicas", price: 3500, cat: "sides", img: IMGS.sides, desc: "Con piel, romero y ajos asados." },

    // BEBIDAS ALCOHOL (6)
    { id: 24, name: "Cerveza IPA", price: 3500, cat: "drinks", img: IMGS.alcohol, desc: "Pinta artesanal mendocina." },
    { id: 25, name: "Cerveza Rubia", price: 3000, cat: "drinks", img: IMGS.alcohol, desc: "Lager premium bien fría." },
    { id: 26, name: "Fernet Branca", price: 4500, cat: "drinks", img: IMGS.alcohol, desc: "El clásico con Coca Cola." },
    { id: 27, name: "Gin Tonic", price: 4800, cat: "drinks", img: IMGS.alcohol, desc: "Gin artesanal y pepino." },
    { id: 28, name: "Negroni", price: 5000, cat: "drinks", img: IMGS.alcohol, desc: "Gin, Rosso y Campari." },
    { id: 29, name: "Copa Malbec", price: 3800, cat: "drinks", img: IMGS.alcohol, desc: "Selección del Valle de Uco." },

    // BEBIDAS SIN ALCOHOL (14)
    { id: 30, name: "Coca Cola 500", price: 1800, cat: "drinks", img: IMGS.soft, desc: "Sabor original." },
    { id: 31, name: "Coca Zero 500", price: 1800, cat: "drinks", img: IMGS.soft, desc: "Sin azúcar." },
    { id: 32, name: "Sprite 500", price: 1800, cat: "drinks", img: IMGS.soft, desc: "Lima limón." },
    { id: 33, name: "Fanta 500", price: 1800, cat: "drinks", img: IMGS.soft, desc: "Naranja." },
    { id: 34, name: "Agua Mineral", price: 1500, cat: "drinks", img: IMGS.soft, desc: "Villavicencio 500ml." },
    { id: 35, name: "Limonada Real", price: 2200, cat: "drinks", img: IMGS.soft, desc: "Menta y jengibre fresco." },
    { id: 36, name: "Jugo de Naranja", price: 2000, cat: "drinks", img: IMGS.soft, desc: "Exprimido natural." },
    { id: 37, name: "Pomelada", price: 2200, cat: "drinks", img: IMGS.soft, desc: "Pomelo rosado y romero." },
    { id: 38, name: "Aquarius Pera", price: 1700, cat: "drinks", img: IMGS.soft, desc: "500ml." },
    { id: 39, name: "Aquarius Manzana", price: 1700, cat: "drinks", img: IMGS.soft, desc: "500ml." },
    { id: 40, name: "Paso de los Toros", price: 1800, cat: "drinks", img: IMGS.soft, desc: "Tónica o Pomelo." },
    { id: 41, name: "Licuado Frutilla", price: 2800, cat: "drinks", img: IMGS.soft, desc: "Con agua o leche." },
    { id: 42, name: "Licuado Banana", price: 2800, cat: "drinks", img: IMGS.soft, desc: "Con leche." },
    { id: 43, name: "Soda Sifón", price: 1200, cat: "drinks", img: IMGS.soft, desc: "Tradicional 500ml." }
];

let cart = JSON.parse(localStorage.getItem('limbo_cart_v14')) || [];
let currentProduct = null;

// --- LÓGICA DE HORARIOS ---
function checkHours() {
    const hour = new Date().getHours();
    const statusEl = document.getElementById('status-business');
    const btnOrder = document.getElementById('btn-order');
    const isOpen = hour >= 12 && hour < 23;

    if(isOpen) {
        statusEl.innerHTML = "🔥 PARRILLA ENCENDIDA";
        statusEl.style.color = "#25D366";
        if(btnOrder) btnOrder.disabled = false;
    } else {
        statusEl.innerHTML = "💤 VOLVEMOS A LAS 12:00";
        statusEl.style.color = "#FF4500";
        if(btnOrder) {
            btnOrder.disabled = true;
            btnOrder.innerText = "LOCAL CERRADO";
            btnOrder.style.background = "#444";
        }
    }
}

// --- RENDER ---
function renderMenu(filter = 'all') {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
    
    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="menu-item">
                <img src="${p.img}" alt="${p.name}" class="menu-img" loading="lazy">
                <div class="item-info">
                    <h3>${p.name.toUpperCase()}</h3>
                    <p>${p.desc}</p>
                    <span class="price">$${p.price.toLocaleString()}</span>
                    <button class="add-btn" onclick="handleProductAction(${p.id})">AGREGAR AL PEDIDO</button>
                </div>
            </div>
        `;
    });
}

// --- ACCIÓN PRODUCTO (MODAL O DIRECTO) ---
function handleProductAction(id) {
    const p = PRODUCTS.find(prod => prod.id === id);
    if(p.cat === 'burgers' || p.cat === 'veggie') {
        openModal(p);
    } else {
        addToCart(p.id, "Tradicional");
    }
}

// --- MODAL ---
function openModal(p) {
    currentProduct = p;
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modalBody');
    
    body.innerHTML = `
        <h2>${p.name}</h2>
        <div class="opt-group">
            <label>PUNTO DE COCCIÓN / PREPARACIÓN</label>
            <select id="prod-detail">
                <option value="A punto">A punto (Jugosa)</option>
                <option value="Cocida">Bien cocida</option>
                <option value="Sin cebolla">Sin cebolla</option>
                <option value="Sin tomate">Sin tomate</option>
            </select>
        </div>
    `;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

document.getElementById('confirmAdd').onclick = () => {
    const detail = document.getElementById('prod-detail').value;
    addToCart(currentProduct.id, detail);
    closeModal();
};

// --- CARRITO ---
function addToCart(id, detail) {
    const p = PRODUCTS.find(prod => prod.id === id);
    cart.push({ ...p, cartId: Date.now(), detail });
    updateUI();
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateUI();
}

function updateUI() {
    localStorage.setItem('limbo_cart_v14', JSON.stringify(cart));
    document.getElementById('cartCount').innerText = cart.length;
    
    const container = document.getElementById('cartItems');
    let total = 0;
    container.innerHTML = '';
    
    cart.forEach(item => {
        total += item.price;
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid #333; padding-bottom:0.5rem">
                <div>
                    <h4 style="color:var(--primary-fire)">${item.name}</h4>
                    <small>${item.detail}</small><br>
                    <strong>$${item.price.toLocaleString()}</strong>
                </div>
                <button onclick="removeFromCart(${item.cartId})" style="background:none; border:none; color:#ff4444; font-size:1.2rem; cursor:pointer">✕</button>
            </div>
        `;
    });
    
    document.getElementById('cartTotal').innerText = `$${total.toLocaleString()}`;
}

// --- WHATSAPP ---
function sendWhatsAppOrder() {
    if(cart.length === 0) return alert("Tu carrito está vacío");
    
    let msg = "🔥 *NUEVO PEDIDO - LIMBO BURGERS* \n\n";
    cart.forEach((item, index) => {
        msg += `*${index+1}. ${item.name}* (${item.detail}) - $${item.price.toLocaleString()}\n`;
    });
    
    const total = cart.reduce((acc, i) => acc + i.price, 0);
    msg += `\n*TOTAL A PAGAR: $${total.toLocaleString()}*\n`;
    msg += "\n_Mendoza, Argentina_";
    
    window.open(`https://wa.me/5492615349682?text=${encodeURIComponent(msg)}`, '_blank');
}

// --- EVENTS ---
document.getElementById('cartToggle').onclick = () => document.getElementById('cartPanel').classList.add('active');
document.getElementById('closeCart').onclick = () => document.getElementById('cartPanel').classList.remove('active');

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderMenu(btn.dataset.filter);
    };
});

// INIT
window.onload = () => {
    checkHours();
    renderMenu();
    updateUI();
};