# LuxeHaven - Luxury Serviced Apartments Website

A modern, responsive website for luxury serviced apartments featuring elegant design, smooth interactions, and comprehensive functionality.

## Features

### Global / Site-Wide Features
- ✅ Fully responsive design (desktop, tablet, mobile)
- ✅ Consistent header & footer on all pages
- ✅ Sticky navigation bar
- ✅ Smooth scroll & page transitions
- ✅ SEO optimization (meta tags, structured content)
- ✅ Fast image loading (lazy loading, optimized assets)
- ✅ Accessibility basics (alt text, readable contrast, ARIA labels)
- ✅ Brand consistency (colors, typography, spacing)
- ✅ Social media integration
- ✅ Call-to-Action (CTA) buttons throughout

### Home Page
- ✅ Full-screen hero section with headline and CTAs
- ✅ Featured apartments section with grid layout
- ✅ Services overview with icons
- ✅ Testimonials slider with auto-scroll
- ✅ Team section showcasing staff

### Apartments / Gallery Page
- ✅ Apartments gallery with grid layout
- ✅ Filter options (price, size, number of guests)
- ✅ Apartment modal with:
  - Image carousel
  - Full description
  - Amenities list
  - Capacity details
  - Pricing information
  - CTA buttons (Book Now, Enquire, View on Airbnb)

### Services Page
- ✅ Detailed breakdown of services
- ✅ Categorized layout:
  - In-Apartment Services
  - Property Services
  - Optional Add-Ons
- ✅ Visual icons and clear explanations

### Design Process Page
- ✅ Step-by-step process visualization
- ✅ Timeline infographic
- ✅ High-quality imagery placeholders

### Contact Page
- ✅ Contact form with validation
- ✅ Location & contact details
- ✅ Google Maps placeholder (ready for integration)
- ✅ Quick CTAs (WhatsApp, Call, Airbnb)

## File Structure

```
luxehaven/
├── index.html              # Home page
├── apartments.html         # Apartments gallery page
├── services.html           # Services page
├── design-process.html     # Design process page
├── contact.html            # Contact page
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Responsive styles
├── js/
│   ├── data.js            # Apartment and testimonial data
│   ├── main.js            # Main functionality (modals, navigation, etc.)
│   ├── filters.js         # Apartment filtering
│   └── contact.js         # Contact form handling
└── README.md              # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in a web browser
2. **Local Server** (recommended): Use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. **View the site**: Navigate to `http://localhost:8000` in your browser

## Customization

### Adding Real Images
Replace placeholder image URLs in `js/data.js` with your actual apartment images. The images are currently using Unsplash placeholder URLs.

### Google Maps Integration
To add Google Maps to the contact page:
1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Replace the map placeholder in `contact.html` with the embed code:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>
```

### Form Submission
Currently, the contact form shows a success message. To connect it to a backend:
1. Update the form action in `contact.html`
2. Modify `js/contact.js` to send data to your API endpoint
3. Handle server-side validation and email sending

### Social Media Links
Update social media links in the footer by replacing `#` with your actual profile URLs.

### Brand Colors
Customize colors in `css/style.css` by modifying CSS variables:
```css
:root {
    --primary-color: #1a1a2e;
    --secondary-color: #16213e;
    --accent-color: #e94560;
    /* ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading images
- Optimized CSS and JavaScript
- Smooth animations and transitions
- Efficient DOM manipulation

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast ratios
- Alt text for images

## SEO Features

- Meta descriptions on all pages
- Semantic HTML5 elements
- Proper heading hierarchy
- Descriptive page titles
- Structured content

## Future Enhancements

- Backend integration for bookings
- Real-time availability calendar
- Payment gateway integration
- Multi-language support
- Advanced search and filtering
- Guest portal/login system
- Review and rating system

## License

This project is created for LuxeHaven. All rights reserved.

## Contact

For questions or support, please contact:
- Email: info@luxehaven.com
- Phone: +1 (555) 123-4567
