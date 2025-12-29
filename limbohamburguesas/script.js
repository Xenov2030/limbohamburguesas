/**
 * LIMBO BURGERS - V9.0 MOBILE-FIRST VIP
 */

let cart = [];
let currentItem = null;

// --- ELEMENTOS ---
const cartDropdown = document.getElementById('cartDropdown');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

// --- LÓGICA DE HORARIO ---
function updateBusinessStatus() {
    const hour = new Date().getHours();
    const statusEl = document.getElementById('status-business');
    const sendBtn = document.getElementById('sendOrder');
    
    // 12:00 a 23:00
    const isOpen = hour >= 12 && hour < 23;

    if (isOpen) {
        statusEl.innerHTML = "🔥 PARRILLA ENCENDIDA";
        statusEl.style.color = "#FF4500";
        if(sendBtn) sendBtn.disabled = false;
    } else {
        statusEl.innerHTML = "💤 CERRADO - ABRE 12:00HS";
        statusEl.style.color = "#888";
        if(sendBtn) sendBtn.disabled = true;
    }
}

// --- GESTIÓN DE MODAL VIP ---
function openModal(name, price, category) {
    currentItem = { name, basePrice: price, totalPrice: price, category };
    
    let content = `<h2 style="font-family:'Bebas Neue'; font-size:2rem; color:var(--primary-fire)">${name}</h2>`;

    if (category === 'burgers') {
        content += `
            <div class="opt-group">
                <label>PUNTO DE COCCIÓN</label>
                <select id="meat-point">
                    <option value="A punto">A punto (Rosado)</option>
                    <option value="Jugosa">Jugosa (Corte rojo)</option>
                    <option value="Cocida">Bien cocida</option>
                </select>
            </div>
        `;
    } else if (category === 'alcohol') {
        content += `
            <div class="opt-group" style="text-align:center; padding: 1rem; border: 1px dashed red;">
                <p style="color:#ff4444; font-weight:bold;">⚠️ ATENCIÓN</p>
                <p style="font-size:0.8rem;">Debes ser mayor de 18 años para comprar este producto. Se solicitará DNI al recibir.</p>
            </div>
        `;
    } else {
        content += `<p style="margin-top:1rem; color:#888;">Se agregará a tu pedido inmediatamente.</p>`;
    }

    modalBody.innerHTML = content;
    modal.style.display = 'flex';
}

document.getElementById('addToCartConfirm').onclick = () => {
    let detail = "Estándar";
    if (currentItem.category === 'burgers') {
        detail = "Punto: " + document.getElementById('meat-point').value;
    } else if (currentItem.category === 'alcohol') {
        detail = "Validación +18 requerida";
    }

    cart.push({
        name: currentItem.name,
        price: currentItem.totalPrice,
        detail: detail
    });

    saveAndUpdate();
    closeModal();
    if(window.innerWidth < 768) cartDropdown.classList.add('active'); // Mostrar feedback en mobile
};

// --- CARRITO ---
function saveAndUpdate() {
    localStorage.setItem('limbo_cart_v9', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const countEl = document.getElementById('cartCount');
    const totalEl = document.getElementById('cartTotal');
    
    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        container.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <small style="color:#666">${item.detail}</small>
                </div>
                <div style="text-align:right">
                    $${item.price.toLocaleString()}<br>
                    <button onclick="removeItem(${index})" style="color:red; background:none; border:none; margin-top:5px">Eliminar</button>
                </div>
            </div>
        `;
    });

    countEl.innerText = cart.length;
    totalEl.innerText = `$${total.toLocaleString()}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    saveAndUpdate();
}

// --- WHATSAPP TICKET ---
function sendWhatsAppOrder() {
    if (cart.length === 0) return alert("Tu carrito está vacío.");

    let message = "🔥 *NUEVO PEDIDO - LIMBO BURGERS*\n\n";
    let total = 0;

    cart.forEach((item, i) => {
        message += `*${i+1}. ${item.name}*\n   _${item.detail}_\n   $${item.price.toLocaleString()}\n\n`;
        total += item.price;
    });

    message += `*TOTAL A PAGAR: $${total.toLocaleString()}*`;
    message += `\n\n_Ubicación: Mendoza, Argentina_`;

    const phone = "5492615349682";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// --- EVENTOS ---
cartToggle.onclick = () => cartDropdown.classList.toggle('active');
if(closeCart) closeCart.onclick = () => cartDropdown.classList.remove('active');
document.getElementById('closeModal').onclick = closeModal;

function closeModal() { modal.style.display = 'none'; }

// Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const f = btn.dataset.filter;
        document.querySelectorAll('.menu-item').forEach(item => {
            item.style.display = (f === 'all' || item.dataset.category === f) ? 'block' : 'none';
        });
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('limbo_cart_v9');
    if (saved) cart = JSON.parse(saved);
    renderCart();
    updateBusinessStatus();
});