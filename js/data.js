// Apartment Data
const apartments = [
    {
        id: 1,
        name: "One Bedroom Luxury",
        description: "Spacious one-bedroom apartment with separate living area. Ideal for extended stays with premium furnishings.",
        image: "images/apartments/one-bedroom-luxury/1.jpg",
        images: [
            "images/apartments/one-bedroom-luxury/1.jpg",
            "images/apartments/one-bedroom-luxury/2.jpg",
            "images/apartments/one-bedroom-luxury/3.jpg",
            "images/apartments/one-bedroom-luxury/4.jpg"
        ],
        features: ["Wi-Fi", "Kitchen", "Balcony", "1 Bed"],
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
        id: 2,
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
    }
];

// Facilities Data (Additional amenities beyond apartments)
const facilities = [
    {
        id: 101,
        name: "Transport Services",
        description: "Professional transport and vehicle services to meet all your mobility needs.",
        image: "images/transport/vehicle-2.JPG",
        images: [
            "images/transport/vehicle-1.jpg",
            "images/transport/vehicle-2.JPG",
            "images/transport/vehicle-3.jpg",
            "images/transport/vehicle-4.jpeg",
            "images/transport/vehicle-5.jpeg",
            "images/transport/vehicle-6.jpeg",
            "images/transport/vehicle-7.jpeg"
        ],
        features: ["Airport Transfer", "Car Rental", "Chauffeur Service", "24/7 Available"],
        type: "transport",
        amenities: [
            "Airport pickup and drop-off",
            "Car rental arrangements",
            "Chauffeur service available",
            "Vehicle maintenance assistance",
            "Flexible booking",
            "Professional drivers"
        ]
    },
    {
        id: 102,
        name: "In-House Restaurant",
        description: "Fine dining experience with a diverse menu right within our property. Room service also available.",
        image: "images/rest4.jpg",
        images: [
            "images/rest1.jpg",
            "images/rest2.jpg",
            "images/rest3.jpg",
            "images/rest4.jpg"
        ],
        features: ["Fine Dining", "Room Service", "Catering", "Diverse Menu"],
        type: "restaurant",
        amenities: [
            "In-house restaurant with diverse menu",
            "Room service dining",
            "Catering for events",
            "Special dietary accommodations",
            "International and local cuisine",
            "Professional chefs"
        ]
    },
    {
        id: 103,
        name: "Fitness Center & Gym",
        description: "State-of-the-art fitness facilities with modern equipment to maintain your workout routine.",
        image: "images/gym2.jpg",
        images: [
            "images/gym1.jpg",
            "images/gym2.jpg"
        ],
        features: ["Modern Equipment", "Personal Training", "Yoga Studio", "24/7 Access"],
        type: "gym",
        amenities: [
            "Modern exercise equipment",
            "Cardio machines",
            "Free weights and dumbbells",
            "Yoga studio",
            "Personal training available",
            "Sauna and steam room",
            "24/7 gym access",
            "Professional trainers"
        ]
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        location: "New York, USA",
        rating: 5,
        text: "Absolutely stunning apartment! The attention to detail and luxury amenities made our stay unforgettable. Highly recommend!",
        platform: "Direct Booking"
    },
    {
        id: 2,
        name: "James Ochieng",
        location: "Nairobi, Kenya",
        rating: 5,
        text: "Perfect location, beautiful design, and exceptional service. This is how luxury accommodation should be done.",
        platform: "Direct Booking"
    },
    {
        id: 3,
        name: "Emma Karanja",
        location: "Queensland, Australia",
        rating: 5,
        text: "We stayed for a month and felt right at home. The fully equipped kitchen and housekeeping service were fantastic.",
        platform: "Direct Booking"
    },
    {
        id: 4,
        name: "Michael Thomas",
        location: "Netherlands, Europe",
        rating: 5,
        text: "The views are breathtaking and the amenities are top-notch. Will definitely return!",
        platform: "Direct Booking"
    },
    {
        id: 5,
        name: "Lisa Wangui",
        location: "Nairobi, Kenya",
        rating: 5,
        text: "Beautiful apartment with modern design. The team was very responsive and helpful throughout our stay. Highly recommended!",
        platform: "Direct Booking"
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
// Helper function to get all facilities
function getAllFacilities() {
    return facilities;
}

// Helper function to get facility by ID
function getFacilityById(id) {
    return facilities.find(fac => fac.id === id);
}

// Helper function to get random image from a facility
function getRandomFacilityImage(id) {
    const facility = getFacilityById(id);
    if (!facility || !facility.images || facility.images.length === 0) return null;
    return facility.images[Math.floor(Math.random() * facility.images.length)];
}