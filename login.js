// Login Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Role selection
    const roleButtons = document.querySelectorAll('.role-btn');
    roleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            roleButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Login form
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLogin);

    // Video debugging
    const video = document.getElementById('backgroundVideo');
    if (video) {
        video.addEventListener('loadstart', () => console.log('Video loading started'));
        video.addEventListener('canplay', () => console.log('Video can play'));
        video.addEventListener('error', (e) => console.log('Video error:', e));
        video.addEventListener('loadeddata', () => console.log('Video data loaded'));
        
        // Try to play the video
        video.play().catch(e => console.log('Video play failed:', e));
    }
});

// Login Handler
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const selectedRole = document.querySelector('.role-btn.active').dataset.role;
    
    // Validate email domain
    if (!email.includes('@isb.nu.edu.pk') && !email.includes('@nu.edu.pk')) {
        alert('Please enter a valid university email (@isb.nu.edu.pk or @nu.edu.pk)');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Store user data in localStorage
    const userData = {
        email: email,
        role: selectedRole,
        name: email.split('@')[0].replace('.', ' ').toUpperCase()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(userData));
    
    // Redirect to cafe selection
    window.location.href = 'cafe-selection.html';
}