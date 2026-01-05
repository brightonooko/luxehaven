// Contact Form JavaScript
// Handles form submission and validation

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!contactForm) return;
    
    // Pre-fill apartment selection if coming from apartment page
    const urlParams = new URLSearchParams(window.location.search);
    const apartmentId = urlParams.get('apartment');
    
    if (apartmentId) {
        const apartmentSelect = document.getElementById('apartment');
        if (apartmentSelect) {
            const apartment = getApartmentById(parseInt(apartmentId));
            if (apartment) {
                // Try to match apartment name to select options
                const options = apartmentSelect.options;
                for (let i = 0; i < options.length; i++) {
                    if (options[i].text.toLowerCase().includes(apartment.name.toLowerCase().split(' ')[0])) {
                        apartmentSelect.value = options[i].value;
                        break;
                    }
                }
            }
        }
    }
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            apartment: document.getElementById('apartment').value,
            message: document.getElementById('message').value.trim()
        };
        
        // Validate form
        if (!validateForm(formData)) {
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success
            showFormMessage('success', 'Thank you! Your message has been sent successfully. We will get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Scroll to message
            if (formMessage) {
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 1500);
    });
    
    // Validate Form
    function validateForm(data) {
        // Name validation
        if (!data.name || data.name.length < 2) {
            showFormMessage('error', 'Please enter a valid name (at least 2 characters).');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            showFormMessage('error', 'Please enter a valid email address.');
            return false;
        }
        
        // Message validation
        if (!data.message || data.message.length < 10) {
            showFormMessage('error', 'Please enter a message (at least 10 characters).');
            return false;
        }
        
        return true;
    }
    
    // Show Form Message
    function showFormMessage(type, message) {
        if (!formMessage) return;
        
        formMessage.className = `form-message ${type}`;
        formMessage.textContent = message;
        formMessage.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
    
    // Phone number formatting (optional)
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                value = value.match(/.{1,3}/g).join('-');
                if (value.length > 12) value = value.substr(0, 12);
            }
            e.target.value = value;
        });
    }
});
