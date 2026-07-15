/**
 * TypeScript types for New Era Beauty Clinic configuration
 * Ensures type safety across all data structures
 */

export interface Address {
  street: string;
  city: string;
  county: string;
  postcode: string;
  country: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  instagram: string;
  address: Address;
  coordinates: Coordinates;
}

export interface BookingConfig {
  url: string;
  platform: string;
}

export interface Hours {
  open: string;
  close: string;
  closed: boolean;
}

export interface OpeningHours {
  [key: string]: Hours;
  monday: Hours;
  tuesday: Hours;
  wednesday: Hours;
  thursday: Hours;
  friday: Hours;
  saturday: Hours;
  sunday: Hours;
}

export interface TrustMetrics {
  rating: number;
  reviews: string;
  experience: string;
  team: string;
  products: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  services: string[];
  image: string;
}

export interface FeaturedTreatment {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  href?: string;
}

export interface Treatment {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: number;
  description: string;
}

export interface Review {
  id: number;
  text: string;
  author: string;
  rating: number;
}

export interface GalleryImage {
  id: string | number;
  src?: string;
  image?: string;
  alt: string;
  category: string;
  title?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Product {
  name: string;
  logo: string;
}

export interface Philosophy {
  headline: string;
  tagline: string;
  values: string[];
  description: string;
}

export interface SignatureExperience {
  title: string;
  description: string;
  icon?: string;
}

export interface BookingStep {
  number: number;
  title: string;
  description: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface SiteConfig {
  business: BusinessInfo;
  booking: BookingConfig;
  hours: OpeningHours;
  trust: TrustMetrics;
  team: TeamMember[];
  featuredTreatments: FeaturedTreatment[];
  treatments: Treatment[];
  reviews: Review[];
  products?: Product[];
  galleryCategories?: string[];
  gallery: GalleryImage[];
  faqs: FAQ[];
  seo?: SEO;
  philosophy?: Philosophy;
  signatureExperience?: SignatureExperience[];
  bookingSteps?: BookingStep[];
}
