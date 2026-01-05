// Facilities JavaScript
// Handles facility display and modal interactions

document.addEventListener('DOMContentLoaded', function() {
    const facilitiesGrid = document.getElementById('facilitiesGrid');
    
    if (!facilitiesGrid) return;
    
    let allFacilities = getAllFacilities();
    
    // Display All Facilities
    function displayFacilities() {
        facilitiesGrid.innerHTML = '';
        
        allFacilities.forEach(facility => {
            const card = createFacilityCard(facility);
            facilitiesGrid.appendChild(card);
        });
    }
    
    // Create Facility Card
    function createFacilityCard(facility) {
        const card = document.createElement('div');
        card.className = 'apartment-card';
        card.setAttribute('data-facility-id', facility.id);
        
        // Get a random image for display
        const randomImage = getRandomFacilityImage(facility.id);
        
        card.innerHTML = `
            <div class="apartment-image">
                <img src="${randomImage}" alt="${facility.name}" loading="lazy">
            </div>
            <div class="apartment-info">
                <h3 class="apartment-name">${facility.name}</h3>
                <p class="apartment-description">${facility.description}</p>
                <div class="apartment-features">
                    ${facility.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="apartment-cta">
                    <button class="btn btn-primary view-details-btn" data-facility-id="${facility.id}">
                        View Details
                    </button>
                </div>
            </div>
        `;
        
        // Add click event to card
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('view-details-btn')) {
                openFacilityModal(facility.id);
            }
        });
        
        // Add click event to button
        const viewBtn = card.querySelector('.view-details-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                openFacilityModal(facility.id);
            });
        }
        
        return card;
    }
    
    // Open Facility Modal
    function openFacilityModal(facilityId) {
        const facility = getFacilityById(facilityId);
        if (!facility) return;
        
        const modal = document.getElementById('apartmentModal');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalBody) return;
        
        modalBody.innerHTML = `
            <div class="modal-image-carousel">
                <div class="modal-carousel-container">
                    <div class="modal-carousel-images" id="modalCarouselImages">
                        ${facility.images.map((img, index) => `
                            <img src="${img}" alt="${facility.name} - Image ${index + 1}" class="modal-carousel-image" loading="lazy">
                        `).join('')}
                    </div>
                    ${facility.images.length > 1 ? `
                        <div class="modal-carousel-controls">
                            <button class="modal-carousel-btn prev" aria-label="Previous image">‹</button>
                            <div class="carousel-dots" id="carouselDots">
                                ${facility.images.map((_, index) => `
                                    <span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
                                `).join('')}
                            </div>
                            <button class="modal-carousel-btn next" aria-label="Next image">›</button>
                        </div>
                    ` : ''}
                </div>
            </div>
            <div class="modal-details">
                <h2 class="modal-title">${facility.name}</h2>
                <p class="modal-description">${facility.description}</p>
                
                <div class="modal-features">
                    <h3>Features</h3>
                    <div class="features-grid">
                        ${facility.features.map(feature => `<span class="feature-badge">${feature}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-amenities">
                    <h3>Amenities & Services</h3>
                    <ul class="amenities-list">
                        ${facility.amenities.map(amenity => `<li>${amenity}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-cta">
                    <button class="btn btn-primary" onclick="window.location.href='contact.html'">Book This Facility</button>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        setupModalControls();
    }
    
    // Setup Modal Controls
    function setupModalControls() {
        const prevBtn = document.querySelector('.modal-carousel-btn.prev');
        const nextBtn = document.querySelector('.modal-carousel-btn.next');
        const dots = document.querySelectorAll('.carousel-dot');
        const carouselImages = document.getElementById('modalCarouselImages');
        
        let currentIndex = 0;
        const totalImages = document.querySelectorAll('.modal-carousel-image').length;
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + totalImages) % totalImages;
                updateCarousel();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % totalImages;
                updateCarousel();
            });
        }
        
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                currentIndex = parseInt(this.getAttribute('data-index'));
                updateCarousel();
            });
        });
        
        function updateCarousel() {
            if (carouselImages) {
                carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            if (dots[currentIndex]) {
                dots[currentIndex].classList.add('active');
            }
        }
    }
    
    // Display facilities on load
    displayFacilities();
});
