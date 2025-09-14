// Toast Notification Module
class ToastModule {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        this.createContainer();
    }

    createContainer() {
        // Check if container already exists
        if (document.querySelector('.toast-container')) {
            this.container = document.querySelector('.toast-container');
            return;
        }

        // Create toast container
        this.container = document.createElement('div');
        this.container.className = 'toast-container';
        document.body.appendChild(this.container);
    }

    show(message, type = 'info', duration = 4000) {
        const toast = this.createToast(message, type);
        this.container.appendChild(toast);

        // Trigger animation
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // Auto remove
        setTimeout(() => {
            this.remove(toast);
        }, duration);

        return toast;
    }

    createToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = 'theme-toast';

        const iconMap = {
            info: '📝',
            success: '✅',
            warning: '⚠️',
            error: '❌',
            update: '🔄'
        };

        const icon = iconMap[type] || iconMap.info;

        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-icon">${icon}</div>
                <div class="toast-message">${message}</div>
            </div>
        `;

        // Add click to dismiss
        toast.addEventListener('click', () => {
            this.remove(toast);
        });

        return toast;
    }

    remove(toast) {
        if (!toast || !toast.parentNode) return;

        toast.classList.remove('show');

        // Wait for animation to complete before removing from DOM
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }

    // Convenience methods for different types
    info(message, duration = 4000) {
        return this.show(message, 'info', duration);
    }

    success(message, duration = 4000) {
        return this.show(message, 'success', duration);
    }

    warning(message, duration = 4000) {
        return this.show(message, 'warning', duration);
    }

    error(message, duration = 4000) {
        return this.show(message, 'error', duration);
    }

    update(message, duration = 4000) {
        return this.show(message, 'update', duration);
    }
}

// Export for use in other modules
window.ToastModule = ToastModule;