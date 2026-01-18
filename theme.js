// Theme Management Script

(function() {
    'use strict';

    // Get theme from localStorage or default to 'light'
    function getTheme() {
        return localStorage.getItem('theme') || 'light';
    }

    // Set theme in localStorage and on document
    function setTheme(theme) {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        updateThemeToggleIcon(theme);
    }

    // Update the theme toggle icon based on current theme
    function updateThemeToggleIcon(theme) {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fas fa-sun';
                    toggleBtn.title = 'Switch to Light Mode';
                } 
                else {
                    icon.className = 'fas fa-moon';
                    toggleBtn.title = 'Switch to Dark Mode';
                }
            }
        }
    }

    // Toggle between light and dark themes
    function toggleTheme() {
        const currentTheme = getTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Initialize theme on page load
    function initTheme() {
        const theme = getTheme();
        setTheme(theme);
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } 
    else {
        initTheme();
    }

    // Add event listener to theme toggle button when it's available
    function setupThemeToggle() {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }
    }

    // Setup toggle button when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupThemeToggle);
    } else {
        setupThemeToggle();
    }

    // Also check periodically in case button is added dynamically
    setTimeout(setupThemeToggle, 100);
})();
