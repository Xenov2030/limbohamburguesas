/**
 * LIMBO BURGERS - JS Final (Versión 5.0 + Horario Comercial Dinámico)
 */

// --- ELEMENTOS ---
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const cartToggle = document.getElementById('cartToggle');
const cartDropdown = document.getElementById('cartDropdown');
const sendOrderBtn = document.getElementById('sendOrder'); // Botón de WhatsApp
const heroStatus = document.querySelector('.hero p'); // Párrafo de descripción en Hero

// --- GESTIÓN DEL PEDIDO ---
let cart = [];

// --- LÓGICA DE HORARIO COMERCIAL ---
function checkBusinessHours() {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Regla: Abre todos los días de 12:00 a 23:00
    const isOpen = currentHour >= 12 && currentHour < 23;

    if (sendOrderBtn) {
        if (isOpen) {
            sendOrderBtn.disabled = false;
            sendOrderBtn.textContent = 'Pedir por WhatsApp';
            sendOrderBtn.style.opacity = '1';
            sendOrderBtn.style.cursor = 'pointer';
            sendOrderBtn.style.filter = 'grayscale(0%)';
            
            if (heroStatus) heroStatus.innerHTML = '🔥 ¡Estamos cocinando en vivo!';
        } else {
            sendOrderBtn.disabled = true;
            sendOrderBtn.textContent = 'Local Cerrado (Abre 12:00hs)';
            sendOrderBtn.style.opacity = '0.6';
            sendOrderBtn.style.cursor = 'not-allowed';
            sendOrderBtn.style.filter = 'grayscale(100%)';
            
            if (heroStatus) heroStatus.innerHTML = '💤 Abrimos a las 12:00hs';
        }
    }
}

// --- LÓGICA MENÚ MÓVIL ---
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// --- LÓGICA CARRITO (ABRIR/CERRAR) ---
cartToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    cartDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!cartDropdown.contains(e.target) && e.target !== cartToggle) {
        cartDropdown.classList.remove('active');
    }
});

/**
 * Inicializa el carrito buscando datos en localStorage.
 */
function initCart() {
    const savedCart = localStorage.getItem('limbo_cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCart();
        } catch (error) {
            console.error("Error al cargar el carrito:", error);
            cart = [];
        }
    }
    // Verificamos el horario apenas carga la página
    checkBusinessHours();
    // Opcional: Re-verificar cada minuto por si el usuario deja la página abierta
    setInterval(checkBusinessHours, 60000);
}

function addToOrder(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    updateCart();
    cartDropdown.classList.add('active');
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartItems || !cartCount || !cartTotal) return;

    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        const itemSubtotal = item.price * item.quantity;
        total += itemSubtotal;
        count += item.quantity;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <div>
                <span style="margin-right:10px">$${itemSubtotal.toLocaleString('es-AR')}</span>
                <button onclick="removeItem('${item.name}')" aria-label="Eliminar">❌</button>
            </div>
        `;
        cartItems.appendChild(div);
    });

    cartCount.textContent = count;
    cartTotal.textContent = total.toLocaleString('es-AR');

    localStorage.setItem('limbo_cart', JSON.stringify(cart));
}

function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

// --- WHATSAPP ---
function sendWhatsAppOrder() {
    // Doble validación: Carrito vacío o local cerrado
    const now = new Date();
    const currentHour = now.getHours();
    const isOpen = currentHour >= 12 && currentHour < 23;

    if (cart.length === 0) return alert("Tu carrito está vacío.");
    if (!isOpen) return alert("Lo sentimos, el local se encuentra cerrado en este momento.");

    let message = "🍔 *Nuevo Pedido - Limbo Burgers*\n\n";
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString('es-AR')}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n*Total: $${total.toLocaleString('es-AR')}*`;
    message += `\n\n_Enviado desde el sitio web._`;

    window.open(`https://wa.me/5492615349682?text=${encodeURIComponent(message)}`, '_blank');
}

// --- FILTROS DE MENÚ ---
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        menuItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// --- EJECUCIÓN INICIAL ---
document.addEventListener('DOMContentLoaded', initCart);