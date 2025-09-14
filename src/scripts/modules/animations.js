// Animation Management Module
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupIntersectionObserver();
    }

    setupScrollAnimations() {
        // Add fade-in animation for elements as they come into view
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe cards and sections
        document.querySelectorAll('.feature-card, .package-card, .stat').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // CSS for animation
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    setupIntersectionObserver() {
        // Stagger animation for package cards
        const packageCards = document.querySelectorAll('.package-card');
        if (packageCards.length > 0) {
            const staggerObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate-in');
                        }, index * 100); // Stagger by 100ms
                    }
                });
            }, { threshold: 0.1 });

            packageCards.forEach(card => {
                staggerObserver.observe(card);
            });
        }
    }

    handleDownload(packageId, buttonElement) {
        const pkg = window.getPackageById(packageId);
        if (!pkg || !buttonElement) return;

        // Add downloading state
        buttonElement.classList.add('downloading');
        buttonElement.disabled = true;

        const originalText = buttonElement.innerHTML;
        buttonElement.innerHTML = `
            <svg class="download-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Downloading...
        `;

        // Simulate download process
        setTimeout(() => {
            // Create and trigger download
            const link = document.createElement('a');
            link.href = pkg.downloadUrl;
            link.download = `${pkg.id}_filters.xml`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Show completion state
            buttonElement.classList.remove('downloading');
            buttonElement.classList.add('completed');
            buttonElement.innerHTML = `
                <svg class="download-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
                Downloaded!
            `;

            // Reset button after 3 seconds
            setTimeout(() => {
                buttonElement.classList.remove('completed');
                buttonElement.disabled = false;
                buttonElement.innerHTML = originalText;
            }, 3000);

        }, 1500); // 1.5 second download simulation
    }

    // Smooth reveal animation for sections
    revealSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

            // Add emphasis animation
            section.style.transform = 'scale(1.02)';
            section.style.transition = 'transform 0.3s ease';

            setTimeout(() => {
                section.style.transform = 'scale(1)';
            }, 300);
        }
    }

    // Add loading animation for dynamic content
    showLoadingState(element) {
        if (!element) return;

        element.style.opacity = '0.6';
        element.style.pointerEvents = 'none';

        // Add loading spinner
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
            </svg>
        `;

        const spinnerStyle = document.createElement('style');
        spinnerStyle.textContent = `
            .loading-spinner {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 10;
            }
            .loading-spinner svg {
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(spinnerStyle);

        element.style.position = 'relative';
        element.appendChild(spinner);

        return spinner;
    }

    hideLoadingState(element, spinner) {
        if (!element) return;

        element.style.opacity = '';
        element.style.pointerEvents = '';

        if (spinner && spinner.parentNode) {
            spinner.parentNode.removeChild(spinner);
        }
    }
}