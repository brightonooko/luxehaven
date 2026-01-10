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
        
        // Prepare loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // EmailJS config and send
        const cfg = window.EMAILJS_CONFIG;
        if (cfg && window.emailjs) {
            try {
                window.emailjs.init(cfg.publicKey);
            } catch (initErr) {
                // If init fails, fallback to mailto
            }
            const templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone || 'N/A',
                apartment: formData.apartment || 'Not specified',
                message: formData.message
            };
            
            window.emailjs.send(cfg.serviceId, cfg.templateId, templateParams)
                .then(() => {
                    showFormMessage('success', 'Thank you! Your message has been sent successfully. We will get back to you soon.');
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    if (formMessage) {
                        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                })
                .catch(() => {
                    // Fallback to mailto if EmailJS fails
                    const subject = `New Contact Message from ${formData.name} - LuxeHaven`;
                    const bodyLines = [
                        `Name: ${formData.name}`,
                        `Email: ${formData.email}`,
                        `Phone: ${formData.phone || 'N/A'}`,
                        `Facility: ${formData.apartment || 'Not specified'}`,
                        '',
                        'Message:',
                        formData.message
                    ];
                    const mailtoLink = `mailto:luxehavenbnb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
                    window.location.href = mailtoLink;
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        } else {
            // Fallback: open user's email client with prefilled message
            const subject = `New Contact Message from ${formData.name} - LuxeHaven`;
            const bodyLines = [
                `Name: ${formData.name}`,
                `Email: ${formData.email}`,
                `Phone: ${formData.phone || 'N/A'}`,
                `Facility: ${formData.apartment || 'Not specified'}`,
                '',
                'Message:',
                formData.message
            ];
            const mailtoLink = `mailto:luxehavenbnb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
            window.location.href = mailtoLink;
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
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
    
    // Phone number: enforce digits-only input (no characters)
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }
});
