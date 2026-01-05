// Apartment Data
const apartments = [
    {
        id: 1,
        name: "Studio Deluxe",
        description: "Elegant studio apartment perfect for solo travelers or couples. Features modern amenities and stunning city views.",
        image: "images/apartments/studio-deluxe/1.jpg",
        images: [
            "images/apartments/studio-deluxe/1.jpg",
            "images/apartments/studio-deluxe/2.jpg",
            "images/apartments/studio-deluxe/3.jpg"
        ],
        features: ["Wi-Fi", "Kitchen", "City View", "1 Bed"],
        beds: 1,
        baths: 1,
        guests: 2,
        size: "studio",
        price: 19500,
        priceRange: "low",
        currency: "KES",
        amenities: [
            "Free Wi-Fi",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Air Conditioning",
            "City View",
            "Housekeeping",
            "24/7 Security"
        ]
    },
    {
        id: 2,
        name: "One Bedroom Luxury",
        description: "Spacious one-bedroom apartment with separate living area. Ideal for extended stays with premium furnishings.",
        image: "images/apartments/one-bedroom-luxury/1.jpg",
        images: [
            "images/apartments/one-bedroom-luxury/1.jpg",
            "images/apartments/one-bedroom-luxury/2.jpg",
            "images/apartments/one-bedroom-luxury/3.jpg",
            "images/apartments/one-bedroom-luxury/4.jpg"
        ],
        features: ["Wi-Fi", "Kitchen", "Balcony", "2 Beds"],
        beds: 1,
        baths: 1,
        guests: 3,
        size: "1br",
        price: 32500,
        priceRange: "medium",
        currency: "KES",
        amenities: [
            "Free Wi-Fi",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Air Conditioning",
            "Private Balcony",
            "Washer/Dryer",
            "Housekeeping",
            "24/7 Security",
            "Parking Available"
        ]
    },
    {
        id: 3,
        name: "Two Bedroom Premium",
        description: "Luxurious two-bedroom apartment perfect for families or groups. Features premium amenities and elegant design.",
        image: "images/apartments/two-bedroom-premium/1.jpg",
        images: [
            "images/apartments/two-bedroom-premium/1.jpg",
            "images/apartments/two-bedroom-premium/2.jpg",
            "images/apartments/two-bedroom-premium/3.jpg",
            "images/apartments/two-bedroom-premium/4.jpg",
            "images/apartments/two-bedroom-premium/5.jpg"
        ],
        features: ["Wi-Fi", "Kitchen", "Balcony", "2 Beds"],
        beds: 2,
        baths: 2,
        guests: 4,
        size: "2br",
        price: 45500,
        priceRange: "medium",
        currency: "KES",
        amenities: [
            "Free Wi-Fi",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Air Conditioning",
            "Private Balcony",
            "Washer/Dryer",
            "Dining Area",
            "Housekeeping",
            "24/7 Security",
            "Parking Available",
            "Fitness Center Access"
        ]
    },
    {
        id: 4,
        name: "Three Bedroom Penthouse",
        description: "Ultra-luxurious penthouse with panoramic views. The ultimate in luxury living with premium finishes throughout.",
        image: "images/apartments/three-bedroom-penthouse/1.jpg",
        images: [
            "images/apartments/three-bedroom-penthouse/1.jpg",
            "images/apartments/three-bedroom-penthouse/2.jpg",
            "images/apartments/three-bedroom-penthouse/3.jpg",
            "images/apartments/three-bedroom-penthouse/4.jpg",
            "images/apartments/three-bedroom-penthouse/5.jpg",
            "images/apartments/three-bedroom-penthouse/6.jpg"
        ],
        features: ["Wi-Fi", "Kitchen", "Terrace", "2 Beds"],
        beds: 3,
        baths: 3,
        guests: 6,
        size: "3br",
        price: 71500,
        priceRange: "high",
        currency: "KES",
        amenities: [
            "Free Wi-Fi",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Air Conditioning",
            "Private Terrace",
            "Washer/Dryer",
            "Dining Area",
            "Home Office",
            "Housekeeping",
            "24/7 Security",
            "Parking Available",
            "Fitness Center Access",
            "Concierge Service",
            "Premium Views"
        ]
    },
    {
        id: 5,
        name: "Cozy Studio",
        description: "Charming studio apartment with modern amenities. Perfect for budget-conscious travelers seeking comfort.",
        image: "images/apartments/cozy-studio/1.jpg",
        images: [
            "images/apartments/cozy-studio/1.jpg",
            "images/apartments/cozy-studio/2.jpg"
        ],
        features: ["Wi-Fi", "Kitchen", "1 Bed"],
        beds: 1,
        baths: 1,
        guests: 2,
        size: "studio",
        price: 15600,
        priceRange: "low",
        currency: "KES",
        amenities: [
            "Free Wi-Fi",
            "Kitchenette",
            "Smart TV",
            "Air Conditioning",
            "Housekeeping",
            "24/7 Security"
        ]
    },
    {
        id: 6,
        name: "Executive Suite",
        description: "Sophisticated one-bedroom suite designed for business travelers. Features dedicated workspace and premium amenities.",
        image: "images/apartments/executive-suite/1.jpg",
        images: [
            "images/apartments/executive-suite/1.jpg",
            "images/apartments/executive-suite/2.jpg",
            "images/apartments/executive-suite/3.jpg"
        ],
        features: ["Wi-Fi", "Kitchen", "Office", "2 Beds"],
        beds: 1,
        baths: 1,
        guests: 2,
        size: "1br",
        price: 36400,
        priceRange: "medium",
        currency: "KES",
        amenities: [
            "Free Wi-Fi",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Air Conditioning",
            "Home Office",
            "High-Speed Internet",
            "Housekeeping",
            "24/7 Security",
            "Business Services"
        ]
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        location: "United States",
        rating: 5,
        text: "Absolutely stunning apartment! The attention to detail and luxury amenities made our stay unforgettable. Highly recommend!",
        platform: "Airbnb"
    },
    {
        id: 2,
        name: "James Chen",
        location: "Singapore",
        rating: 5,
        text: "Perfect location, beautiful design, and exceptional service. This is how luxury accommodation should be done.",
        platform: "Booking.com"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        location: "Spain",
        rating: 5,
        text: "We stayed for a month and felt right at home. The fully equipped kitchen and housekeeping service were fantastic.",
        platform: "Airbnb"
    },
    {
        id: 4,
        name: "Michael Thompson",
        location: "United Kingdom",
        rating: 5,
        text: "The penthouse exceeded all expectations. The views are breathtaking and the amenities are top-notch. Will definitely return!",
        platform: "Direct Booking"
    },
    {
        id: 5,
        name: "Lisa Wang",
        location: "China",
        rating: 5,
        text: "Beautiful apartment with modern design. The team was very responsive and helpful throughout our stay. Highly recommended!",
        platform: "Airbnb"
    }
];

// Helper function to get featured apartments (first 3)
function getFeaturedApartments() {
    return apartments.slice(0, 3);
}

// Helper function to get all apartments
function getAllApartments() {
    return apartments;
}

// Helper function to get apartment by ID
function getApartmentById(id) {
    return apartments.find(apt => apt.id === id);
}

// Helper function to get all testimonials
function getAllTestimonials() {
    return testimonials;
}
