// --------------------
// BURGER MENU
// --------------------
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// --------------------
// MENU FILTRABLE
// --------------------
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

// --------------------
// CARRITO DE COMPRAS
// --------------------
let cart = [];

function addToOrder(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <p>${item.name} x ${item.quantity} - $${item.price * item.quantity}</p>
            <button onclick="removeItem('${item.name}')">❌</button>
        `;
        cartItems.appendChild(div);
    });

    cartCount.textContent = count;
    cartTotal.textContent = total;
}

function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

// --------------------
// ENVIAR PEDIDO POR WHATSAPP
// --------------------
function sendWhatsAppOrder() {
    if(cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let message = "¡Hola! Quiero hacer el siguiente pedido:\n\n";
    cart.forEach(item => {
        message += `${item.name} x${item.quantity} - $${item.price * item.quantity}\n`;
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `\nTotal: $${total}`;

    const whatsappURL = `https://wa.me/5492615349682?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
