import type { SiteConfig as SiteConfigType } from './types';

/**
 * Centralised configuration for New Era Beauty Clinic
 * All editable content (prices, hours, team, reviews, etc.) is managed here
 * Update this file to change content across the entire site
 */

export const siteConfig: SiteConfigType = {
  // Business Information
  business: {
    name: 'New Era Beauty Clinic',
    tagline: 'Where natural beauty, professional care and complete wellbeing come together.',
    description: 'Personalised beauty, skincare, permanent makeup and holistic treatments in Heywood.',
    phone: '07405 196775',
    email: 'info@newerabeautyclinic.com',
    instagram: '@new_era_beauty_clinic',
    address: {
      street: '155 York Street',
      city: 'Heywood',
      county: 'Greater Manchester',
      postcode: 'OL10 4NX',
      country: 'United Kingdom',
    },
    coordinates: {
      lat: 53.5833,
      lng: -2.1333,
    },
  },

  // Booking Configuration
  booking: {
    url: 'https://www.treatwell.com/place/new-era-beauty-clinic',
    platform: 'Treatwell',
  },

  // Opening Hours
  hours: {
    monday: { open: '10:15', close: '18:00', closed: false },
    tuesday: { open: '10:15', close: '18:00', closed: false },
    wednesday: { open: '10:15', close: '18:00', closed: false },
    thursday: { open: '10:00', close: '18:00', closed: false },
    friday: { open: '10:15', close: '18:00', closed: false },
    saturday: { open: '08:30', close: '18:00', closed: false },
    sunday: { open: '00:00', close: '00:00', closed: true },
  },

  // Trust Metrics
  trust: {
    rating: 4.9,
    reviews: '100+',
    experience: '11+',
    team: 'European-Trained',
    products: 'Premium Professional',
  },

  // Team Members
  team: [
    {
      id: 'deimante',
      name: 'Deimante',
      role: 'Permanent Makeup Artist and Beauty Therapist',
      bio: 'Deimante specialises in enhancing natural beauty through permanent makeup, henna brows, brow lamination, lash lifts, tinting, shaping, ear piercing and occasion makeup. Her approach combines careful consultation, precision and a commitment to client satisfaction.',
      services: ['Permanent makeup', 'Lip blush', 'Brows', 'Lashes', 'Makeup', 'Beauty treatments'],
      image: '/placeholder-deimante.jpg',
    },
    {
      id: 'ernesta',
      name: 'Ernesta',
      role: 'Clinic Owner, Beauty and Holistic Therapist',
      bio: 'Ernesta combines professional beauty treatments with a holistic understanding of health and wellbeing. Her experience includes facials, massage, brows, body treatments, sound healing, skincare and holistic therapies.',
      services: ['Facials', 'Massage', 'Brows', 'Body treatments', 'Sound healing', 'Holistic wellness'],
      image: '/placeholder-ernesta.jpg',
    },
  ],

  // Featured Treatments (Homepage)
  featuredTreatments: [
    {
      id: 'permanent-makeup',
      title: 'Permanent Makeup',
      description: 'Natural-looking brows, lip blush and semi-permanent enhancements created with precision and care.',
      image: '/placeholder-permanent-makeup.jpg',
      category: 'Permanent Makeup',
      href: '/permanent-makeup',
    },
    {
      id: 'brows-lashes',
      title: 'Brows and Lashes',
      description: 'Brow shaping, tinting, lamination, henna brows and lash treatments that frame your natural features.',
      image: '/placeholder-brows-lashes.jpg',
      category: 'Brows and Lashes',
      href: '/treatments',
    },
    {
      id: 'facials',
      title: 'Skin and Facials',
      description: 'Personalised facials, Dermalogica treatments and advanced skin rejuvenation for clearer, healthier-looking skin.',
      image: '/placeholder-facials.jpg',
      category: 'Facials and Skincare',
      href: '/skin-facials',
    },
    {
      id: 'massage',
      title: 'Massage Therapy',
      description: 'Relaxing and therapeutic massage experiences designed to reduce tension and restore balance.',
      image: '/placeholder-massage.jpg',
      category: 'Massage',
      href: '/massage',
    },
    {
      id: 'body-treatments',
      title: 'Body Treatments',
      description: 'Targeted body treatments, exfoliation and cellulite-focused therapies for smoother, revitalised skin.',
      image: '/placeholder-body-treatments.jpg',
      category: 'Body Treatments',
      href: '/treatments',
    },
    {
      id: 'holistic',
      title: 'Holistic Wellness',
      description: 'Sound healing, Kundalini-inspired practices and holistic treatments supporting the body and mind.',
      image: '/placeholder-holistic.jpg',
      category: 'Holistic Therapies',
      href: '/treatments',
    },
  ],

  // All Treatments with Pricing
  treatments: [
    // ── Permanent Makeup ──────────────────────────────────────────────────
    {
      id: 'powder-ombre-brows',
      name: 'Powder / Ombré Brows',
      category: 'Permanent Makeup',
      price: 250,
      duration: 150,
      description: 'Soft, powdery brow fill that mimics the look of light makeup. Ideal for all skin types including oily skin.',
    },
    {
      id: 'microblading',
      name: 'Microblading',
      category: 'Permanent Makeup',
      price: 250,
      duration: 150,
      description: 'Fine hair-stroke technique that creates ultra-realistic brows. Best suited to normal and dry skin types.',
    },
    {
      id: 'combo-brows',
      name: 'Combo Brows',
      category: 'Permanent Makeup',
      price: 280,
      duration: 180,
      description: 'A blend of microblading at the front and powder shading towards the tail for a full, defined brow.',
    },
    {
      id: 'lip-blush',
      name: 'Lip Blush',
      category: 'Permanent Makeup',
      price: 280,
      duration: 180,
      description: 'Subtle colour and definition added to the lips for a naturally flushed, fuller-looking pout.',
    },
    {
      id: 'permanent-eyeliner',
      name: 'Permanent Eyeliner',
      category: 'Permanent Makeup',
      price: 200,
      duration: 120,
      description: 'Defined lash-line enhancement for effortlessly polished eyes every day, from subtle to bold.',
    },
    {
      id: 'pmu-top-up',
      name: 'Permanent Makeup Top-Up',
      category: 'Permanent Makeup',
      price: 120,
      duration: 90,
      description: 'Refresh and maintain any existing permanent makeup treatment. Required 6–12 weeks after initial procedure.',
    },
    // ── Brows and Lashes ─────────────────────────────────────────────────
    {
      id: 'brow-lamination',
      name: 'Brow Lamination',
      category: 'Brows and Lashes',
      price: 45,
      duration: 60,
      description: 'A chemical process that lifts and sets brow hairs in place, creating fluffy, full and groomed brows.',
    },
    {
      id: 'henna-brows',
      name: 'Henna Brows',
      category: 'Brows and Lashes',
      price: 35,
      duration: 60,
      description: 'Natural henna pigment used to tint the brow hairs and stain the skin for defined, long-lasting brows.',
    },
    {
      id: 'brow-tint-shape',
      name: 'Brow Tint & Shape',
      category: 'Brows and Lashes',
      price: 20,
      duration: 30,
      description: 'Professional brow shaping and tinting for polished, defined brows that frame your face.',
    },
    {
      id: 'brow-shape-only',
      name: 'Brow Shape Only',
      category: 'Brows and Lashes',
      price: 12,
      duration: 20,
      description: 'Expert threading or waxing to create a clean, balanced brow shape tailored to your face.',
    },
    {
      id: 'lash-lift',
      name: 'Lash Lift',
      category: 'Brows and Lashes',
      price: 55,
      duration: 60,
      description: 'A semi-permanent treatment that curls and lifts your natural lashes from the root for an open, wide-eyed effect.',
    },
    {
      id: 'lash-tint',
      name: 'Lash Tint',
      category: 'Brows and Lashes',
      price: 15,
      duration: 20,
      description: 'Darkening tint applied to natural lashes for added definition without mascara.',
    },
    {
      id: 'lash-lift-tint',
      name: 'Lash Lift & Tint',
      category: 'Brows and Lashes',
      price: 65,
      duration: 75,
      description: 'The perfect combination — lifted, curled and darkened lashes for stunning results that last up to 8 weeks.',
    },
    // ── Facials and Skincare ──────────────────────────────────────────────
    {
      id: 'dermalogica-facial',
      name: 'Dermalogica Prescriptive Facial',
      category: 'Facials and Skincare',
      price: 75,
      duration: 60,
      description: 'A fully customised Dermalogica facial using professional skin mapping to target your specific skin concerns.',
    },
    {
      id: 'classic-facial',
      name: 'Classic Facial',
      category: 'Facials and Skincare',
      price: 55,
      duration: 60,
      description: 'A thorough cleanse, exfoliation, extraction, mask and massage for refreshed, glowing skin.',
    },
    {
      id: 'express-facial',
      name: 'Express Facial',
      category: 'Facials and Skincare',
      price: 35,
      duration: 30,
      description: 'A quick but effective cleanse and treatment ideal for a skin refresh between appointments.',
    },
    {
      id: 'anti-aging-facial',
      name: 'Anti-Aging Facial',
      category: 'Facials and Skincare',
      price: 85,
      duration: 75,
      description: 'Advanced treatment targeting fine lines, loss of firmness and uneven skin tone for a more youthful complexion.',
    },
    {
      id: 'skin-booster',
      name: 'Skin Booster Treatment',
      category: 'Facials and Skincare',
      price: 220,
      duration: 60,
      description: 'Advanced skin booster treatment for deep hydration, radiance and rejuvenation at a cellular level.',
    },
    {
      id: 'back-facial',
      name: 'Back Facial',
      category: 'Facials and Skincare',
      price: 60,
      duration: 60,
      description: 'Deep cleansing, exfoliation and mask treatment targeting the back to treat congestion and uneven texture.',
    },
    // ── Massage ───────────────────────────────────────────────────────────
    {
      id: 'swedish-massage-60',
      name: 'Swedish Massage (60 min)',
      category: 'Massage',
      price: 55,
      duration: 60,
      description: 'Classic relaxation massage using long flowing strokes to ease muscle tension and promote deep calm.',
    },
    {
      id: 'swedish-massage-90',
      name: 'Swedish Massage (90 min)',
      category: 'Massage',
      price: 75,
      duration: 90,
      description: 'Extended full-body Swedish massage for complete relaxation and muscle relief.',
    },
    {
      id: 'deep-tissue-massage',
      name: 'Deep Tissue Massage',
      category: 'Massage',
      price: 65,
      duration: 60,
      description: 'Targeted deep-pressure technique that releases chronic tension and knots in the deeper layers of muscle.',
    },
    {
      id: 'hot-stone-massage',
      name: 'Hot Stone Massage',
      category: 'Massage',
      price: 75,
      duration: 75,
      description: 'Warm basalt stones are used to melt away tension and enhance relaxation, leaving the body deeply restored.',
    },
    {
      id: 'indian-head-massage',
      name: 'Indian Head Massage',
      category: 'Massage',
      price: 40,
      duration: 45,
      description: 'Traditional Ayurvedic massage targeting the head, neck and shoulders to relieve stress and improve circulation.',
    },
    {
      id: 'back-neck-shoulder',
      name: 'Back, Neck & Shoulder Massage',
      category: 'Massage',
      price: 40,
      duration: 45,
      description: 'Focused massage on the areas that carry most tension, ideal for desk workers and those with postural stress.',
    },
    // ── Body Treatments ───────────────────────────────────────────────────
    {
      id: 'body-exfoliation',
      name: 'Full Body Exfoliation',
      category: 'Body Treatments',
      price: 55,
      duration: 60,
      description: 'Invigorating body scrub that removes dead skin cells and leaves the skin silky smooth and luminous.',
    },
    {
      id: 'luxury-body-wrap',
      name: 'Luxury Body Wrap',
      category: 'Body Treatments',
      price: 75,
      duration: 90,
      description: 'Nourishing body wrap treatment that detoxifies, hydrates and firms the skin for a radiant finish.',
    },
    {
      id: 'cellulite-treatment',
      name: 'Cellulite Body Treatment',
      category: 'Body Treatments',
      price: 65,
      duration: 60,
      description: 'Targeted treatment combining massage and specialist products to improve skin texture and reduce the appearance of cellulite.',
    },
    {
      id: 'leg-treatment',
      name: 'Leg & Foot Treatment',
      category: 'Body Treatments',
      price: 45,
      duration: 45,
      description: 'Revitalising treatment for tired legs and feet including exfoliation, massage and moisturisation.',
    },
    // ── Holistic Therapies ────────────────────────────────────────────────
    {
      id: 'sound-healing',
      name: 'Sound Healing Session',
      category: 'Holistic Therapies',
      price: 60,
      duration: 60,
      description: 'A deeply immersive session using singing bowls and sound frequencies to promote relaxation and energetic balance.',
    },
    {
      id: 'holistic-massage',
      name: 'Holistic Full Body Massage',
      category: 'Holistic Therapies',
      price: 65,
      duration: 60,
      description: 'Combines therapeutic massage with holistic principles, working with the body and mind to restore inner harmony.',
    },
    {
      id: 'kundalini-wellness',
      name: 'Kundalini Wellness Session',
      category: 'Holistic Therapies',
      price: 55,
      duration: 60,
      description: 'Kundalini-inspired techniques and breathwork to awaken energy, reduce stress and promote overall wellbeing.',
    },
    {
      id: 'reflexology',
      name: 'Reflexology',
      category: 'Holistic Therapies',
      price: 50,
      duration: 60,
      description: 'Therapeutic foot massage targeting reflex points that correspond to organs and systems throughout the body.',
    },
    // ── Hair Removal and Waxing ───────────────────────────────────────────
    {
      id: 'facial-waxing',
      name: 'Facial Waxing',
      category: 'Hair Removal and Waxing',
      price: 8,
      duration: 15,
      description: 'Professional facial waxing for smooth, hair-free skin. Includes lip, chin or eyebrows.',
    },
    {
      id: 'underarm-waxing',
      name: 'Underarm Waxing',
      category: 'Hair Removal and Waxing',
      price: 15,
      duration: 15,
      description: 'Quick and effective underarm waxing for long-lasting smooth skin.',
    },
    {
      id: 'half-leg-waxing',
      name: 'Half Leg Waxing',
      category: 'Hair Removal and Waxing',
      price: 20,
      duration: 30,
      description: 'Waxing for lower or upper leg, leaving skin smooth and hair-free.',
    },
    {
      id: 'full-leg-waxing',
      name: 'Full Leg Waxing',
      category: 'Hair Removal and Waxing',
      price: 35,
      duration: 45,
      description: 'Complete leg waxing treatment for long-lasting smooth results.',
    },
    {
      id: 'bikini-waxing',
      name: 'Bikini Waxing',
      category: 'Hair Removal and Waxing',
      price: 20,
      duration: 20,
      description: 'Precise and comfortable bikini waxing using professional technique.',
    },
    // ── Vitamin Treatments ────────────────────────────────────────────────
    {
      id: 'vitamin-b12',
      name: 'Vitamin B12 Injection',
      category: 'Vitamin Treatments',
      price: 25,
      duration: 30,
      description: 'Energising vitamin B12 injection to support energy levels, mental clarity and overall vitality.',
    },
    {
      id: 'vitamin-c',
      name: 'Vitamin C Injection',
      category: 'Vitamin Treatments',
      price: 30,
      duration: 30,
      description: 'High-dose vitamin C injection to support immune function and promote bright, healthy skin.',
    },
    {
      id: 'vitamin-d',
      name: 'Vitamin D Injection',
      category: 'Vitamin Treatments',
      price: 30,
      duration: 30,
      description: 'Vitamin D injection for bone health, mood support and immune system enhancement.',
    },
    {
      id: 'hay-fever',
      name: 'Hay Fever Relief Treatment',
      category: 'Vitamin Treatments',
      price: 40,
      duration: 30,
      description: 'Natural injection-based hay fever treatment to reduce allergic symptoms effectively and quickly.',
    },
  ],

  // Reviews/Testimonials
  reviews: [
    {
      id: 1,
      text: 'Beautiful brows, an excellent therapist and such a relaxing atmosphere.',
      author: 'Sarah M.',
      rating: 5,
    },
    {
      id: 2,
      text: 'I felt completely welcomed and comfortable throughout my treatment.',
      author: 'Emma L.',
      rating: 5,
    },
    {
      id: 3,
      text: 'The procedure was explained clearly, all my questions were answered and the final result was fantastic.',
      author: 'Jessica T.',
      rating: 5,
    },
    {
      id: 4,
      text: 'A professional service in a calm, friendly and relaxing environment.',
      author: 'Rachel K.',
      rating: 5,
    },
  ],

  // Professional Products
  products: [
    { name: 'Dermalogica', logo: '/placeholder-dermalogica.png' },
    { name: 'Olaplex', logo: '/placeholder-olaplex.png' },
    { name: 'Schwarzkopf Professional', logo: '/placeholder-schwarzkopf.png' },
    { name: 'Young Living', logo: '/placeholder-youngliving.png' },
  ],

  // Gallery Categories
  galleryCategories: [
    'Permanent Makeup',
    'Brows',
    'Lips',
    'Skin',
    'Facials',
    'Clinic Interior',
    'Team',
  ],

  // Gallery Images (placeholder structure - replace with actual image URLs)
  gallery: [
    { id: 1, category: 'Permanent Makeup', image: '/placeholder-gallery-1.jpg', alt: 'Permanent makeup results' },
    { id: 2, category: 'Brows', image: '/placeholder-gallery-2.jpg', alt: 'Brow lamination results' },
    { id: 3, category: 'Lips', image: '/placeholder-gallery-3.jpg', alt: 'Lip blush results' },
    { id: 4, category: 'Skin', image: '/placeholder-gallery-4.jpg', alt: 'Skin treatment results' },
    { id: 5, category: 'Facials', image: '/placeholder-gallery-5.jpg', alt: 'Facial treatment' },
    { id: 6, category: 'Clinic Interior', image: '/placeholder-gallery-6.jpg', alt: 'Clinic interior' },
    { id: 7, category: 'Team', image: '/placeholder-gallery-7.jpg', alt: 'Team photo' },
  ],

  // FAQ
  faqs: [
    {
      id: 'faq-1',
      question: 'How long do permanent makeup results last?',
      answer: 'Permanent makeup typically lasts 1-3 years depending on skin type, sun exposure, and lifestyle. We recommend touch-ups every 12-18 months to maintain colour and definition.',
    },
    {
      id: 'faq-2',
      question: 'Is permanent makeup safe?',
      answer: 'Yes, when performed by trained professionals using sterile equipment and high-quality pigments. Our team follows strict hygiene protocols and uses only approved products.',
    },
    {
      id: 'faq-3',
      question: 'What should I expect during my first visit?',
      answer: 'Your first appointment includes a consultation to understand your goals, skin assessment, and a patch test if applicable. We take time to answer all your questions and ensure you feel comfortable.',
    },
    {
      id: 'faq-4',
      question: 'Do you offer consultations?',
      answer: 'Absolutely! Consultations are an important part of our process. We offer complimentary consultations to discuss treatments, expectations, and pricing.',
    },
    {
      id: 'faq-5',
      question: 'What is your cancellation policy?',
      answer: 'We require 24 hours notice for cancellations. Cancellations made less than 24 hours before your appointment may incur a cancellation fee.',
    },
    {
      id: 'faq-6',
      question: 'Are there any contraindications for treatments?',
      answer: 'Some treatments may not be suitable during pregnancy, with certain medications, or specific skin conditions. We discuss this thoroughly during your consultation.',
    },
  ],

  // SEO
  seo: {
    title: 'New Era Beauty Clinic Heywood | Beauty, Skin and Wellness',
    description: 'Discover personalised beauty treatments, permanent makeup, facials, massage and holistic therapies at New Era Beauty Clinic in Heywood. Explore treatments and book online.',
    keywords: [
      'beauty clinic Heywood',
      'beauty salon Heywood',
      'permanent makeup Heywood',
      'lip blush Heywood',
      'brow lamination Heywood',
      'facial treatments Heywood',
      'massage Heywood',
      'Dermalogica facial Heywood',
      'skin clinic Heywood',
      'holistic treatments Heywood',
    ],
  },

  // Brand Philosophy
  philosophy: {
    headline: 'A New Approach to Beauty and Wellbeing',
    tagline: 'True beauty begins with a healthy body, a calm mind and personalised professional care.',
    description: 'At New Era Beauty Clinic, we believe that true beauty is not just about appearance. It is about feeling confident, healthy, and at peace with yourself.',
    values: [
      'Professional expertise',
      'Natural-looking results',
      'Personalised treatments',
      'Relaxation and calm',
      'Safety and cleanliness',
      'Warm, attentive service',
      'Beauty supported by physical and emotional wellbeing',
    ],
  },
};

export type SiteConfig = typeof siteConfig;
