/**
 * LIMBO BURGERS v15.0 - THE FINAL VERSION
 */

const IMGS = {
    carne: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    pollo: "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=600&q=80",
    vegana: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&q=80",
    sides: "https://images.unsplash.com/photo-1573014133633-560dd432ee64?w=600&q=80",
    soda: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80",
    juice: "https://images.unsplash.com/photo-1544145945-f904253db0ad?w=600&q=80",
    alcohol: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80"
};

const PRODUCTS = [
    // --- BURGERS CARNE (6) ---
    { id: 1, name: "Diablo Burger", price: 9800, cat: "burgers", img: IMGS.carne, type: "carne", desc: "Doble carne, jalapeños y salsa volcánica." },
    { id: 2, name: "Limbus Quad", price: 12500, cat: "burgers", img: IMGS.carne, type: "carne", desc: "4 medallones y extra bacon." },
    { id: 3, name: "Inferno BBQ", price: 9200, cat: "burgers", img: IMGS.carne, type: "carne", desc: "Carne premium y BBQ ahumada." },
    { id: 4, name: "Purgatorio", price: 8900, cat: "burgers", img: IMGS.carne, type: "carne", desc: "Huevo, jamón y muzzarella." },
    { id: 5, name: "Cheese Explosion", price: 8500, cat: "burgers", img: IMGS.carne, type: "carne", desc: "Bañada en fondue de cheddar." },
    { id: 6, name: "Classic King", price: 7800, cat: "burgers", img: IMGS.carne, type: "carne", desc: "La tradicional de la casa." },
    
    // --- BURGERS POLLO (3) ---
    { id: 7, name: "Holy Chicken", price: 8200, cat: "burgers", img: IMGS.pollo, type: "pollo", desc: "Pechuga crispy y alioli." },
    { id: 8, name: "Crispy Angel", price: 8500, cat: "burgers", img: IMGS.pollo, type: "pollo", desc: "Pollo frito estilo Kentucky." },
    { id: 9, name: "Lemon Poultry", price: 8100, cat: "burgers", img: IMGS.pollo, type: "pollo", desc: "Grillada con crema de limón." },

    // --- VEGAN (6) ---
    { id: 10, name: "Eden Plant", price: 8800, cat: "veggie", img: IMGS.vegana, isVegan: true, desc: "NotBurger, palta y tomate." },
    { id: 11, name: "Falafel Heaven", price: 7900, cat: "veggie", img: IMGS.vegana, isVegan: true, desc: "Falafel y yogur vegano." },
    { id: 12, name: "Green Soul", price: 8200, cat: "veggie", img: IMGS.vegana, isVegan: true, desc: "Espinaca y avena." },
    { id: 13, name: "Vegan Beast", price: 9100, cat: "veggie", img: IMGS.vegana, isVegan: true, desc: "Doble NotBurger." },
    { id: 14, name: "Mushroom Zen", price: 8600, cat: "veggie", img: IMGS.vegana, isVegan: true, desc: "Gírgolas grilladas." },
    { id: 15, name: "Tofu Fire", price: 8300, cat: "veggie", img: IMGS.vegana, isVegan: true, desc: "Tofu marinado en sriracha." },

    // --- SIDES (8) ---
    { id: 16, name: "Papas Cheddar", price: 4500, cat: "sides", img: IMGS.sides, desc: "Con cheddar y bacon." },
    { id: 17, name: "Papas Trufadas", price: 5200, cat: "sides", img: IMGS.sides, desc: "Aceite de trufa y parmesano." },
    { id: 18, name: "Aros de Cebolla", price: 3800, cat: "sides", img: IMGS.sides, desc: "12 unidades con BBQ." },
    { id: 19, name: "Nuggets x10", price: 4200, cat: "sides", img: IMGS.sides, desc: "Puro pollo crispy." },
    { id: 20, name: "Bastones Muzza", price: 4800, cat: "sides", img: IMGS.sides, desc: "6 unidades con pomodoro." },
    { id: 21, name: "Alitas BBQ", price: 5500, cat: "sides", img: IMGS.sides, desc: "6 alitas picantes." },
    { id: 22, name: "Coleslaw Vegan", price: 2900, cat: "sides", img: IMGS.sides, isVegan: true, desc: "Repollo y mayo vegana." },
    { id: 23, name: "Papas Rústicas", price: 3500, cat: "sides", img: IMGS.sides, isVegan: true, desc: "Con piel y romero." },

    // --- BEBIDAS (20) ---
    { id: 24, name: "Cerveza IPA", price: 3500, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 25, name: "Cerveza Rubia", price: 3000, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 26, name: "Fernet Branca", price: 4500, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 27, name: "Gin Tonic", price: 4800, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 28, name: "Negroni", price: 5000, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 29, name: "Vino Malbec", price: 6500, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 30, name: "Coca Cola", price: 1800, cat: "drinks", img: IMGS.soda },
    { id: 31, name: "Coca Zero", price: 1800, cat: "drinks", img: IMGS.soda },
    { id: 32, name: "Sprite", price: 1800, cat: "drinks", img: IMGS.soda },
    { id: 33, name: "Fanta", price: 1800, cat: "drinks", img: IMGS.soda },
    { id: 34, name: "Agua Mineral", price: 1500, cat: "drinks", img: IMGS.juice },
    { id: 35, name: "Limonada", price: 2200, cat: "drinks", img: IMGS.juice },
    { id: 36, name: "Jugo Naranja", price: 2000, cat: "drinks", img: IMGS.juice },
    { id: 37, name: "Aquarius Pera", price: 1700, cat: "drinks", img: IMGS.juice },
    { id: 38, name: "Soda Sifón", price: 1200, cat: "drinks", img: IMGS.juice },
    { id: 39, name: "Licuado Banana", price: 2800, cat: "drinks", img: IMGS.juice },
    { id: 40, name: "Stellar Artois", price: 3800, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 41, name: "Corona 330", price: 4200, cat: "drinks", img: IMGS.alcohol, isAlcohol: true },
    { id: 42, name: "Pomelada", price: 2200, cat: "drinks", img: IMGS.juice },
    { id: 43, name: "Agua con Gas", price: 1500, cat: "drinks", img: IMGS.juice }
];

let cart = JSON.parse(localStorage.getItem('limbo_v15_cart')) || [];
let currentProduct = null;

// --- LOGICA UI ---
function renderMenu(filter = 'all') {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

    filtered.forEach(p => {
        const badges = `
            ${p.isVegan ? '<span class="badge badge-vegan">🌱 100% VEGANO</span>' : ''}
            ${p.isAlcohol ? '<span class="badge badge-alcohol">🔞 +18</span>' : ''}
        `;
        grid.innerHTML += `
            <div class="menu-item">
                ${badges}
                <img src="${p.img}" class="menu-img" alt="${p.name}">
                <div class="item-info">
                    <h3>${p.name}</h3>
                    <p>${p.desc || ''}</p>
                    <span class="price" style="font-size:1.5rem; font-weight:800; color:white; display:block; margin:10px 0;">$${p.price.toLocaleString()}</span>
                    <button class="add-btn" onclick="handleAddToCart(${p.id})">AGREGAR</button>
                </div>
            </div>
        `;
    });
}

function handleAddToCart(id) {
    const p = PRODUCTS.find(prod => prod.id === id);
    if(p.isAlcohol) {
        if(!confirm("🔞 ¿Eres mayor de 18 años para consumir alcohol?")) return;
    }

    if(p.cat === 'burgers' || p.cat === 'veggie') {
        openModal(p);
    } else {
        cart.push({ ...p, cartId: Date.now(), finalPrice: p.price, details: "Tradicional" });
        updateUI();
    }
}

// --- MODAL PERSONALIZACION ---
function openModal(p) {
    currentProduct = p;
    const body = document.getElementById('modalBody');
    body.innerHTML = `<h2>${p.name}</h2>`;

    if(p.type === 'carne') {
        body.innerHTML += `
            <div class="custom-opt">
                <label>PUNTO DE CARNE:</label>
                <select id="pinto_carne">
                    <option value="Jugosa">Jugosa</option>
                    <option value="A punto">A punto</option>
                    <option value="Cocida">Cocida</option>
                </select>
            </div>`;
    }

    body.innerHTML += `
        <div class="custom-opt">
            <label><input type="checkbox" id="no_cebolla"> Sin Cebolla</label>
            <label><input type="checkbox" id="no_tomate"> Sin Tomate</label>
        </div>
        <div class="custom-opt">
            <label>EXTRAS:</label>
            <label><input type="checkbox" class="extra-item" data-p="500" value="Extra Cheddar"> Extra Cheddar (+$500)</label>
            <label><input type="checkbox" class="extra-item" data-p="800" value="Bacon"> Bacon (+$800)</label>
            <label><input type="checkbox" class="extra-item" data-p="400" value="Huevo"> Huevo (+$400)</label>
        </div>
    `;
    document.getElementById('productModal').style.display = 'flex';
}

document.getElementById('confirmAdd').onclick = () => {
    let details = [];
    let extraPrice = 0;
    
    const punto = document.getElementById('pinto_carne');
    if(punto) details.push("Punto: " + punto.value);
    
    if(document.getElementById('no_cebolla').checked) details.push("Sin cebolla");
    if(document.getElementById('no_tomate').checked) details.push("Sin tomate");
    
    document.querySelectorAll('.extra-item:checked').forEach(ex => {
        details.push(ex.value);
        extraPrice += parseInt(ex.dataset.p);
    });

    cart.push({
        ...currentProduct,
        cartId: Date.now(),
        finalPrice: currentProduct.price + extraPrice,
        details: details.join(", ") || "Clásica"
    });
    
    closeModal();
    updateUI();
};

function closeModal() { document.getElementById('productModal').style.display = 'none'; }

// --- CARRITO Y LOGISTICA ---
function toggleDeliveryZones() {
    const method = document.getElementById('deliveryMethod').value;
    document.getElementById('zoneSelectorContainer').style.display = method === 'delivery' ? 'block' : 'none';
    updateUI();
}

function updateUI() {
    localStorage.setItem('limbo_v15_cart', JSON.stringify(cart));
    document.getElementById('cartCount').innerText = cart.length;
    
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.finalPrice;
        container.innerHTML += `
            <div style="padding:10px 0; border-bottom:1px solid #333;">
                <div style="display:flex; justify-content:space-between;">
                    <strong>${item.name}</strong>
                    <span>$${item.finalPrice.toLocaleString()}</span>
                </div>
                <small style="color:var(--text-gray)">${item.details}</small>
                <button onclick="removeFromCart(${item.cartId})" style="color:red; background:none; border:none; display:block; cursor:pointer">Eliminar</button>
            </div>
        `;
    });

    const isDelivery = document.getElementById('deliveryMethod').value === 'delivery';
    const ship = isDelivery ? parseInt(document.getElementById('deliveryZone').value) : 0;
    
    document.getElementById('shippingCost').innerText = `$${ship.toLocaleString()}`;
    document.getElementById('cartTotal').innerText = `$${(subtotal + ship).toLocaleString()}`;
}

function removeFromCart(id) {
    cart = cart.filter(i => i.cartId !== id);
    updateUI();
}

// --- WHATSAPP TICKET ---
function sendWhatsAppOrder() {
    if(cart.length === 0) return alert("El carrito está vacío");
    
    const method = document.getElementById('deliveryMethod').value;
    const zoneName = document.querySelector('#deliveryZone option:checked')?.text || "N/A";
    const ship = method === 'delivery' ? parseInt(document.getElementById('deliveryZone').value) : 0;
    
    let msg = `🔥 *NUEVO PEDIDO - LIMBO BURGERS v15* \n\n`;
    cart.forEach((i, idx) => {
        msg += `*${idx+1}. ${i.name}* \n   _${i.details}_ \n   $${i.finalPrice.toLocaleString()}\n\n`;
    });
    
    msg += `--------------------------\n`;
    msg += `🛵 *ENTREGA:* ${method === 'pickup' ? 'Retiro en Local' : 'Envío a domicilio ('+zoneName+')'}\n`;
    
    const subtotal = cart.reduce((acc, i) => acc + i.finalPrice, 0);
    msg += `💰 *TOTAL FINAL: $${(subtotal + ship).toLocaleString()}*\n\n`;
    msg += `_Mendoza, Argentina_`;

    window.open(`https://wa.me/5492615349682?text=${encodeURIComponent(msg)}`, '_blank');
}

// EVENTOS INICIALES
document.getElementById('cartToggle').onclick = () => document.getElementById('cartPanel').classList.add('active');
document.getElementById('closeCart').onclick = () => document.getElementById('cartPanel').classList.remove('active');

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderMenu(btn.dataset.filter);
    };
});

window.onload = () => {
    renderMenu();
    updateUI();
};