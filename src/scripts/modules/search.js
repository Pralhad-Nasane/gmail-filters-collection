// Search and Filter Module
class SearchFilter {
    constructor() {
        this.packages = window.packageData || [];
        this.filteredPackages = [...this.packages];
        this.currentFilter = 'all';
        this.currentSearch = '';
        this.init();
    }

    init() {
        this.renderPackages();
        this.setupSearchInput();
        this.setupFilterTags();
    }

    setupSearchInput() {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentSearch = e.target.value.toLowerCase();
                this.filterPackages();
            });
        }
    }

    setupFilterTags() {
        const filterTags = document.querySelectorAll('.filter-tag');
        filterTags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                // Remove active class from all tags
                filterTags.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tag
                e.target.classList.add('active');

                this.currentFilter = e.target.getAttribute('data-filter');
                this.filterPackages();
            });
        });
    }

    filterPackages() {
        this.filteredPackages = this.packages.filter(pkg => {
            const matchesSearch = this.currentSearch === '' ||
                pkg.title.toLowerCase().includes(this.currentSearch) ||
                pkg.description.toLowerCase().includes(this.currentSearch) ||
                pkg.features.some(feature => feature.toLowerCase().includes(this.currentSearch));

            const matchesFilter = this.currentFilter === 'all' ||
                pkg.category === this.currentFilter;

            return matchesSearch && matchesFilter;
        });

        this.renderPackages();
    }

    renderPackages() {
        const packagesGrid = document.getElementById('packages-grid');
        if (!packagesGrid) return;

        packagesGrid.innerHTML = '';

        if (this.filteredPackages.length === 0) {
            packagesGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <h3>No packages found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }

        this.filteredPackages.forEach(pkg => {
            const packageCard = this.createPackageCard(pkg);
            packagesGrid.appendChild(packageCard);
        });
    }

    createPackageCard(pkg) {
        const card = document.createElement('div');
        card.className = `package-card ${pkg.popular ? 'popular' : ''}`;

        card.innerHTML = `
            ${pkg.popular ? '<div class="package-badge">Popular</div>' : ''}
            <div class="package-header">
                <div class="package-icon">${pkg.icon}</div>
                <h3 class="package-title">${pkg.title}</h3>
                <p class="package-count">${pkg.count}</p>
            </div>
            <div class="package-content">
                <p class="package-description">${pkg.description}</p>
                <ul class="package-features">
                    ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="package-stats">
                    <div class="package-stat">
                        <span class="package-stat-number">${pkg.filters}</span>
                        <span class="package-stat-label">Filters</span>
                    </div>
                    <div class="package-stat">
                        <span class="package-stat-number">2min</span>
                        <span class="package-stat-label">Setup</span>
                    </div>
                    <div class="package-stat">
                        <span class="package-stat-number">XML</span>
                        <span class="package-stat-label">Format</span>
                    </div>
                </div>
                <div class="package-actions">
                    <button class="btn btn-primary download-btn" onclick="downloadPackage('${pkg.id}', this)">
                        <svg class="download-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                        </svg>
                        Download
                    </button>
                    <button class="btn btn-secondary" onclick="openQuickSetup('${pkg.id}')" style="margin-top: 0.5rem; font-size: 0.75rem;">
                        Quick Setup Guide
                    </button>
                </div>
            </div>
        `;

        return card;
    }

    getPackageById(id) {
        return this.packages.find(pkg => pkg.id === id);
    }
}

// Global download function
window.downloadPackage = function (packageId, buttonElement) {
    if (window.app && window.app.modules.animations) {
        window.app.modules.animations.handleDownload(packageId, buttonElement);
    }
};

// Global function to get package data
window.getPackageById = function (id) {
    if (window.app && window.app.modules.search) {
        return window.app.modules.search.getPackageById(id);
    }
    return null;
};