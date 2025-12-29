/**
 * LIMBO BURGERS - LÓGICA V8.0 DARK PREMIUM
 */

let cart = [];
let currentItem = null;

// --- ELEMENTOS ---
const cartDropdown = document.getElementById('cartDropdown');
const cartToggle = document.getElementById('cartToggle');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.querySelector('.close-modal');

// --- LÓGICA DE HORARIO ---
function checkHours() {
    const hour = new Date().getHours();
    const status = document.getElementById('status-business');
    if(hour >= 12 && hour < 23) {
        status.innerHTML = "🔥 ¡PARRILLA ENCENDIDA!";
        status.style.color = "#FF4500";
    } else {
        status.innerHTML = "💤 VOLVEMOS A LAS 12:00 HS";
        status.style.color = "#888";
    }
}

// --- GESTIÓN DE MODAL ---
function openModal(name, price, category) {
    currentItem = { name, basePrice: price, totalPrice: price, category, extras: [] };
    
    modalBody.innerHTML = `
        <h2>${name.toUpperCase()}</h2>
        <p class="modal-desc">Personaliza tu pedido a continuación</p>
    `;

    if (category === 'burgers') {
        modalBody.innerHTML += `
            <div class="opt-group">
                <label>PUNTO DE LA CARNE</label>
                <select id="meat-point">
                    <option value="A punto">A punto (Rosado)</option>
                    <option value="Jugosa">Jugosa (Bien roja)</option>
                    <option value="Cocida">Cocida</option>
                </select>
            </div>
            <div class="opt-group">
                <label>EXTRAS PREMIUM</label>
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="extra-cheddar" value="500" onchange="updateModalPrice()"> 
                    Extra Cheddar (+$500)
                </div>
                <div class="checkbox-wrapper" style="margin-top:10px">
                    <input type="checkbox" id="extra-bacon" value="800" onchange="updateModalPrice()"> 
                    Extra Bacon (+$800)
                </div>
            </div>
        `;
    } else if (category === 'drinks') {
        modalBody.innerHTML += `
            <div class="opt-group">
                <label>PREPARACIÓN</label>
                <select id="drink-opt">
                    <option value="Fría de heladera">Fría de heladera</option>
                    <option value="Con vaso y hielo">Con vaso y hielo</option>
                </select>
            </div>
        `;
    } else {
        modalBody.innerHTML += `<p style="margin-top:20px; color:#A0A0A0">Se añadirá a tu carrito con nuestra receta original.</p>`;
    }

    updateModalPrice();
    modal.style.display = 'flex';
}

function updateModalPrice() {
    let extraTotal = 0;
    const cheddar = document.getElementById('extra-cheddar');
    const bacon = document.getElementById('extra-bacon');

    if (cheddar && cheddar.checked) extraTotal += 500;
    if (bacon && bacon.checked) extraTotal += 800;

    currentItem.totalPrice = currentItem.basePrice + extraTotal;
    document.getElementById('modal-price-display').innerText = `$${currentItem.totalPrice.toLocaleString()}`;
}

document.getElementById('addToCartConfirm').onclick = () => {
    let detail = "";
    if (currentItem.category === 'burgers') {
        const point = document.getElementById('meat-point').value;
        const extraC = document.getElementById('extra-cheddar').checked ? "Extra Cheddar" : "";
        const extraB = document.getElementById('extra-bacon').checked ? "Extra Bacon" : "";
        detail = `${point} ${extraC ? '+ ' + extraC : ''} ${extraB ? '+ ' + extraB : ''}`;
    } else if (currentItem.category === 'drinks') {
        detail = document.getElementById('drink-opt').value;
    } else {
        detail = "Tradicional";
    }

    cart.push({
        name: currentItem.name,
        price: currentItem.totalPrice,
        detail: detail
    });

    saveAndUpdate();
    closeModal();
};

// --- CARRITO Y PERSISTENCIA ---
function saveAndUpdate() {
    localStorage.setItem('limbo_cart_v8', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const count = document.getElementById('cartCount');
    const totalDisp = document.getElementById('cartTotal');
    
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
                <div>
                    $${item.price.toLocaleString()}
                    <button onclick="removeItem(${index})" style="background:none; border:none; color:red; cursor:pointer; margin-left:10px">✕</button>
                </div>
            </div>
        `;
    });

    count.innerText = cart.length;
    totalDisp.innerText = `$${total.toLocaleString()}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    saveAndUpdate();
}

// --- WHATSAPP TICKET PRO ---
function sendWhatsAppOrder() {
    if (cart.length === 0) return alert("Tu carrito está vacío");

    let message = "🔥 *NUEVO PEDIDO - LIMBO BURGERS*\n\n";
    let total = 0;

    cart.forEach(item => {
        message += `📍 *1x ${item.name}*\n   _${item.detail}_\n   *Price:* $${item.price.toLocaleString()}\n\n`;
        total += item.price;
    });

    message += `──────────────\n*TOTAL A PAGAR: $${total.toLocaleString()}*`;
    
    const phone = "5492615349682";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// --- EVENTOS ---
cartToggle.onclick = (e) => { e.stopPropagation(); cartDropdown.classList.toggle('active'); };
closeModalBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target == modal) closeModal(); };

function closeModal() { modal.style.display = 'none'; }

// --- FILTROS ---
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        
        document.querySelectorAll('.menu-item').forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('limbo_cart_v8');
    if (saved) cart = JSON.parse(saved);
    renderCart();
    checkHours();
});