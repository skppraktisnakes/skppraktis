// JavaScript untuk Landing Page SKP Praktis Nakes
// Versi: 1.0 | Tanggal: $(Get-Date -Format "yyyy-MM-dd")

document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Tutup menu saat klik link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Tutup semua FAQ lainnya
            faqQuestions.forEach(q => {
                if (q !== question) {
                    const otherAnswer = q.nextElementSibling;
                    const otherIcon = q.querySelector('i');
                    otherAnswer.classList.remove('active');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle FAQ yang diklik
            answer.classList.toggle('active');
            if (answer.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Smooth Scroll untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        }
    });

    // Initialize Chart.js (Success Chart)
    const initializeCharts = () => {
        const ctx = document.getElementById('successChart');
        if (ctx) {
            const successChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Review Akun', 'Input SKP', 'All-in One SIP'],
                    datasets: [{
                        label: 'Tingkat Keberhasilan (%)',
                        data: [95, 92, 98],
                        backgroundColor: [
                            'rgba(0, 155, 151, 0.7)',
                            'rgba(140, 198, 63, 0.7)',
                            'rgba(0, 94, 106, 0.7)'
                        ],
                        borderColor: [
                            'rgb(0, 155, 151)',
                            'rgb(140, 198, 63)',
                            'rgb(0, 94, 106)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.parsed.y + '%';
                                }
                            }
                        }
                    }
                }
            });
        }
    };

    // Initialize Daerah Search Functionality
    const initializeDaerahSearch = () => {
        const searchInput = document.getElementById('daerahSearch');
        const daerahCards = document.querySelectorAll('.daerah-card');
        
        if (searchInput && daerahCards.length > 0) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                daerahCards.forEach(card => {
                    const daerahName = card.querySelector('.daerah-name').textContent.toLowerCase();
                    const province = card.getAttribute('data-province').toLowerCase();
                    
                    if (daerahName.includes(searchTerm) || province.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
    };

    // Initialize Counter Animation
    const initializeCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target') || counter.textContent.replace('+', ''));
                const count = parseInt(counter.textContent.replace('+', ''));
                const increment = target / 200;
                
                if (count < target) {
                    counter.textContent = Math.ceil(count + increment) + (counter.textContent.includes('+') ? '+' : '');
                    setTimeout(updateCount, 10);
                } else {
                    counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                }
            };
            
            // Start counter when in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCount();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    };

    // Call initialization functions
    initializeCharts();
    initializeDaerahSearch();
    initializeCounters();

    // Form submission handler
    const consultationForm = document.getElementById('consultationForm');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            submitBtn.disabled = true;
            
            // Simulate API call (in production, this would be a real API call)
            setTimeout(() => {
                // Show success message
                alert('Terima kasih! Formulir konsultasi Anda telah berhasil dikirim. Tim kami akan menghubungi Anda dalam 1x24 jam.');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Redirect to thank you page or show modal
                window.location.href = '#thank-you';
            }, 1500);
        });
    }

    // Service Card Hover Effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Current Year in Footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Testimonial Slider (if needed)
    const testimonialSlider = () => {
        const testimonials = document.querySelector('.testimonial-cards');
        if (testimonials && testimonials.children.length > 1) {
            let currentIndex = 0;
            const totalTestimonials = testimonials.children.length;
            
            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalTestimonials;
                testimonials.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 5000);
        }
    };
    
    testimonialSlider();

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// WhatsApp Click Tracker
function trackWhatsAppClick(source) {
    // In production, you would send this to Google Analytics
    console.log(`WhatsApp click tracked from: ${source}`);
    return true;
}

// Copy WhatsApp Number Function
function copyWhatsAppNumber() {
    const phoneNumber = '+6285175178591';
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert('Nomor WhatsApp berhasil disalin: ' + phoneNumber);
    });
}
