// Theme Management Module
class ThemeManager {
    constructor() {
        this.currentTheme = 'light'; // Always light theme
        this.themes = ['light']; // Only light theme available
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.setupThemeToggle();
        this.createToastContainer();
    }

    getStoredTheme() {
        // Always return light theme
        return 'light';
    }

    setStoredTheme(theme) {
        // Always store light theme
        localStorage.setItem('theme', 'light');
    }

    setTheme(theme) {
        // Always set to light theme
        this.currentTheme = 'light';
        document.documentElement.setAttribute('data-theme', 'light');
        this.setStoredTheme('light');

        // Update theme toggle button state
        this.updateThemeToggleButton();
    }

    showComingSoonToast() {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'theme-toast';
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">🎨</span>
                <span class="toast-message">More themes coming soon!</span>
            </div>
        `;

        // Add to toast container
        const container = document.querySelector('.toast-container');
        if (container) {
            container.appendChild(toast);

            // Animate in
            setTimeout(() => toast.classList.add('show'), 10);

            // Remove after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 300);
            }, 3000);
        }
    }

    createToastContainer() {
        // Create toast container if it doesn't exist
        if (!document.querySelector('.toast-container')) {
            const container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
    }

    toggleTheme() {
        // Show coming soon toast instead of switching themes
        this.showComingSoonToast();
    }

    setupThemeToggle() {
        // Wait a bit for components to load, then set up the theme toggle
        const setupToggle = () => {
            const themeToggle = document.querySelector('.theme-toggle');
            if (themeToggle) {
                // Remove any existing event listeners
                themeToggle.removeEventListener('click', this.toggleTheme);
                // Add new event listener for showing toast
                themeToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showComingSoonToast();
                });
                console.log('Theme toggle set up successfully');
            } else {
                // If toggle not found, try again after a short delay
                setTimeout(setupToggle, 100);
            }
        };

        // Initial setup
        setupToggle();
    }

    updateThemeToggleButton() {
        const sunIcon = document.querySelector('.theme-icon.sun');
        const moonIcon = document.querySelector('.theme-icon.moon');

        if (sunIcon && moonIcon) {
            // Always show sun icon for light theme
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            console.log('Theme icons updated for light theme');
        } else {
            // If icons not found, try again after a short delay
            setTimeout(() => this.updateThemeToggleButton(), 100);
        }
    } getCurrentTheme() {
        return this.currentTheme;
    }
}

// Make globally available for backward compatibility
window.toggleTheme = function () {
    if (window.app && window.app.modules.theme) {
        window.app.modules.theme.showComingSoonToast();
    }
};