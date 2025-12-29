/**
 * LIMBO BURGERS v11.0 - SCRIPT DE RENDERIZADO DINÁMICO
 * Catálogo Masivo de 43 Productos
 */

let cart = [];
let currentItem = null;

// --- BASE DE DATOS MAESTRA ---
const PRODUCTS = {
    burgers: [
        // Carne (6)
        { id: 'b1', name: 'Diablo Burger', price: 9800, desc: 'Doble carne, cheddar fundido, jalapeños y salsa volcánica.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80', cat: 'carne' },
        { id: 'b2', name: 'Limbus Quad', price: 12500, desc: 'Cuatro medallones premium, bacon crocante y extra cheddar.', img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80', cat: 'carne' },
        { id: 'b3', name: 'Inferno BBQ', price: 9200, desc: 'Carne seleccionada, aros de cebolla y salsa BBQ ahumada.', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80', cat: 'carne' },
        { id: 'b4', name: 'The Sin', price: 8900, desc: 'Huevo frito, jamón, muzzarella y doble carne 180g.', img: 'https://images.unsplash.com/photo-1550317138-10000687ad32?w=600&q=80', cat: 'carne' },
        { id: 'b5', name: 'Smoky Hell', price: 9500, desc: 'Carne ahumada en leña, provolone y pimientos asados.', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80', cat: 'carne' },
        { id: 'b6', name: 'Classic Soul', price: 7800, desc: 'La clásica perfecta: lechuga, tomate, cebolla y carne.', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80', cat: 'carne' },
        // Pollo (3)
        { id: 'b7', name: 'Holy Chicken', price: 8200, desc: 'Pechuga crispy, alioli de hierbas y lechuga morada.', img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=600&q=80', cat: 'pollo' },
        { id: 'b8', name: 'Crispy Angel', price: 8500, desc: 'Pollo frito marinado, coleslaw y pepinillos.', img: 'https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?w=600&q=80', cat: 'pollo' },
        { id: 'b9', name: 'Chicken Glory', price: 8800, desc: 'Doble pollo crispy, queso crema y palta.', img: 'https://images.unsplash.com/photo-1610344233346-646738562d29?w=600&q=80', cat: 'pollo' },
        // Veggie (3)
        { id: 'b10', name: 'Eden Plant', price: 7900, desc: 'Medallón de lentejas, calabaza asada y queso brie.', img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80', cat: 'veggie' },
        { id: 'b11', name: 'Mushroom Spirit', price: 8300, desc: 'Gírgolas salteadas, muzzarella y espinaca fresca.', img: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=600&q=80', cat: 'veggie' },
        { id: 'b12', name: 'Veggie Bliss', price: 8100, desc: 'Quinua y vegetales con dip de remolacha.', img: 'https://images.unsplash.com/photo-1585238341267-1cfec2046a55?w=600&q=80', cat: 'veggie' },
        // Vegan (3)
        { id: 'b13', name: 'Zero Meat', price: 8600, desc: 'Not-Burger, cheddar vegano y pan de papa vegan.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', cat: 'vegan' },
        { id: 'b14', name: 'Roots Burger', price: 8400, desc: 'Garbanzos especiados, tahine y mix de verdes.', img: 'https://images.unsplash.com/photo-1451277391041-3148485295c2?w=600&q=80', cat: 'vegan' },
        { id: 'b15', name: 'Pure Eden', price: 8500, desc: 'Soja orgánica, vegetales grillados y tofu marinado.', img: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?w=600&q=80', cat: 'vegan' }
    ],
    sides: [
        { id: 's1', name: 'Papas Cheddar', price: 4500, img: 'https://images.unsplash.com/photo-1573014133633-560dd432ee64?w=600&q=80' },
        { id: 's2', name: 'Papas Trufadas', price: 5200, img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80' },
        { id: 's3', name: 'Papas Rústicas', price: 3800, img: 'https://images.unsplash.com/photo-1630384066252-19e1ad955494?w=600&q=80' },
        { id: 's4', name: 'Aros de Cebolla', price: 3900, img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80' },
        { id: 's5', name: 'Nuggets Limbo', price: 4200, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80' },
        { id: 's6', name: 'Bastones Mozza', price: 4800, img: 'https://images.unsplash.com/photo-1531749956467-241242ac08fd?w=600&q=80' },
        { id: 's7', name: 'Alitas BBQ', price: 5500, img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80' },
        { id: 's8', name: 'Coleslaw Premium', price: 3200, img: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?w=600&q=80' }
    ],
    drinks: [
        // Alcohol (6)
        { id: 'd1', name: 'Cerveza IPA', price: 4800, alc: true, img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80' },
        { id: 'd2', name: 'Cerveza Rubia', price: 4200, alc: true, img: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?w=600&q=80' },
        { id: 'd3', name: 'Fernet Clásico', price: 5900, alc: true, img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80' },
        { id: 'd4', name: 'Gin Tonic', price: 6500, alc: true, img: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?w=600&q=80' },
        { id: 'd5', name: 'Negroni', price: 6800, alc: true, img: 'https://images.unsplash.com/photo-1541348263662-e0c8de42d9ef?w=600&q=80' },
        { id: 'd6', name: 'Malbec Mendoza', price: 7200, alc: true, img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80' },
        // Gaseosas (7)
        { id: 'd7', name: 'Coca Cola 500ml', price: 1900, alc: false, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80' },
        { id: 'd8', name: 'Coca Zero', price: 1900, alc: false, img: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?w=600&q=80' },
        { id: 'd9', name: 'Sprite', price: 1900, alc: false, img: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80' },
        { id: 'd10', name: 'Sprite Zero', price: 1900, alc: false, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80' },
        { id: 'd11', name: 'Fanta Naranja', price: 1900, alc: false, img: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=600&q=80' },
        { id: 'd12', name: 'Paso de los Toros', price: 1900, alc: false, img: 'https://images.unsplash.com/photo-1581005014431-a204cc1848c6?w=600&q=80' },
        { id: 'd13', name: 'Agua Tónica', price: 2100, alc: false, img: 'https://images.unsplash.com/photo-1592318793781-6f48574d538e?w=600&q=80' },
        // Sin Gas (7)
        { id: 'd14', name: 'Agua Mineral', price: 1500, alc: false, img: 'https://images.unsplash.com/photo-1523362628742-0c29a456b92e?w=600&q=80' },
        { id: 'd15', name: 'Agua con Gas', price: 1500, alc: false, img: 'https://images.unsplash.com/photo-1548967170-66786213943d?w=600&q=80' },
        { id: 'd16', name: 'Limonada Menta', price: 2800, alc: false, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80' },
        { id: 'd17', name: 'Jugo Naranja Natural', price: 2500, alc: false, img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80' },
        { id: 'd18', name: 'Té Frío Limón', price: 2400, alc: false, img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=80' },
        { id: 'd19', name: 'Licuado Frutilla', price: 3500, alc: false, img: 'https://images.unsplash.com/photo-1546173159-315724a93c97?w=600&q=80' },
        { id: 'd20', name: 'Jugo Arándanos', price: 3200, alc: false, img: 'https://images.unsplash.com/photo-1562136441-fe583196966c?w=600&q=80' }
    ]
};

// --- RENDERIZADO DINÁMICO ---
function initMenu() {
    // Hamburguesas
    const burgerGrid = document.querySelector('#burgers-container .menu-grid');
    burgerGrid.innerHTML = PRODUCTS.burgers.map(p => createCard(p, 'burger')).join('');

    // Sides
    const sideGrid = document.querySelector('#sides-container .menu-grid');
    sideGrid.innerHTML = PRODUCTS.sides.map(p => createCard(p, 'side')).join('');

    // Bebidas divididas
    const drinkAlcoholGrid = document.getElementById('drinks-alcohol');
    const drinkSoftGrid = document.getElementById('drinks-soft');
    
    drinkAlcoholGrid.innerHTML = PRODUCTS.drinks.filter(d => d.alc).map(d => createCard(d, 'alcohol')).join('');
    drinkSoftGrid.innerHTML = PRODUCTS.drinks.filter(d => !d.alc).map(d => createCard(d, 'drink')).join('');
}

function createCard(product, category) {
    return `
        <div class="menu-item" data-type="${category}">
            <img src="${product.img}" alt="${product.name}" loading="lazy">
            <div class="item-info">
                <h3>${product.alc ? '<span class="badge-alcohol">+18</span>' : ''}${product.name}</h3>
                <p>${product.desc || 'Sabor premium Limbo Burgers.'}</p>
                <span class="price">$${product.price.toLocaleString('es-AR')}</span>
                <button class="add-btn" onclick="openModal('${product.name}', ${product.price}, '${category}')">AGREGAR</button>
            </div>
        </div>
    `;
}

// --- LÓGICA DE HORARIO ---
function checkHours() {
    const hour = new Date().getHours();
    const banner = document.getElementById('status-banner');
    const isOpen = hour >= 12 && hour < 23;
    banner.innerHTML = isOpen ? "🔥 PARRILLA ENCENDIDA - PEDÍ AHORA" : "💤 CERRADO - ABRIMOS 12:00 HS";
    banner.classList.toggle('closed', !isOpen);
}

// --- GESTIÓN DE MODAL ---
function openModal(name, price, category) {
    currentItem = { name, basePrice: price, totalPrice: price, category };
    const body = document.getElementById('modalBody');
    let html = `<h2>${name.toUpperCase()}</h2>`;

    if (category === 'burger') {
        html += `
            <div class="opt-group">
                <label>PUNTO DE CARNE</label>
                <select id="meatPoint">
                    <option value="A punto">A punto (Rosado)</option>
                    <option value="Jugosa">Jugosa</option>
                    <option value="Cocida">Bien cocida</option>
                </select>
            </div>`;
    } else if (category === 'alcohol') {
        html += `<div class="warning-box" style="color:red; font-size:0.8rem; margin-top:1rem; padding:10px; border:1px solid red;">⚠️ ADVERTENCIA: Debes ser mayor de 18 años para consumir alcohol.</div>`;
    }

    body.innerHTML = html;
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() { document.getElementById('productModal').style.display = 'none'; }

// --- CARRITO ---
document.getElementById('confirmAdd').onclick = () => {
    let detail = "";
    if (currentItem.category === 'burger') {
        detail = "Punto: " + document.getElementById('meatPoint').value;
    }

    cart.push({ ...currentItem, detail });
    saveCart();
    closeModal();
    document.getElementById('cartPanel').classList.add('active');
};

function saveCart() {
    localStorage.setItem('limbo_cart_v11', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const countEl = document.getElementById('cartCount');
    let total = 0;

    container.innerHTML = cart.map((item, i) => {
        total += item.basePrice;
        return `
            <div class="cart-item">
                <div><strong>${item.name}</strong><br><small>${item.detail || ''}</small></div>
                <div>$${item.basePrice.toLocaleString()}<button onclick="removeItem(${i})" style="margin-left:10px; color:red; background:none; border:none;">✕</button></div>
            </div>`;
    }).join('');

    totalEl.innerText = `$${total.toLocaleString()}`;
    countEl.innerText = cart.length;
}

function removeItem(i) { cart.splice(i, 1); saveCart(); }

// --- WHATSAPP ---
function sendWhatsAppOrder() {
    if (cart.length === 0) return alert("El carrito está vacío.");
    let message = "🔥 *NUEVO PEDIDO - LIMBO BURGERS*\\n\\n";
    cart.forEach(item => {
        message += `• *1x ${item.name}*\\n  _${item.detail || 'Tradicional'}_\\n  $${item.basePrice.toLocaleString()}\\n\\n`;
    });
    const total = cart.reduce((s, it) => s + it.basePrice, 0);
    message += `*TOTAL: $${total.toLocaleString()}*`;
    window.open(`https://wa.me/5492615349682?text=${encodeURIComponent(message)}`, '_blank');
}

// Eventos de UI
document.getElementById('cartToggle').onclick = () => document.getElementById('cartPanel').classList.toggle('active');
document.getElementById('closeCart').onclick = () => document.getElementById('cartPanel').classList.remove('active');

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.category-section').forEach(sec => {
            sec.style.display = (filter === 'all' || sec.dataset.category === filter) ? 'block' : 'none';
        });
    };
});

// Init
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('limbo_cart_v11');
    if (saved) cart = JSON.parse(saved);
    initMenu();
    renderCart();
    checkHours();
});