import { motion } from 'framer-motion';
import { Phone, MapPin, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function MobileBottomBar() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 md:hidden bg-background border-t border-border z-40"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Call */}
        <a
          href={`tel:${siteConfig.business.phone}`}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 hover:bg-secondary transition-colors"
        >
          <Phone className="w-5 h-5 text-accent" />
          <span className="text-xs font-semibold">Call</span>
        </a>

        {/* Directions */}
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            `${siteConfig.business.address.street}, ${siteConfig.business.address.city}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 hover:bg-secondary transition-colors border-l border-r border-border"
        >
          <MapPin className="w-5 h-5 text-accent" />
          <span className="text-xs font-semibold">Directions</span>
        </a>

        {/* Book Now */}
        <a
          href={siteConfig.booking.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 hover:bg-secondary transition-colors"
        >
          <Calendar className="w-5 h-5 text-accent" />
          <span className="text-xs font-semibold">Book Now</span>
        </a>
      </div>
    </motion.div>
  );
}
