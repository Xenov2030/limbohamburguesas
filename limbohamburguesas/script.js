const PRODUCTS = [
    // --- BURGERS CARNE (6) ---
    { id: 1, name: "Diablo Burger", price: 9800, cat: "burgers", desc: "Doble carne, cheddar, jalapeños y salsa volcánica.", img: "https://source.unsplash.com/600x400/?burger,beef" },
    { id: 2, name: "Limbus Quad", price: 12500, cat: "burgers", desc: "Cuatro medallones de 120g y extra bacon.", img: "https://source.unsplash.com/600x400/?burger,beef" },
    { id: 3, name: "Inferno BBQ", price: 9200, cat: "burgers", desc: "Carne premium, aros de cebolla y BBQ secreta.", img: "https://source.unsplash.com/600x400/?burger,beef" },
    { id: 4, name: "Purgatorio", price: 8900, cat: "burgers", desc: "Huevo, jamón, muzzarella y cebolla caramelizada.", img: "https://source.unsplash.com/600x400/?burger,beef" },
    { id: 5, name: "Cheese Explosion", price: 8500, cat: "burgers", desc: "Bañada en fondue de queso cheddar.", img: "https://source.unsplash.com/600x400/?burger,beef" },
    { id: 6, name: "Classic King", price: 7800, cat: "burgers", desc: "La tradicional: lechuga, tomate y cheddar.", img: "https://source.unsplash.com/600x400/?burger,beef" },

    // --- CHICKEN (3) ---
    { id: 7, name: "Holy Chicken", price: 8200, cat: "burgers", desc: "Pechuga crujiente, alioli y rúcula.", img: "https://source.unsplash.com/600x400/?chicken-sandwich" },
    { id: 8, name: "Crispy Angel", price: 8500, cat: "burgers", desc: "Doble pollo frito estilo Kansas.", img: "https://source.unsplash.com/600x400/?chicken-sandwich" },
    { id: 9, name: "Lemon Poultry", price: 8100, cat: "burgers", desc: "Pollo grillado con crema de limón y hierbas.", img: "https://source.unsplash.com/600x400/?chicken-sandwich" },

    // --- VEGGIE/VEGAN (6) ---
    { id: 10, name: "Eden Plant", price: 8800, cat: "veggie", desc: "Medallón NotBurger, palta y tomate.", img: "https://source.unsplash.com/600x400/?veggie-burger" },
    { id: 11, name: "Falafel Heaven", price: 7900, cat: "veggie", desc: "Falafel casero, yogur vegano y menta.", img: "https://source.unsplash.com/600x400/?veggie-burger" },
    { id: 12, name: "Green Soul", price: 8200, cat: "veggie", desc: "Espinaca, avena y parmesano.", img: "https://source.unsplash.com/600x400/?veggie-burger" },
    { id: 13, name: "Vegan Beast", price: 9100, cat: "veggie", desc: "Doble NotBurger con queso de almendras.", img: "https://source.unsplash.com/600x400/?veggie-burger" },
    { id: 14, name: "Mushroom Zen", price: 8600, cat: "veggie", desc: "Gírgolas grilladas y cebolla morada.", img: "https://source.unsplash.com/600x400/?veggie-burger" },
    { id: 15, name: "Tofu Fire", price: 8300, cat: "veggie", desc: "Tofu marinado en sriracha y sésamo.", img: "https://source.unsplash.com/600x400/?veggie-burger" },

    // --- SIDES (8) ---
    { id: 16, name: "Papas Cheddar", price: 4500, cat: "sides", desc: "Grandes, con mucho cheddar y bacon.", img: "https://source.unsplash.com/600x400/?fries" },
    { id: 17, name: "Papas Trufadas", price: 5200, cat: "sides", desc: "Aceite de trufa y parmesano rallado.", img: "https://source.unsplash.com/600x400/?fries" },
    { id: 18, name: "Aros de Cebolla", price: 3800, cat: "sides", desc: "Extra crujientes con salsa BBQ.", img: "https://source.unsplash.com/600x400/?fries" },
    { id: 19, name: "Nuggets", price: 4200, cat: "sides", desc: "10 unidades de puro pollo.", img: "https://source.unsplash.com/600x400/?nuggets" },
    { id: 20, name: "Bastones Mozzarella", price: 4800, cat: "sides", desc: "6 unidades con salsa pomodoro.", img: "https://source.unsplash.com/600x400/?nuggets" },
    { id: 21, name: "Alitas BBQ", price: 5500, cat: "sides", desc: "6 alitas picantes y melosas.", img: "https://source.unsplash.com/600x400/?nuggets" },
    { id: 22, name: "Coleslaw", price: 2900, cat: "sides", desc: "Ensalada clásica de repollo y zanahoria.", img: "https://source.unsplash.com/600x400/?fries" },
    { id: 23, name: "Papas Rústicas", price: 3500, cat: "sides", desc: "Con piel y romero fresco.", img: "https://source.unsplash.com/600x400/?fries" },

    // --- ALCOHOL (6) ---
    { id: 24, name: "Cerveza IPA", price: 3500, cat: "drinks", desc: "Pinta de artesanal mendocina.", img: "https://source.unsplash.com/600x400/?beer" },
    { id: 25, name: "Cerveza Rubia", price: 3000, cat: "drinks", desc: "Lager premium bien fría.", img: "https://source.unsplash.com/600x400/?beer" },
    { id: 26, name: "Fernet Branca", price: 4500, cat: "drinks", desc: "Con Coca-Cola y mucho hielo.", img: "https://source.unsplash.com/600x400/?cocktail" },
    { id: 27, name: "Gin Tonic", price: 4800, cat: "drinks", desc: "Gin artesanal y pepino.", img: "https://source.unsplash.com/600x400/?cocktail" },
    { id: 28, name: "Negroni", price: 5000, cat: "drinks", desc: "Gin, Rosso y Campari.", img: "https://source.unsplash.com/600x400/?cocktail" },
    { id: 29, name: "Copa Malbec", price: 3800, cat: "drinks", desc: "El orgullo de Mendoza.", img: "https://source.unsplash.com/600x400/?cocktail" },

    // --- SIN ALCOHOL (14) ---
    { id: 30, name: "Coca Cola 500ml", price: 1800, cat: "drinks", desc: "Sabor original.", img: "https://source.unsplash.com/600x400/?soda" },
    { id: 31, name: "Coca Zero", price: 1800, cat: "drinks", desc: "Sin azúcar.", img: "https://source.unsplash.com/600x400/?soda" },
    { id: 32, name: "Sprite 500ml", price: 1800, cat: "drinks", desc: "Lima limón.", img: "https://source.unsplash.com/600x400/?soda" },
    { id: 33, name: "Fanta 500ml", price: 1800, cat: "drinks", desc: "Naranja refrescante.", img: "https://source.unsplash.com/600x400/?soda" },
    { id: 34, name: "Agua Mineral", price: 1500, cat: "drinks", desc: "Con o sin gas.", img: "https://source.unsplash.com/600x400/?soda" },
    { id: 35, name: "Limonada", price: 2200, cat: "drinks", desc: "Menta y jengibre.", img: "https://source.unsplash.com/600x400/?juice" },
    { id: 36, name: "Jugo de Naranja", price: 2000, cat: "drinks", desc: "100% exprimido.", img: "https://source.unsplash.com/600x400/?juice" },
    { id: 37, name: "Pomelada", price: 2200, cat: "drinks", desc: "Pomelo rosado fresco.", img: "https://source.unsplash.com/600x400/?juice" },
    { id: 38, name: "Aquarius Pera", price: 1700, cat: "drinks", desc: "Agua saborizada.", img: "https://source.unsplash.com/600x400/?soda" },
    { id: 39, name: "Aquarius Manzana", price: 1700, cat: "drinks", desc: "Agua saborizada.", img: "https://source.unsplash.com/600x400/?soda" },
    { id: 40, name: "Paso de los Toros", price: 1800, cat: "drinks", desc: "Tónica o Pomelo.", img: "https://source.unsplash.com/600x400/?soda" },
    { id: 41, name: "Licuado Frutilla", price: 2800, cat: "drinks", desc: "Con agua o leche.", img: "https://source.unsplash.com/600x400/?juice" },
    { id: 42, name: "Licuado Banana", price: 2800, cat: "drinks", desc: "Con leche.", img: "https://source.unsplash.com/600x400/?juice" },
    { id: 43, name: "Soda", price: 1200, cat: "drinks", desc: "Sifón de 500ml.", img: "https://source.unsplash.com/600x400/?soda" }
];

let cart = [];

// RENDERIZADO DE PRODUCTOS
function renderMenu(filter = 'all') {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
    
    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="menu-item">
                <img src="${p.img}" alt="${p.name}" class="menu-img">
                <div class="item-info">
                    <h3>${p.name}</h3>
                    <p>${p.desc}</p>
                    <span class="price">$${p.price.toLocaleString()}</span>
                    <button class="add-btn" onclick="addToCart(${p.id})">AGREGAR AL PECADO</button>
                </div>
            </div>
        `;
    });
}

// LÓGICA CARRITO
function addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    
    if(existing) {
        existing.qty++;
    } else {
        cart.push({...product, qty: 1});
    }
    updateUI();
}

function updateUI() {
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    
    document.getElementById('cartCount').innerText = count;
    document.getElementById('cartTotal').innerText = `$${total.toLocaleString()}`;
    
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    
    cart.forEach(item => {
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom:1rem; border-bottom:1px solid #333; padding-bottom:0.5rem">
                <div>
                    <h4>${item.name} x${item.qty}</h4>
                    <p>$${(item.price * item.qty).toLocaleString()}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:red; cursor:pointer">✕</button>
            </div>
        `;
    });
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateUI();
}

// WHATSAPP
function sendWhatsAppOrder() {
    if(cart.length === 0) return alert("Tu pedido está vacío");
    
    let msg = "🔥 *NUEVO PEDIDO - LIMBO BURGERS* \n\n";
    cart.forEach(i => {
        msg += `• *${i.qty}x ${i.name}* - $${(i.price * i.qty).toLocaleString()}\n`;
    });
    
    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    msg += `\n*TOTAL: $${total.toLocaleString()}*\n`;
    msg += "\n_Enviado desde el sitio web oficial._";
    
    window.open(`https://wa.me/5492615349682?text=${encodeURIComponent(msg)}`, '_blank');
}

// EVENTOS
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
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});