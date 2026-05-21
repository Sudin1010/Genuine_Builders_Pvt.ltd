import type { LucideIcon } from "lucide-react";
import {
  AirVent,
  BrickWall,
  Brush,
  Camera,
  Cctv,
  ChefHat,
  Droplets,
  Hammer,
  Lightbulb,
  Facebook,
  Instagram,
  Music2,
  Paintbrush,
  Phone,
  Plug,
  ShieldCheck,
  Sofa,
  Wrench
} from "lucide-react";

export const siteConfig = {
  name: "Genuine Suppliers & Builders Pvt. Ltd.",
  shortName: "Genuine Builders",
  tagline: "Building Trust, Constructing Future",
  ceo: "Saugat Basnet",
  phonePrimary: "9860484821",
  phoneSecondary: "9800746590",
  email: "suppliersg38@gmail.com",
  location: "Lalitpur Metropolitan-25, Bhainsepati, Lalitpur, Nepal",
  baseUrl: "https://genuinebuilders.com",
  whatsappNumber: "9779860484821",
  mapQuery: "Lalitpur Metropolitan-25 Bhainsepati Lalitpur Nepal"
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: Music2
  }
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Electric & Electronics",
    description: "Safe wiring, panel work, troubleshooting, and reliable electrical upgrades for homes and businesses.",
    icon: Plug
  },
  {
    title: "Plumbing",
    description: "Leak repair, pipe fitting, bathroom systems, and clean water-flow solutions installed with care.",
    icon: Droplets
  },
  {
    title: "Tiles & Marble",
    description: "Precise surface preparation, installation, finishing, and detailing for premium floors and walls.",
    icon: BrickWall
  },
  {
    title: "Painting",
    description: "Interior and exterior painting with proper surface treatment and sharp, durable finishes.",
    icon: Paintbrush
  },
  {
    title: "False Ceiling / Cement Board",
    description: "Modern ceiling, partition, and cement board work for cleaner rooms and refined interiors.",
    icon: Hammer
  },
  {
    title: "CCTV Installation",
    description: "Camera placement, wiring, configuration, and security coverage for residential and commercial sites.",
    icon: Cctv
  },
  {
    title: "Furniture & Modular Kitchen",
    description: "Custom cabinetry, modular kitchen planning, storage, and functional furniture installation.",
    icon: Sofa
  },
  {
    title: "AC Installation & Servicing",
    description: "Installation, maintenance, diagnostics, and servicing for efficient cooling performance.",
    icon: AirVent
  },
  {
    title: "Metal & Aluminium Work",
    description: "Windows, railings, frames, partitions, and durable metalwork built to measured specifications.",
    icon: Wrench
  },
  {
    title: "Parqueting",
    description: "Warm wood flooring installation, repair, polishing, and finishing for elegant interiors.",
    icon: Brush
  },
  {
    title: "Waterproofing",
    description: "Terrace, bathroom, basement, and leakage protection using dependable waterproofing systems.",
    icon: ShieldCheck
  },
  {
    title: "Microwave & Fridge Repair",
    description: "Appliance diagnosis and repair support to keep everyday systems running smoothly.",
    icon: ChefHat
  }
];

export const stats = [
  { value: "12+", label: "Core service categories" },
  { value: "2", label: "Direct inquiry lines" },
  { value: "24h", label: "Fast response mindset" },
  { value: "100%", label: "Quality-first supervision" }
];

export const projects = [
  {
    title: "Premium Residential Finishing",
    category: "Interior works",
    location: "Lalitpur",
    image: "/images/hero-premium-interior.webp",
    alt: "Modern residential interior finishing with tile, lighting, and paint work"
  },
  {
    title: "Commercial Electrical Upgrade",
    category: "Electric & CCTV",
    location: "Kathmandu Valley",
    image: "/projects/electrical-upgrade.svg",
    alt: "Commercial electrical and surveillance installation project"
  },
  {
    title: "Modular Kitchen Installation",
    category: "Furniture & kitchen",
    location: "Bhainsepati",
    image: "/images/project-modular-kitchen.webp",
    alt: "Modular kitchen cabinet and countertop installation"
  },
  {
    title: "Professional Service Team",
    category: "Electric, CCTV, AC & plumbing",
    location: "Kathmandu Valley",
    image: "/images/project-service-technicians.webp",
    alt: "Professional technicians handling electrical, CCTV, AC, and plumbing service"
  },
  {
    title: "Waterproof Terrace System",
    category: "Waterproofing",
    location: "Lalitpur",
    image: "/projects/waterproof-terrace.svg",
    alt: "Rooftop waterproofing and surface protection project"
  },
  {
    title: "Office Ceiling & Lighting",
    category: "False ceiling",
    location: "Patan",
    image: "/projects/office-ceiling.svg",
    alt: "Modern office false ceiling and lighting installation"
  },
  {
    title: "Metal & Aluminium Fabrication",
    category: "Fabrication",
    location: "Lalitpur",
    image: "/projects/aluminium-work.svg",
    alt: "Metal and aluminium window and railing fabrication"
  }
];

export const featuredServices = services.slice(0, 6);

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone: string) {
  return `tel:+977${phone}`;
}

export const defaultWhatsappMessage = `Hello ${siteConfig.shortName}, I would like to inquire about your construction and maintenance services.`;

export const quickContacts = [
  { label: siteConfig.phonePrimary, href: telLink(siteConfig.phonePrimary), icon: Phone },
  { label: "WhatsApp", href: whatsappLink(defaultWhatsappMessage), icon: Camera },
  { label: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Lightbulb }
];
