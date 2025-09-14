// Modal Management Module
class ModalManager {
    constructor() {
        this.modalOverlay = null;
        this.init();
    }

    init() {
        this.modalOverlay = document.getElementById('modal-overlay');
        this.setupModalEvents();
    }

    setupModalEvents() {
        if (!this.modalOverlay) return;

        // Close modal when clicking overlay
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.closeQuickSetup();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalOverlay.classList.contains('active')) {
                this.closeQuickSetup();
            }
        });
    }

    openQuickSetup(packageId) {
        const pkg = window.getPackageById(packageId);
        if (!pkg || !this.modalOverlay) return;

        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');

        if (modalTitle) {
            modalTitle.textContent = pkg.setupGuide.title;
        }

        if (modalContent) {
            modalContent.innerHTML = `
                <ol class="setup-steps">
                    ${pkg.setupGuide.steps.map(step => `
                        <li class="setup-step">
                            <h4>${step.title}</h4>
                            <p>${step.description}</p>
                            ${step.code ? `<div class="setup-code">${step.code}</div>` : ''}
                        </li>
                    `).join('')}
                </ol>
                <div class="setup-cta">
                    <h3>Ready to get started?</h3>
                    <p>Download the ${pkg.title} filter package and follow the steps above.</p>
                    <div class="setup-actions">
                        <button class="btn btn-primary download-btn" onclick="downloadPackage('${pkg.id}', this)">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                            </svg>
                            Download ${pkg.title}
                        </button>
                        <a href="#" class="btn btn-secondary modal-guide-btn">
                            Detailed Guide
                        </a>
                    </div>
                </div>
            `;
        }

        this.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    closeQuickSetup() {
        if (this.modalOverlay) {
            this.modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
}

// Make globally available for backward compatibility
window.openQuickSetup = function (packageId) {
    if (window.app && window.app.modules.modal) {
        window.app.modules.modal.openQuickSetup(packageId);
    }
};

window.closeQuickSetup = function () {
    if (window.app && window.app.modules.modal) {
        window.app.modules.modal.closeQuickSetup();
    }
};