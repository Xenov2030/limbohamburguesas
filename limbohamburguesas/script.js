/**
 * LIMBO BURGERS v10.0 - ELITE SCRIPT
 * Full Stack & UI/UX Optimized
 */

let cart = [];
let currentItem = null;

// --- BASE DE DATOS MASIVA (43 PRODUCTOS) ---
const PRODUCTS = {
    burgers: [
        { id: 'b1', name: 'Inferno Double', price: 9500, desc: 'Doble medallón 180g, cheddar x4, bacon y salsa Hell.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80', type: 'carne' },
        { id: 'b2', name: 'Glory Beef', price: 8800, desc: 'Medallón premium, aros de cebolla y BBQ ahumada.', img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80', type: 'carne' },
        { id: 'b3', name: 'Purgatory', price: 10200, desc: 'Triple carne, huevo frito, jamón y muzzarella.', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80', type: 'carne' },
        { id: 'b4', name: 'Holy Smoke', price: 9100, desc: 'Carne ahumada, provolone y pimientos asados.', img: 'https://images.unsplash.com/photo-1550317138-10000687ad32?w=600&q=80', type: 'carne' },
        { id: 'b5', name: 'Bacon Kingdom', price: 9800, desc: 'Doble carne envuelta en tejido de bacon crocante.', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80', type: 'carne' },
        { id: 'b6', name: 'Eternal Cheese', price: 8500, desc: 'Fondo de cheddar fundido y dip de queso azul.', img: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?w=600&q=80', type: 'carne' },
        { id: 'b7', name: 'Glory Chicken', price: 8200, desc: 'Pollo crispy, alioli de lima y lechuga morada.', img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=600&q=80', type: 'pollo' },
        { id: 'b8', name: 'Spicy Angel', price: 8500, desc: 'Pollo frito, jalapeños y mayonesa de sriracha.', img: 'https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?w=600&q=80', type: 'pollo' },
        { id: 'b9', name: 'Chicken Empire', price: 8900, desc: 'Doble pollo, doble queso y mostaza miel.', img: 'https://images.unsplash.com/photo-1610344233346-646738562d29?w=600&q=80', type: 'pollo' },
        { id: 'b10', name: 'Garden of Eden', price: 7900, desc: 'Lentejas, palta, brotes y cebolla caramelizada.', img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80', type: 'veggie' },
        { id: 'b11', name: 'Mushroom Soul', price: 8300, desc: 'Medallón de portobellos y queso brie.', img: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=600&q=80', type: 'veggie' },
        { id: 'b12', name: 'Green Spirit', price: 8100, desc: 'Espinaca y parmesano con crema de calabaza.', img: 'https://images.unsplash.com/photo-1585238341267-1cfec2046a55?w=600&q=80', type: 'veggie' },
        { id: 'b13', name: 'Vegan Hell', price: 8400, desc: 'Not-Burger, queso vegano y pan integral.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', type: 'vegan' },
        { id: 'b14', name: 'Earthly Delight', price: 8200, desc: 'Garbanzos especiados y hummus de remolacha.', img: 'https://images.unsplash.com/photo-1451277391041-3148485295c2?w=600&q=80', type: 'vegan' },
        { id: 'b15', name: 'Zero Sin', price: 8600, desc: 'Soja orgánica, vegetales asados y tofu.', img: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?w=600&q=80', type: 'vegan' }
    ],
    sides: [
        { id: 's1', name: 'Papas Clásicas', price: 3200 },
        { id: 's2', name: 'Papas Cheddar & Bacon', price: 4500 },
        { id: 's3', name: 'Papas Trufadas', price: 5200 },
        { id: 's4', name: 'Aros de Cebolla', price: 3800 },
        { id: 's5', name: 'Nuggets de Pollo', price: 4200 },
        { id: 's6', name: 'Bastones de Mozzarella', price: 4800 },
        { id: 's7', name: 'Alitas BBQ', price: 5500 },
        { id: 's8', name: 'Ensalada Coleslaw', price: 3100 }
    ],
    drinks: [
        { id: 'd1', name: 'Cerveza IPA', price: 4500, alc: true },
        { id: 'd2', name: 'Cerveza Rubia', price: 4200, alc: true },
        { id: 'd3', name: 'Fernet con Coca', price: 5800, alc: true },
        { id: 'd4', name: 'Gin Tonic', price: 6200, alc: true },
        { id: 'd5', name: 'Negroni', price: 6500, alc: true },
        { id: 'd6', name: 'Vino Malbec (Copa)', price: 5500, alc: true },
        { id: 'd7', name: 'Coca Cola', price: 1800 },
        { id: 'd8', name: 'Coca Zero', price: 1800 },
        { id: 'd9', name: 'Sprite', price: 1800 },
        { id: 'd10', name: 'Sprite Zero', price: 1800 },
        { id: 'd11', name: 'Fanta', price: 1800 },
        { id: 'd12', name: 'Paso de los Toros', price: 1800 },
        { id: 'd13', name: 'Agua Tónica', price: 1800 },
        { id: 'd14', name: 'Agua Mineral', price: 1500 },
        { id: 'd15', name: 'Agua con Gas', price: 1500 },
        { id: 'd16', name: 'Limonada Menta', price: 2800 },
        { id: 'd17', name: 'Jugo Naranja', price: 2500 },
        { id: 'd18', name: 'Té Frío', price: 2400 },
        { id: 'd19', name: 'Licuado Frutilla', price: 3500 },
        { id: 'd20', name: 'Jugo Arándanos', price: 3200 }
    ]
};

// --- RENDERIZADO DEL MENÚ ---
function renderMenu() {
    const burgerGrid = document.querySelector('.category-section[data-category="burgers"] .menu-grid');
    const sideGrid = document.querySelector('.category-section[data-category="sides"] .menu-grid');
    const drinkGrid = document.getElementById('drinksGrid');

    // Inyectar Bebidas (Las hamburguesas ya están parcialmente en el HTML)
    drinkGrid.innerHTML = PRODUCTS.drinks.map(d => `
        <div class="menu-item" data-type="drinks">
            <div class="item-info">
                ${d.alc ? '<span class="badge-alcohol">+18</span>' : ''}
                <h3>${d.name}</h3>
                <span class="price">$${d.price.toLocaleString()}</span>
                <button class="add-btn" onclick="openModal('${d.name}', ${d.price}, '${d.alc ? 'alcohol' : 'drink'}')">AGREGAR</button>
            </div>
        </div>
    `).join('');
}

// --- LÓGICA DE HORARIO ---
function checkHours() {
    const hour = new Date().getHours();
    const banner = document.getElementById('status-banner');
    const sendBtn = document.getElementById('sendOrder');
    
    // De 12:00 a 23:00 abierto
    const isOpen = hour >= 12 && hour < 23;

    if (isOpen) {
        banner.innerHTML = "🔥 PARRILLA ENCENDIDA - PEDÍ AHORA";
        banner.style.borderColor = "var(--primary-fire)";
        sendBtn.disabled = false;
    } else {
        banner.innerHTML = "💤 COCINA CERRADA - ABRIMOS A LAS 12:00";
        banner.style.borderColor = "#444";
        banner.style.color = "#888";
        sendBtn.disabled = true;
    }
}

// --- GESTIÓN DEL MODAL ---
function openModal(name, price, category) {
    currentItem = { name, basePrice: price, totalPrice: price, category, extras: [] };
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modalBody');

    let html = `<h2>${name}</h2>`;
    
    if (category === 'burger') {
        html += `
            <div class="opt-group">
                <label>PUNTO DE CARNE</label>
                <select id="meatPoint">
                    <option value="A punto">A punto (Rosado)</option>
                    <option value="Jugosa">Jugosa</option>
                    <option value="Bien cocida">Bien cocida</option>
                </select>
            </div>
            <div class="opt-group">
                <label>EXTRAS (+$1.000 c/u)</label>
                <div class="check-item"><input type="checkbox" class="extra-check" value="Cheddar" onchange="updateModalPrice()"> Cheddar</div>
                <div class="check-item"><input type="checkbox" class="extra-check" value="Bacon" onchange="updateModalPrice()"> Bacon</div>
            </div>`;
    } else if (category === 'alcohol') {
        html += `<div class="warning-box">⚠️ Debes ser mayor de 18 años para comprar alcohol. Se pedirá DNI al entregar.</div>`;
    } else {
        html += `<p>Se agregará a tu carrito de inmediato.</p>`;
    }

    body.innerHTML = html;
    modal.style.display = 'flex';
}

function updateModalPrice() {
    const extras = document.querySelectorAll('.extra-check:checked');
    currentItem.totalPrice = currentItem.basePrice + (extras.length * 1000);
    // Podrías añadir un span de precio dinámico aquí si gustas
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// --- CARRITO ---
document.getElementById('confirmAdd').onclick = () => {
    let detail = "";
    if (currentItem.category === 'burger') {
        const point = document.getElementById('meatPoint').value;
        const extras = Array.from(document.querySelectorAll('.extra-check:checked')).map(e => e.value);
        detail = `Punto: ${point} ${extras.length ? '| Extras: ' + extras.join(', ') : ''}`;
    }

    cart.push({
        name: currentItem.name,
        price: currentItem.totalPrice,
        detail: detail,
        category: currentItem.category
    });

    saveCart();
    closeModal();
    toggleCart(true);
};

function saveCart() {
    localStorage.setItem('limbo_v10_cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const countEl = document.getElementById('cartCount');
    
    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        container.innerHTML += `
            <div class="cart-item">
                <div class="cart-info">
                    <strong>${item.name}</strong>
                    <small>${item.detail || ''}</small>
                </div>
                <div class="cart-price">
                    $${item.price.toLocaleString()}
                    <button onclick="removeItem(${index})">✕</button>
                </div>
            </div>
        `;
    });

    totalEl.innerText = `$${total.toLocaleString()}`;
    countEl.innerText = cart.length;
}

function removeItem(i) {
    cart.splice(i, 1);
    saveCart();
}

// --- WHATSAPP TICKET PRO ---
function sendWhatsAppOrder() {
    if (cart.length === 0) return;

    let ticket = "🔥 *TICKET DE PEDIDO - LIMBO BURGERS* 🔥\n";
    ticket += "━━━━━━━━━━━━━━━━━━━━━\n\n";

    const categories = { burger: "🍔 HAMBURGUESAS", side: "🍟 ACOMPAÑAMIENTOS", drink: "🥤 BEBIDAS", alcohol: "🍺 ALCOHOL" };
    
    let total = 0;

    for (let cat in categories) {
        const items = cart.filter(i => i.category === cat || (cat === 'drink' && i.category === 'drink'));
        if (items.length > 0) {
            ticket += `*${categories[cat]}*\n`;
            items.forEach(it => {
                ticket += `• ${it.name} ${it.detail ? '('+it.detail+')' : ''} - $${it.price.toLocaleString()}\n`;
                total += it.price;
            });
            ticket += "\n";
        }
    }

    ticket += "━━━━━━━━━━━━━━━━━━━━━\n";
    ticket += `*TOTAL: $${total.toLocaleString()}*\n\n`;
    ticket += "_Pedido realizado desde la Web Oficial_";

    window.open(`https://wa.me/5492615349682?text=${encodeURIComponent(ticket)}`, '_blank');
}

// --- UI INTERACTIONS ---
function toggleCart(show) {
    document.getElementById('cartPanel').classList.toggle('active', show);
}

document.getElementById('cartToggle').onclick = () => toggleCart(true);
document.getElementById('closeCart').onclick = () => toggleCart(false);

// Filtros
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
    const saved = localStorage.getItem('limbo_v10_cart');
    if (saved) cart = JSON.parse(saved);
    renderMenu();
    renderCart();
    checkHours();
    setInterval(checkHours, 60000); // Check cada minuto
});