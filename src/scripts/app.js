/*
 * Copyright 2025 Pralhad Nasane
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Main Application Module - Orchestrates all other modules
class GmailFiltersApp {
    constructor() {
        this.modules = {};
        this.componentsLoaded = false;
        this.init();
    }

    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    async initializeApp() {
        try {
            // Load HTML components first
            await this.loadComponents();

            // Initialize all modules after components are loaded
            this.initializeModules();

            // Make key functions globally available for backward compatibility
            this.setupGlobalFunctions();

            console.log('Gmail Filters Collection app initialized successfully');
        } catch (error) {
            console.error('Error initializing app:', error);
        }
    }

    async loadComponents() {
        const components = [
            { id: 'header-component', file: 'components/header.html' },
            { id: 'hero-component', file: 'components/hero.html' },
            { id: 'features-component', file: 'components/features.html' },
            { id: 'packages-component', file: 'components/packages.html' },
            { id: 'guide-component', file: 'components/guide.html' },
            { id: 'cta-component', file: 'components/cta.html' },
            { id: 'footer-component', file: 'components/footer.html' },
            { id: 'modal-component', file: 'components/modal.html' }
        ];

        // Load all components in parallel
        const loadPromises = components.map(component => this.loadComponent(component));
        await Promise.all(loadPromises);

        this.componentsLoaded = true;
    }

    async loadComponent({ id, file }) {
        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${file}`);
            }

            const html = await response.text();
            const element = document.getElementById(id);

            if (element) {
                element.innerHTML = html;
            } else {
                console.warn(`Component container not found: ${id}`);
            }
        } catch (error) {
            console.error(`Error loading component ${file}:`, error);
        }
    }

    initializeModules() {
        try {
            // Initialize modules in order of dependency
            this.modules.theme = new ThemeManager();
            this.modules.performance = new PerformanceManager();
            this.modules.navigation = new NavigationManager();
            this.modules.search = new SearchFilter();
            this.modules.modal = new ModalManager();
            this.modules.animations = new AnimationManager();
            this.modules.toast = new ToastModule();
            console.log('Toast module initialized:', this.modules.toast);

            // Setup cross-module communication
            this.setupModuleCommunication();

            // Setup event handlers
            this.setupEventHandlers();

        } catch (error) {
            console.error('Error initializing modules:', error);
        }
    }

    setupModuleCommunication() {
        // Allow modules to communicate with each other
        Object.keys(this.modules).forEach(moduleName => {
            const module = this.modules[moduleName];
            module.app = this; // Give each module access to the main app
            module.modules = this.modules; // Give each module access to other modules
        });
    }

    setupEventHandlers() {
        // Wait a bit longer for components to be fully rendered
        setTimeout(() => {
            console.log('Setting up event handlers...');

            // Check if all components are loaded
            console.log('Hero component loaded:', document.getElementById('hero-guide-btn'));
            console.log('Toast module available:', this.modules.toast);
            // Handle detailed guide button click (in guide component)
            const detailedGuideBtn = document.getElementById('detailed-guide-btn');
            if (detailedGuideBtn) {
                detailedGuideBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.modules.toast?.update('Guide will update soon! 📚 Stay tuned for comprehensive filter tutorials.', 5000);
                });
            }

            // Handle hero read guide button click
            const heroGuideBtn = document.getElementById('hero-guide-btn');
            if (heroGuideBtn) {
                console.log('Hero guide button found, adding event listener');
                heroGuideBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Hero guide button clicked, showing toast');
                    if (this.modules.toast) {
                        this.modules.toast.update('Guide will update soon! 📚 Stay tuned for comprehensive filter tutorials.', 5000);
                    } else {
                        console.error('Toast module not available');
                    }
                    return false;
                });
            } else {
                console.log('Hero guide button not found');
            }

            // Handle modal detailed guide buttons (delegated event for dynamic content)
            document.addEventListener('click', (e) => {
                console.log('Click detected on:', e.target);

                // Handle hero guide button with fallback
                if (e.target.id === 'hero-guide-btn' || e.target.closest('#hero-guide-btn')) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Hero guide button clicked via delegation');
                    if (this.modules.toast) {
                        this.modules.toast.update('Guide will update soon! 📚 Stay tuned for comprehensive filter tutorials.', 5000);
                    }
                    return false;
                }

                if (e.target.classList.contains('modal-guide-btn')) {
                    e.preventDefault();
                    console.log('Modal guide button clicked, showing toast');
                    this.modules.toast?.update('Guide will update soon! 📚 Stay tuned for comprehensive filter tutorials.', 5000);
                }

                // Handle footer documentation button
                if (e.target.classList.contains('footer-guide-btn')) {
                    e.preventDefault();
                    console.log('Footer guide button clicked, showing toast');
                    this.modules.toast?.update('Guide will update soon! 📚 Stay tuned for comprehensive filter tutorials.', 5000);
                }
            });
        }, 500); // Increased timeout to ensure components are loaded

        // Additional immediate event listener for hero button
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                const heroBtn = document.getElementById('hero-guide-btn');
                if (heroBtn) {
                    console.log('Found hero button, adding immediate listener');
                    heroBtn.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Hero button clicked - stopping all actions');
                        if (window.app && window.app.modules.toast) {
                            window.app.modules.toast.update('Guide will update soon! 📚 Stay tuned for comprehensive filter tutorials.', 5000);
                        } else {
                            alert('Guide will update soon! 📚 Stay tuned for comprehensive filter tutorials.');
                        }
                        return false;
                    };
                }
            }, 2000);
        });
    }

    setupGlobalFunctions() {
        // Export functions to global scope for HTML onclick handlers
        window.app = this;

        window.openQuickSetup = (packageType) => {
            this.modules.modal?.openQuickSetup(packageType);
        };

        window.closeQuickSetup = () => {
            this.modules.modal?.closeQuickSetup();
        };

        window.toggleTheme = () => {
            this.modules.theme?.toggleTheme();
        };

        window.downloadPackage = (packageId, buttonElement) => {
            this.modules.animations?.handleDownload(packageId, buttonElement);
        };

        window.getPackageById = (id) => {
            return this.modules.search?.getPackageById(id);
        };

        // Test function for toast
        window.testToast = () => {
            console.log('Testing toast:', this.modules.toast);
            this.modules.toast?.update('Test toast working! 🎉', 3000);
        };
    }

    // Utility method to get module
    getModule(moduleName) {
        return this.modules[moduleName];
    }

    // Utility method to check if app is ready
    isReady() {
        return this.componentsLoaded && Object.keys(this.modules).length > 0;
    }

    // Method to dynamically load additional modules
    async loadModule(moduleName, ModuleClass) {
        try {
            this.modules[moduleName] = new ModuleClass();
            this.modules[moduleName].app = this;
            this.modules[moduleName].modules = this.modules;
            console.log(`Module ${moduleName} loaded successfully`);
        } catch (error) {
            console.error(`Error loading module ${moduleName}:`, error);
        }
    }

    // Cleanup method
    destroy() {
        Object.values(this.modules).forEach(module => {
            if (typeof module.cleanup === 'function') {
                module.cleanup();
            }
        });
        this.modules = {};
        console.log('App destroyed and cleaned up');
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.gmailFiltersApp = new GmailFiltersApp();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GmailFiltersApp;
}