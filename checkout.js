// Checkout Page JavaScript
let currentUser = null;

// Payment Methods
const paymentMethods = {
    red: [
        { name: 'SadaPay', account: '0300-1234567', icon: 'fas fa-mobile-alt' },
        { name: 'JazzCash', account: '0300-7654321', icon: 'fas fa-mobile-alt' },
        { name: 'EasyPaisa', account: '0300-9876543', icon: 'fas fa-mobile-alt' }
    ],
    blue: [
        { name: 'SadaPay', account: '0300-1111111', icon: 'fas fa-mobile-alt' },
        { name: 'EasyPaisa', account: '0300-2222222', icon: 'fas fa-mobile-alt' }
    ],
    dough: [
        { name: 'JazzCash', account: '0300-3333333', icon: 'fas fa-mobile-alt' },
        { name: 'Bank Transfer', account: 'Any Bank Card/Digital Wallet', icon: 'fas fa-credit-card' }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const userData = localStorage.getItem('currentUser');
    if (!userData) {
        window.location.href = 'index.html';
        return;
    }
    
    currentUser = JSON.parse(userData);
    
    // Setup event listeners
    setupEventListeners();
    
    // Load cart
    loadCart();
});

function setupEventListeners() {
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', function() {
        window.location.href = 'checkout.html';
    });

    // Payment options
    const paymentButtons = document.querySelectorAll('.payment-btn');
    paymentButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const paymentType = this.dataset.payment;
            handlePaymentSelection(paymentType);
        });
    });

    // New order button
    const newOrderBtn = document.getElementById('newOrderBtn');
    if (newOrderBtn) {
        newOrderBtn.addEventListener('click', function() {
            localStorage.removeItem('cart');
            window.location.href = 'cafe-selection.html';
        });
    }

    // Confirm & Generate Summaries
    const confirmAllBtn = document.getElementById('confirmAllBtn');
    if (confirmAllBtn) {
        confirmAllBtn.addEventListener('click', function() {
            generateSummariesForAllCafes();
        });
    }

    // Modal close buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Click outside modal to close
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });
    // Logout button (present on checkout page)
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        });
    }
}

function generateSummariesForAllCafes() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cafes = [...new Set(cart.map(item => item.cafe))];
    if (cafes.length === 0) {
        showNotification('Your cart is empty.');
        return;
    }

    // Clear previous content
    const orderDetails = document.getElementById('orderDetails');
    orderDetails.innerHTML = '';

    cafes.forEach(cafe => {
        // Default to cash (summary should still show). Users can still pick wallets separately if needed.
        generateOrderConfirmation(cafe, { name: 'Cash or Digital Transfer' }, null);
    });

    // Open modal
    const orderModal = document.getElementById('orderModal');
    orderModal.classList.add('active');
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
        return;
    }
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-info">
                <h4>${item.name}</h4>
                <p>${item.variation} - ${item.cafe.charAt(0).toUpperCase() + item.cafe.slice(1)} Cafe</p>
            </div>
            <div class="item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
                <div class="item-price">Rs. ${item.price * item.quantity}</div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    updateCartSummary();
}

function updateQuantity(itemId, change) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const item = cart.find(item => item.id === itemId);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }
    }
}

function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; // No tax
    
    document.getElementById('subtotal').textContent = `Rs. ${subtotal}`;
    document.getElementById('total').textContent = `Rs. ${total.toFixed(2)}`;
}

function handlePaymentSelection(paymentType) {
    if (paymentType === 'cash') {
        processCashPayment();
    } else {
        showOnlinePaymentOptions();
    }
}

function showOnlinePaymentOptions() {
    const onlinePaymentOptions = document.getElementById('onlinePaymentOptions');
    const walletOptions = document.getElementById('walletOptions');
    
    onlinePaymentOptions.classList.remove('hidden');
    
    // Get unique cafes from cart
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cafes = [...new Set(cart.map(item => item.cafe))];
    
    walletOptions.innerHTML = '';
    
    cafes.forEach(cafe => {
        const cafeDiv = document.createElement('div');
        cafeDiv.innerHTML = `<h4>${cafe.charAt(0).toUpperCase() + cafe.slice(1)} Cafe Payment</h4>`;
        
        const methods = paymentMethods[cafe];
        methods.forEach(method => {
            const methodDiv = document.createElement('div');
            methodDiv.className = 'wallet-option';
            methodDiv.innerHTML = `
                <i class="${method.icon}"></i>
                <h5>${method.name}</h5>
                <p>Account: ${method.account}</p>
            `;
            methodDiv.addEventListener('click', () => processOnlinePayment(cafe, method));
            cafeDiv.appendChild(methodDiv);
        });
        
        walletOptions.appendChild(cafeDiv);
    });
}

function processOnlinePayment(cafe, method) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cafeItems = cart.filter(item => item.cafe === cafe);
    const total = cafeItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const finalTotal = total;
    
    showNotification(`Please send Rs. ${finalTotal.toFixed(2)} to ${method.account} via ${method.name} for ${cafe.charAt(0).toUpperCase() + cafe.slice(1)} Cafe order.`);
    
    // Generate order confirmation
    generateOrderConfirmation(cafe, method, finalTotal);
}

function processCashPayment() {
    // Generate order confirmation for cash payment
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cafes = [...new Set(cart.map(item => item.cafe))];
    cafes.forEach(cafe => {
        generateOrderConfirmation(cafe, { name: 'Cash Payment' }, null);
    });
}

function generateOrderConfirmation(cafe, paymentMethod, amount) {
    const orderNumber = generateOrderNumber(cafe);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cafeItems = cart.filter(item => item.cafe === cafe);
    const subtotal = cafeItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = amount || subtotal; // No tax
    
    const orderDetails = document.getElementById('orderDetails');
    const notesInput = document.getElementById('orderNotes');
    const extraNotes = notesInput ? notesInput.value.trim() : '';
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order-detail';
    orderDiv.innerHTML = `
        <h3>${cafe.charAt(0).toUpperCase() + cafe.slice(1)} Cafe Order</h3>
        <p><strong>Order Number:</strong> <span class="order-number">${orderNumber}</span></p>
        <p><strong>Payment Method:</strong> ${paymentMethod.name}</p>
        ${amount ? `<p><strong>Amount to Pay:</strong> Rs. ${amount.toFixed(2)}</p>` : ''}
        <p><strong>Items:</strong></p>
        <ul>
            ${cafeItems.map(item => `<li>${item.name}${item.variation ? ` (${item.variation})` : ''} x${item.quantity} - Rs. ${item.price * item.quantity}</li>`).join('')}
        </ul>
        <p><strong>Subtotal:</strong> Rs. ${subtotal}</p>
        <p><strong>Total:</strong> Rs. ${total.toFixed(2)}</p>
        <p><strong>Pickup Location:</strong> ${cafe.charAt(0).toUpperCase() + cafe.slice(1)} Cafe Counter</p>
        ${extraNotes ? `<p><strong>Notes:</strong> ${extraNotes}</p>` : ''}
        <div style="margin-top: 0.75rem; background:#fff3cd; color:#8a6d3b; padding:0.75rem; border-radius:8px; border-left:4px solid #f0ad4e;">
            <p style="margin:0; font-weight:600;">Important:</p>
            <p style="margin:0; font-size:0.95rem;">Please take a screenshot of this order summary and your transfer receipt so you don’t forget your order number and to avoid any inconvenience at the counter.</p>
        </div>
        <p style="margin-top: 0.5rem; font-weight: 600; color: #8e44ad;">Thank you for your order! 😊</p>
    `;
    
    orderDetails.appendChild(orderDiv);
    
    // Remove items from cart
    const remainingCart = cart.filter(item => item.cafe !== cafe);
    localStorage.setItem('cart', JSON.stringify(remainingCart));
    
    // Show order confirmation modal
    const orderModal = document.getElementById('orderModal');
    orderModal.classList.add('active');
}

function generateOrderNumber(cafe) {
    const cafeLetter = cafe === 'red' ? 'r' : cafe === 'blue' ? 'b' : 'd';
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 900 + 100).toString(); // 3-digit unique
    return `${cafeLetter}-${year}-${random}`;
}

function showNotification(message) {
    const modal = document.getElementById('notificationModal');
    const text = document.getElementById('notificationText');
    
    text.textContent = message;
    modal.classList.add('active');
    
    setTimeout(() => {
        modal.classList.remove('active');
    }, 3000);
}

function closeModal(modal) {
    modal.classList.remove('active');
}

function goBack() {
    window.location.href = 'cafe-selection.html';
}
