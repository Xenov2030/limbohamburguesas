/**
 * LIMBO BURGERS - JS Final (Versión 4.0 con Persistencia)
 */

// --- ELEMENTOS ---
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const cartToggle = document.getElementById('cartToggle');
const cartDropdown = document.getElementById('cartDropdown');

// --- LÓGICA MENÚ MÓVIL ---
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// --- LÓGICA CARRITO (ABRIR/CERRAR) ---
cartToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic cierre el carrito inmediatamente
    cartDropdown.classList.toggle('active');
});

// Cerrar carrito al hacer clic fuera del panel
document.addEventListener('click', (e) => {
    if (!cartDropdown.contains(e.target) && e.target !== cartToggle) {
        cartDropdown.classList.remove('active');
    }
});

// --- GESTIÓN DEL PEDIDO ---
let cart = [];

/**
 * Inicializa el carrito buscando datos en localStorage.
 * Se ejecuta al cargar la página.
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
}

function addToOrder(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    updateCart();
    
    // Feedback visual: abrir carrito al agregar producto
    cartDropdown.classList.add('active');
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

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

    // PERSISTENCIA: Guardar estado actual en localStorage
    localStorage.setItem('limbo_cart', JSON.stringify(cart));
}

function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

// --- WHATSAPP ---
function sendWhatsAppOrder() {
    if (cart.length === 0) return alert("Tu carrito está vacío.");

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
// Llamamos a initCart cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initCart);