// Cafe Selection Page JavaScript
let currentUser = null;

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const userData = localStorage.getItem('currentUser');
    if (!userData) {
        window.location.href = 'index.html';
        return;
    }
    
    currentUser = JSON.parse(userData);
    updateUserInfo();
    
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', function() {
        window.location.href = 'checkout.html';
    });

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', handleLogout);
    
    // Update cart count
    updateCartCount();
});

function updateUserInfo() {
    const userName = document.getElementById('userName');
    userName.textContent = `Welcome, ${currentUser.name}`;
}

function selectCafe(cafe) {
    // Store current cafe in localStorage
    localStorage.setItem('currentCafe', cafe);
    
    // Redirect to appropriate menu page
    if (cafe === 'red') {
        window.location.href = 'cafe-red-menu.html';
    } else if (cafe === 'blue') {
        window.location.href = 'cafe-blue-menu.html';
    } else if (cafe === 'dough') {
        window.location.href = 'dough-menu.html';
    }
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}
