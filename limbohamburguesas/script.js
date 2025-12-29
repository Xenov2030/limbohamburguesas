/**
 * LIMBO BURGERS - JS ELITE 7.0
 */

let cart = [];
let currentProduct = null;

// --- ELEMENTOS ---
const cartDropdown = document.getElementById('cartDropdown');
const cartToggle = document.getElementById('cartToggle');
const sendOrderBtn = document.getElementById('sendOrder');
const heroStatus = document.getElementById('status-business');

// --- LÓGICA DE HORARIO ---
function checkBusinessHours() {
    const now = new Date();
    const currentHour = now.getHours();
    const isOpen = currentHour >= 12 && currentHour < 23;

    if (sendOrderBtn) {
        if (isOpen) {
            sendOrderBtn.disabled = false;
            sendOrderBtn.textContent = 'Pedir por WhatsApp';
            if (heroStatus) heroStatus.innerHTML = '🔥 ¡Estamos cocinando en vivo!';
        } else {
            sendOrderBtn.disabled = true;
            sendOrderBtn.textContent = 'Local Cerrado (12:00 a 23:00)';
            if (heroStatus) heroStatus.innerHTML = '💤 Abrimos a las 12:00hs';
        }
    }
}

// --- GESTIÓN DEL MODAL ---
function openModal(name, price, category) {
    currentProduct = { name, basePrice: price, totalPrice: price, category, customizations: {} };
    const modal = document.getElementById('productModal');
    const container = document.getElementById('customizationOptions');
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalCurrentPrice').textContent = price.toLocaleString('es-AR');
    
    container.innerHTML = '';

    if (category === 'burgers') {
        container.innerHTML = `
            <div class="opt-group">
                <label>Punto de la carne:</label>
                <select id="meatPoint">
                    <option value="A punto">A punto</option>
                    <option value="Jugosa">Jugosa</option>
                    <option value="Cocida">Cocida</option>
                </select>
            </div>
            <div class="opt-group">
                <label>Extras:</label>
                <div class="checkbox-item">
                    <input type="checkbox" id="extraCheddar" onchange="updateModalPrice(500, this)">
                    <label for="extraCheddar">Extra Cheddar (+$500)</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="extraBacon" onchange="updateModalPrice(800, this)">
                    <label for="extraBacon">Extra Bacon (+$800)</label>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="opt-group">
                <label>¿Algo más?</label>
                <select id="simpleOption">
                    <option value="Sin hielos / Normal">Sin hielos / Normal</option>
                    <option value="Con mucho hielo">Con mucho hielo</option>
                </select>
            </div>
        `;
    }

    modal.style.display = 'flex';
}

function updateModalPrice(extra, checkbox) {
    if (checkbox.checked) {
        currentProduct.totalPrice += extra;
    } else {
        currentProduct.totalPrice -= extra;
    }
    document.getElementById('modalCurrentPrice').textContent = currentProduct.totalPrice.toLocaleString('es-AR');
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// --- CARRITO ---
document.getElementById('confirmAdd').onclick = () => {
    let detail = "";
    if (currentProduct.category === 'burgers') {
        const point = document.getElementById('meatPoint').value;
        const cheddar = document.getElementById('extraCheddar').checked ? "Extra Cheddar" : "";
        const bacon = document.getElementById('extraBacon').checked ? "Extra Bacon" : "";
        detail = `Punto: ${point}${cheddar ? ' | ' + cheddar : ''}${bacon ? ' | ' + bacon : ''}`;
    } else {
        detail = document.getElementById('simpleOption').value;
    }

    cart.push({
        name: currentProduct.name,
        price: currentProduct.totalPrice,
        detail: detail,
        quantity: 1
    });

    updateCart();
    closeModal();
    cartDropdown.classList.add('active');
};

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>${item.detail}</small>
                </div>
                <div>
                    $${item.price.toLocaleString('es-AR')}
                    <button onclick="removeItem(${index})">❌</button>
                </div>
            </div>
        `;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toLocaleString('es-AR');
    localStorage.setItem('limbo_cart_v7', JSON.stringify(cart));
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// --- WHATSAPP PRO ---
function sendWhatsAppOrder() {
    if (cart.length === 0) return alert("El carrito está vacío.");
    
    let message = "🍔 *Nuevo Pedido - Limbo Burgers*\n\n";
    let total = 0;

    cart.forEach(item => {
        message += `1x *${item.name}* (${item.detail}) - $${item.price.toLocaleString('es-AR')}\n`;
        total += item.price;
    });

    message += `\n*Total: $${total.toLocaleString('es-AR')}*`;
    message += `\n\n_Enviado desde el sitio web._`;

    const phone = "5492615349682";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// --- FILTROS ---
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
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
    });
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('limbo_cart_v7');
    if (saved) cart = JSON.parse(saved);
    updateCart();
    checkBusinessHours();
});

// Toggle Carrito
cartToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    cartDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!cartDropdown.contains(e.target) && e.target !== cartToggle) {
        cartDropdown.classList.remove('active');
    }
});