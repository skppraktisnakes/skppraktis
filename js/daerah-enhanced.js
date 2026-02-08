// Enhanced JavaScript untuk Halaman Daerah MPP Digital
// Versi: 2.0 - Optimized for Performance

class DaerahMPP {
    constructor() {
        this.init();
    }

    init() {
        this.setupData();
        this.setupEventListeners();
        this.initAnimations();
        this.lazyLoad();
    }

    setupData() {
        this.provinces = {
            "ACEH": [
                "ACEH TENGGARA", "ACEH BESAR", "PIDIE", "ACEH UTARA", 
                "ACEH BARAT DAYA", "KOTA BANDA ACEH", "KOTA SABANG"
            ],
            "BALI": [
                "JEMBRANA", "BADUNG", "GIANYAR", "BANGLI", "KARANGASEM"
            ],
            "BANTEN": [
                "PANDEGLANG", "LEBAK", "KOTA TANGERANG"
            ],
            "BENGKULU": [
                "BENGKULU SELATAN", "BENGKULU UTARA", "SELUMA", "KOTA BENGKULU"
            ],
            "DAERAH ISTIMEWA YOGYAKARTA": [
                "BANTUL", "GUNUNGKIDUL", "SLEMAN", "KOTA YOGYAKARTA"
            ],
            "GORONTALO": ["GORONTALO"],
            "JAMBI": [
                "SAROLANGUN", "MUARO JAMBI", "TANJUNG JABUNG BARAT", 
                "TANJUNG JABUNG TIMUR", "TEBO", "KOTA JAMBI", "KOTA SUNGAI PENUH"
            ],
            "JAWA BARAT": [
                "CIANJUR", "BANDUNG", "CIREBON", "MAJALENGKA", "SUMEDANG", 
                "PURWAKARTA", "PANGANDARAN", "KOTA SUKABUMI", "KOTA BANDUNG", "KOTA BANJAR"
            ],
            "JAWA TENGAH": [
                "BANYUMAS", "PURBALINGGA", "BANJARNEGARA", "KEBUMEN", "PURWOREJO", 
                "BOYOLALI", "WONOGIRI", "SRAGEN", "GROBOGAN", "BLORA", "KUDUS", 
                "DEMAK", "SEMARANG", "TEMANGGUNG", "BATANG", "PEKALONGAN", 
                "PEMALANG", "TEGAL", "BREBES", "KOTA MAGELANG", "KOTA SURAKARTA", 
                "KOTA SALATIGA", "KOTA SEMARANG", "KOTA TEGAL"
            ],
            "JAWA TIMUR": [
                "PACITAN", "PONOROGO", "TULUNGAGUNG", "MALANG", "LUMAJANG", 
                "JEMBER", "PROBOLINGGO", "PASURUAN", "NGANJUK", "MADIUN", 
                "MAGETAN", "BOJONEGORO", "TUBAN", "LAMONGAN", "GRESIK", 
                "BANGKALAN", "SAMPANG", "PAMEKASAN", "SUMENEP", "KOTA BLITAR", 
                "KOTA PROBOLINGGO", "KOTA PASURUAN", "KOTA MADIUN", "KOTA SURABAYA", "KOTA BATU"
            ],
            "KALIMANTAN BARAT": [
                "MEMPAWAH", "SANGGAU", "SEKADAU", "KOTA SINGKAWANG"
            ],
            "KALIMANTAN SELATAN": [
                "BANJAR", "BARITO KUALA", "TAPIN", "HULU SUNGAI SELATAN", 
                "HULU SUNGAI TENGAH", "HULU SUNGAI UTARA", "TABALONG", "BALANGAN", "KOTA BANJARBARU"
            ],
            "KALIMANTAN TENGAH": [
                "KOTAWARINGIN BARAT", "KOTAWARINGIN TIMUR", "KAPUAS", 
                "BARITO UTARA", "SUKAMARA", "KOTA PALANGKARAYA"
            ],
            "KALIMANTAN TIMUR": [
                "KUTAI KARTANEGARA", "KUTAI TIMUR", "KOTA BALIKPAPAN", 
                "KOTA SAMARINDA", "KOTA BONTANG"
            ],
            "KALIMANTAN UTARA": ["KOTA TARAKAN"],
            "KEPULAUAN BANGKA BELITUNG": [
                "BANGKA", "BELITUNG", "BANGKA BARAT", "BELITUNG TIMUR"
            ],
            "KEPULAUAN RIAU": [
                "BINTAN", "NATUNA", "KEPULAUAN ANAMBAS", "KOTA TANJUNG PINANG"
            ],
            "LAMPUNG": [
                "LAMPUNG UTARA", "LAMPUNG BARAT", "TULANG BAWANG", "TANGGAMUS", 
                "WAY KANAN", "PRINGSEWU", "PESISIR BARAT", "KOTA BANDAR LAMPUNG", "KOTA METRO"
            ],
            "MALUKU UTARA": ["HALMAHERA BARAT"],
            "NUSA TENGGARA BARAT": [
                "DOMPU", "SUMBAWA BARAT", "KOTA MATARAM"
            ],
            "NUSA TENGGARA TIMUR": ["NAGEKEO"],
            "PAPUA": [
                "KEPULAUAN YAPEN", "BIAK NUMFOR", "KOTA JAYAPURA"
            ],
            "PAPUA BARAT": ["MANOKWARI"],
            "RIAU": [
                "INDRAGIRI HILIR", "PELALAWAN", "KOTA PEKANBARU"
            ],
            "SULAWESI BARAT": ["POLEWALI MANDAR"],
            "SULAWESI SELATAN": [
                "BANTAENG", "GOWA", "BONE", "BARRU", "SOPPENG", "LUWU", 
                "TORAJA UTARA", "KOTA PARE PARE", "KOTA PALOPO"
            ],
            "SULAWESI TENGAH": [
                "BANGGAI", "POSO", "TOLI TOLI", "MOROWALI", "BANGGAI KEPULAUAN", 
                "TOJO UNA UNA", "BANGGAI LAUT", "MOROWALI UTARA", "KOTA PALU"
            ],
            "SULAWESI TENGGARA": [
                "KOLAKA", "KONAWE", "BUTON", "KONAWE SELATAN", "BOMBANA", 
                "KOLAKA UTARA", "KOLAKA TIMUR", "KOTA KENDARI", "KOTA BAU BAU"
            ],
            "SULAWESI UTARA": [
                "MINAHASA UTARA", "BOLAANG MONGONDOW SELATAN", "KOTA TOMOHON"
            ],
            "SUMATERA BARAT": [
                "SOLOK", "PADANG PARIAMAN", "DHARMASRAYA", "KOTA SAWAHLUNTO", 
                "KOTA BUKITTINGGI", "KOTA PAYAKUMBUH"
            ],
            "SUMATERA SELATAN": [
                "MUARA ENIM", "MUSI RAWAS", "MUSI BANYUASIN", "OGAN ILIR", 
                "PENUKAL ABAB LEMATANG ILIR", "MUSI RAWAS UTARA"
            ],
            "SUMATERA UTARA": [
                "PAKPAK BHARAT", "KOTA TEBING TINGGI"
            ]
        };

        this.totalKabupaten = Object.values(this.provinces).reduce((sum, arr) => sum + arr.length, 0);
        this.totalProvinsi = Object.keys(this.provinces).length;
    }

    setupEventListeners() {
        // Search input
        const searchInput = document.getElementById('provinceSearch');
        if (searchInput) {
            searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
        }

        // Province cards
        document.addEventListener('click', (e) => {
            const provinceCard = e.target.closest('.map-province-card');
            if (provinceCard) {
                const provinceName = provinceCard.dataset.province;
                this.selectProvince(provinceName);
            }
        });

        // Initialize province cards
        this.renderProvinceCards();
        this.renderKabupatenList();
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const provinceCards = document.querySelectorAll('.map-province-card');
        let visibleCount = 0;

        provinceCards.forEach(card => {
            const provinceName = card.dataset.province.toLowerCase();
            const kabupatenCount = card.dataset.count;
            
            if (provinceName.includes(searchTerm)) {
                card.style.display = 'block';
                visibleCount++;
                this.animateCardIn(card);
            } else {
                card.style.display = 'none';
            }
        });

        this.updateResultsCount(visibleCount);
    }

    animateCardIn(card) {
        card.classList.remove('animate-in');
        void card.offsetWidth; // Trigger reflow
        card.classList.add('animate-in');
    }

    updateResultsCount(count) {
        const resultsElement = document.querySelector('.filter-results');
        if (resultsElement) {
            resultsElement.textContent = `Menampilkan ${count} dari ${this.totalProvinsi} provinsi`;
        }
    }

    selectProvince(provinceName) {
        // Update active state
        document.querySelectorAll('.map-province-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const selectedCard = document.querySelector(`[data-province="${provinceName}"]`);
        if (selectedCard) {
            selectedCard.classList.add('active');
            selectedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Filter kabupaten list
        this.filterKabupatenByProvince(provinceName);
        
        // Update URL hash
        history.pushState(null, '', `#${provinceName.toLowerCase().replace(/\s+/g, '-')}`);
    }

    filterKabupatenByProvince(provinceName) {
        const kabupatenList = this.provinces[provinceName] || [];
        const kabupatenGrid = document.querySelector('.kabupaten-grid');
        
        if (!kabupatenGrid) return;

        // Clear existing cards
        kabupatenGrid.innerHTML = '';

        // Add new cards with animation
        kabupatenList.forEach((kabupaten, index) => {
            const card = this.createKabupatenCard(kabupaten, provinceName, index);
            kabupatenGrid.appendChild(card);
            
            // Stagger animation
            setTimeout(() => {
                card.classList.add('animate-in');
            }, index * 50);
        });

        // Update counter
        this.updateKabupatenCounter(kabupatenList.length);
    }

    createKabupatenCard(kabupatenName, provinceName, index) {
        const card = document.createElement('div');
        card.className = 'kabupaten-card lazy-load';
        card.dataset.index = index;
        
        const iconClass = this.getRandomIcon();
        
        card.innerHTML = `
            <div class="kabupaten-icon">
                <i class="fas ${iconClass}"></i>
            </div>
            <h3 class="kabupaten-name">${kabupatenName}</h3>
            <p class="kabupaten-province">${provinceName}</p>
            <div class="kabupaten-status">
                <span class="status-dot"></span>
                TERINTEGRASI 100%
            </div>
        `;

        return card;
    }

    getRandomIcon() {
        const icons = [
            'fa-map-marker-alt',
            'fa-hospital',
            'fa-clinic-medical',
            'fa-user-md',
            'fa-stethoscope',
            'fa-heartbeat',
            'fa-notes-medical',
            'fa-prescription-bottle-alt',
            'fa-ambulance',
            'fa-pills'
        ];
        return icons[Math.floor(Math.random() * icons.length)];
    }

    updateKabupatenCounter(count) {
        const counterElement = document.querySelector('.floating-counter span');
        if (counterElement) {
            counterElement.textContent = count;
        }
    }

    renderProvinceCards() {
        const mapGrid = document.querySelector('.map-grid');
        if (!mapGrid) return;

        Object.entries(this.provinces).forEach(([province, kabupatenList], index) => {
            const card = document.createElement('div');
            card.className = 'map-province-card';
            card.dataset.province = province;
            card.dataset.count = kabupatenList.length;
            
            card.innerHTML = `
                <div class="province-name">${province}</div>
                <div class="province-count">${kabupatenList.length} Kabupaten/Kota</div>
            `;

            // Stagger animation
            setTimeout(() => {
                card.classList.add('animate-in');
            }, index * 30);

            mapGrid.appendChild(card);
        });

        this.updateResultsCount(this.totalProvinsi);
    }

    renderKabupatenList() {
        // Initial render - show all
        const allKabupaten = Object.entries(this.provinces).flatMap(([province, kabupatenList]) => 
            kabupatenList.map(kabupaten => ({ kabupaten, province }))
        );

        const kabupatenGrid = document.querySelector('.kabupaten-grid');
        if (!kabupatenGrid) return;

        allKabupaten.slice(0, 50).forEach((item, index) => { // Show first 50 for performance
            const card = this.createKabupatenCard(item.kabupaten, item.province, index);
            kabupatenGrid.appendChild(card);
            
            setTimeout(() => {
                card.classList.add('animate-in');
            }, index * 30);
        });

        // Setup infinite scroll
        this.setupInfiniteScroll(allKabupaten);
    }

    setupInfiniteScroll(allKabupaten) {
        let currentIndex = 50;
        const kabupatenGrid = document.querySelector('.kabupaten-grid');
        const loadingThreshold = 100;

        const loadMoreKabupaten = () => {
            if (currentIndex >= allKabupaten.length) return;

            const fragment = document.createDocumentFragment();
            const endIndex = Math.min(currentIndex + 20, allKabupaten.length);

            for (let i = currentIndex; i < endIndex; i++) {
                const item = allKabupaten[i];
                const card = this.createKabupatenCard(item.kabupaten, item.province, i);
                fragment.appendChild(card);
            }

            kabupatenGrid.appendChild(fragment);

            // Animate new cards
            Array.from(kabupatenGrid.children)
                .slice(currentIndex, endIndex)
                .forEach((card, idx) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, idx * 30);
                });

            currentIndex = endIndex;
        };

        // Intersection Observer for infinite scroll
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && currentIndex < allKabupaten.length) {
                loadMoreKabupaten();
            }
        }, { threshold: 0.1 });

        const sentinel = document.createElement('div');
        sentinel.className = 'scroll-sentinel';
        kabupatenGrid.parentNode.appendChild(sentinel);
        observer.observe(sentinel);
    }

    initAnimations() {
        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });
        }

        // Page transition
        setTimeout(() => {
            document.body.classList.add('page-transition-visible');
        }, 100);

        // Animate numbers
        this.animateNumbers();
    }

    animateNumbers() {
        const counters = document.querySelectorAll('.stat-value');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 100;
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };

            // Start when in viewport
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.unobserve(counter);
                }
            });

            observer.observe(counter);
        });
    }

    lazyLoad() {
        const lazyElements = document.querySelectorAll('.lazy-load');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '50px' });

        lazyElements.forEach(el => observer.observe(el));
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading overlay
    setTimeout(() => {
        const loadingOverlay = document.querySelector('.loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }
    }, 1000);

    // Initialize Daerah MPP
    new DaerahMPP();
});

// Performance optimizations
window.addEventListener('load', () => {
    // Preload critical resources
    const preloadLinks = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];

    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });

    // Optimize animations for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
});

// Service Worker for caching (optional)
if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}
