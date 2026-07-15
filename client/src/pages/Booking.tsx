import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';

export default function Booking() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading-lg mb-6">Book Your Treatment</h1>
        <p className="body-lg text-muted-foreground mb-8">
          We're excited to help you book your perfect treatment. Click the button below to access our online booking system.
        </p>
        <a
          href={siteConfig.booking.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Book Now on {siteConfig.booking.platform}
        </a>
        <p className="body-base text-muted-foreground mt-8">
          Prefer to call? Contact us at{' '}
          <a href={`tel:${siteConfig.business.phone}`} className="text-accent hover:underline">
            {siteConfig.business.phone}
          </a>
        </p>
      </motion.div>
    </div>
  );
}
