// Main JavaScript File
// Handles navigation, modals, smooth scroll, and general interactions

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
    
    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Sticky Header on Scroll
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Load Featured Apartments on Home Page
    if (document.getElementById('featuredApartments')) {
        loadFeaturedApartments();
    }
    
    // Load All Apartments on Apartments Page
    if (document.getElementById('apartmentsGrid')) {
        loadAllApartments();
    }
    
    // Load Testimonials
    if (document.getElementById('testimonialsSlider')) {
        loadTestimonials();
    }
    
    // Modal Functionality
    setupModal();
    
    // Lazy Loading Images
    setupLazyLoading();
});

// Load Featured Apartments
function loadFeaturedApartments() {
    const container = document.getElementById('featuredApartments');
    if (!container) return;
    
    const featured = getFeaturedApartments();
    container.innerHTML = '';
    
    featured.forEach(apartment => {
        const card = createApartmentCard(apartment);
        container.appendChild(card);
    });
}

// Load All Apartments
function loadAllApartments() {
    const container = document.getElementById('apartmentsGrid');
    if (!container) return;
    
    const allApartments = getAllApartments();
    container.innerHTML = '';
    
    allApartments.forEach(apartment => {
        const card = createApartmentCard(apartment);
        container.appendChild(card);
    });
    
    updateResultsCount(allApartments.length);
}

// Create Apartment Card
function createApartmentCard(apartment) {
    const card = document.createElement('div');
    card.className = 'apartment-card';
    card.setAttribute('data-apartment-id', apartment.id);
    
    card.innerHTML = `
        <div class="apartment-image">
            <img src="${apartment.image}" alt="${apartment.name}" loading="lazy">
        </div>
        <div class="apartment-info">
            <h3 class="apartment-name">${apartment.name}</h3>
            <p class="apartment-description">${apartment.description}</p>
            <div class="apartment-features">
                ${apartment.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <div class="apartment-cta">
                <button class="btn btn-primary view-details-btn" data-apartment-id="${apartment.id}">
                    View Details
                </button>
            </div>
        </div>
    `;
    
    // Add click event to card
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('view-details-btn')) {
            openApartmentModal(apartment.id);
        }
    });
    
    // Add click event to button
    const viewBtn = card.querySelector('.view-details-btn');
    if (viewBtn) {
        viewBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openApartmentModal(apartment.id);
        });
    }
    
    return card;
}

// Setup Modal
function setupModal() {
    const modal = document.getElementById('apartmentModal');
    const modalClose = document.querySelector('.modal-close');
    
    if (!modal) return;
    
    // Close modal on close button click
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Open Apartment Modal
function openApartmentModal(apartmentId) {
    const apartment = getApartmentById(apartmentId);
    if (!apartment) return;
    
    const modal = document.getElementById('apartmentModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="modal-image-carousel">
            <div class="modal-carousel-container">
                <div class="modal-carousel-images" id="modalCarouselImages">
                    ${apartment.images.map((img, index) => `
                        <img src="${img}" alt="${apartment.name} - Image ${index + 1}" class="modal-carousel-image" loading="lazy">
                    `).join('')}
                </div>
                ${apartment.images.length > 1 ? `
                    <div class="modal-carousel-controls">
                        <button class="modal-carousel-btn prev" aria-label="Previous image">‹</button>
                        <button class="modal-carousel-btn next" aria-label="Next image">›</button>
                    </div>
                    <div class="modal-carousel-dots" id="modalCarouselDots">
                        ${apartment.images.map((_, index) => `
                            <button class="modal-carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to image ${index + 1}"></button>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
        <h2 class="modal-apartment-name">${apartment.name}</h2>
        <p class="modal-apartment-description">${apartment.description}</p>
        
        <div class="modal-capacity">
            <h3 class="modal-capacity-title">Capacity</h3>
            <div class="modal-capacity-info">
                <div class="capacity-item">
                    <span>🛏️</span>
                    <span>${apartment.beds} Bedroom${apartment.beds > 1 ? 's' : ''}</span>
                </div>
                <div class="capacity-item">
                    <span>🚿</span>
                    <span>${apartment.baths} Bathroom${apartment.baths > 1 ? 's' : ''}</span>
                </div>
                <div class="capacity-item">
                    <span>👥</span>
                    <span>Up to ${apartment.guests} Guest${apartment.guests > 1 ? 's' : ''}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-amenities">
            <h3 class="modal-amenities-title">Amenities</h3>
            <div class="modal-amenities-list">
                ${apartment.amenities.map(amenity => `
                    <div class="modal-amenity-item">
                        <span>✓</span>
                        <span>${amenity}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-pricing">
            <h3 class="modal-pricing-title">Pricing</h3>
            <p class="modal-price">KES ${apartment.price.toLocaleString()}/night</p>
        </div>
        
        <div class="modal-cta-buttons">
            <a href="contact.html?apartment=${apartment.id}" class="btn btn-primary">Book Now</a>
            <a href="contact.html?apartment=${apartment.id}" class="btn btn-outline">Enquire</a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize carousel slider if there are multiple images
    if (apartment.images.length > 1) {
        initModalCarousel(apartment.images.length);
    }
}

// Initialize Modal Carousel Slider
function initModalCarousel(totalImages) {
    const carouselImages = document.getElementById('modalCarouselImages');
    const prevBtn = document.querySelector('.modal-carousel-btn.prev');
    const nextBtn = document.querySelector('.modal-carousel-btn.next');
    const dots = document.querySelectorAll('.modal-carousel-dot');
    
    if (!carouselImages || totalImages <= 1) return;
    
    let currentIndex = 0;
    
    function updateCarousel() {
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }
    
    function goToImage(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Button events
    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }
    
    // Dot events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToImage(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('apartmentModal');
        if (!modal || !modal.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselImages.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselImages.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }
    }
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('apartmentModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Load Testimonials
function loadTestimonials() {
    const slider = document.getElementById('testimonialsSlider');
    const track = slider.querySelector('.testimonial-track');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!track) return;
    
    const testimonials = getAllTestimonials();
    let currentIndex = 0;
    
    // Create testimonial cards
    testimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-rating">${'⭐'.repeat(testimonial.rating)}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">${testimonial.name}</div>
            <div class="testimonial-location">${testimonial.location} • ${testimonial.platform}</div>
        `;
        track.appendChild(card);
        
        // Create dot
        if (dotsContainer) {
            const dot = document.createElement('div');
            dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        }
    });
    
    // Slider controls
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateSlider();
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Auto-scroll testimonials
    setInterval(nextSlide, 5000);
}

// Setup Lazy Loading
function setupLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading supported
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        });
    } else {
        // Fallback for browsers without native lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Update Results Count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${count} apartment${count !== 1 ? 's' : ''}`;
    }
}

// Page Transition Effect
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});
