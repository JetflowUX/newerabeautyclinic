import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { useMagnetic } from '@/hooks/useMagnetic';
import { Phone } from 'lucide-react';

interface BookingCTAProps {
  headline?: string;
  subheadline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
}

export function BookingCTA({
  headline = 'Ready for Your New Era?',
  subheadline = 'Take time for yourself with personalised beauty and wellness treatments delivered in a calm, professional environment.',
  primaryButtonText = 'Book an Appointment',
  secondaryButtonText = `Call ${siteConfig.business.phone}`,
  backgroundImage,
}: BookingCTAProps) {
  const magnetic = useMagnetic();
  return (
    <motion.section
      className="relative py-20 md:py-32 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background — image or animated gradient */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ background: 'oklch(0.2 0.01 145)' }}>
          {/* Animated soft gradient blobs */}
          <motion.div
            className="absolute -top-1/2 -left-1/4 w-[80vw] h-[80vw] rounded-full"
            style={{ background: 'radial-gradient(circle, oklch(0.4 0.1 145 / 0.5) 0%, transparent 60%)' }}
            animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-1/3 right-0 w-[60vw] h-[60vw] rounded-full"
            style={{ background: 'radial-gradient(circle, oklch(0.55 0.12 25 / 0.35) 0%, transparent 60%)' }}
            animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full"
            style={{ background: 'radial-gradient(circle, oklch(0.6 0.1 145 / 0.2) 0%, transparent 60%)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <motion.h2
          className="heading-md mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {headline}
        </motion.h2>

        <motion.p
          className="body-lg max-w-2xl mx-auto mb-10 text-white/85"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subheadline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            ref={magnetic.ref}
            href={siteConfig.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-shimmer"
            style={{ x: magnetic.x, y: magnetic.y }}
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            {primaryButtonText}
          </motion.a>
          <motion.a
            href={`tel:${siteConfig.business.phone}`}
            className="px-6 py-3 border-2 border-white/70 text-white font-semibold rounded-lg transition-colors duration-200 hover:bg-white hover:text-foreground active:scale-95 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Phone className="w-5 h-5" />
            {secondaryButtonText}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
