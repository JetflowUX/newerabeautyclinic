import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function LocationSection() {
  const { address, phone, coordinates } = siteConfig.business;

  return (
    <motion.section
      className="section-spacing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">VISIT US</p>
          <h2 className="heading-md mb-4">Your Beauty Destination in Heywood</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden h-64 sm:h-80 md:h-96 shadow-lg border border-border">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="New Era Beauty Clinic location"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lng - 0.018}%2C${coordinates.lat - 0.009}%2C${coordinates.lng + 0.018}%2C${coordinates.lat + 0.009}&layer=mapnik&marker=${coordinates.lat}%2C${coordinates.lng}`}
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address.street}, ${address.city}, ${address.postcode}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-accent transition-colors text-right"
            >
              Open in Google Maps ↗
            </a>
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Address */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">
                  {address.street}
                  <br />
                  {address.city}, {address.county}
                  <br />
                  {address.postcode}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Conveniently located near the York Street bus stop.
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <a
                  href={`tel:${phone}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {phone}
                </a>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${address.street}, ${address.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={`tel:${phone}`}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Clinic
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
