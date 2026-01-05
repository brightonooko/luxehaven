// Filters JavaScript
// Handles apartment filtering functionality

document.addEventListener('DOMContentLoaded', function() {
    const priceFilter = document.getElementById('priceFilter');
    const sizeFilter = document.getElementById('sizeFilter');
    const guestsFilter = document.getElementById('guestsFilter');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const apartmentsGrid = document.getElementById('apartmentsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!apartmentsGrid) return;
    
    let allApartments = getAllApartments();
    let filteredApartments = [...allApartments];
    
    // Filter event listeners
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
    
    if (sizeFilter) {
        sizeFilter.addEventListener('change', applyFilters);
    }
    
    if (guestsFilter) {
        guestsFilter.addEventListener('change', applyFilters);
    }
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
    
    // Apply Filters
    function applyFilters() {
        const priceValue = priceFilter ? priceFilter.value : 'all';
        const sizeValue = sizeFilter ? sizeFilter.value : 'all';
        const guestsValue = guestsFilter ? guestsFilter.value : 'all';
        
        filteredApartments = allApartments.filter(apartment => {
            // Price filter (KES)
            if (priceValue !== 'all') {
                if (priceValue === 'low' && apartment.price >= 26000) return false;
                if (priceValue === 'medium' && (apartment.price < 26000 || apartment.price >= 52000)) return false;
                if (priceValue === 'high' && apartment.price < 52000) return false;
            }
            
            // Size filter
            if (sizeValue !== 'all') {
                if (apartment.size !== sizeValue) return false;
            }
            
            // Guests filter
            if (guestsValue !== 'all') {
                if (guestsValue === '1-2' && apartment.guests > 2) return false;
                if (guestsValue === '3-4' && (apartment.guests < 3 || apartment.guests > 4)) return false;
                if (guestsValue === '5+' && apartment.guests < 5) return false;
            }
            
            return true;
        });
        
        displayFilteredApartments();
    }
    
    // Display Filtered Apartments
    function displayFilteredApartments() {
        apartmentsGrid.innerHTML = '';
        
        if (filteredApartments.length === 0) {
            if (noResults) {
                noResults.style.display = 'block';
            }
            updateResultsCount(0);
            return;
        }
        
        if (noResults) {
            noResults.style.display = 'none';
        }
        
        filteredApartments.forEach(apartment => {
            const card = createApartmentCard(apartment);
            apartmentsGrid.appendChild(card);
        });
        
        updateResultsCount(filteredApartments.length);
    }
    
    // Reset Filters
    function resetFilters() {
        if (priceFilter) priceFilter.value = 'all';
        if (sizeFilter) sizeFilter.value = 'all';
        if (guestsFilter) guestsFilter.value = 'all';
        
        filteredApartments = [...allApartments];
        displayFilteredApartments();
    }
    
    // Initial display
    displayFilteredApartments();
});
