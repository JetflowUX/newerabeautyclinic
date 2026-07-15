import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { Logo } from '@/components/shared/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, navLinks, currentPath }: MobileMenuProps) {
  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 lg:hidden bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden
          />

          {/* Slide-down panel */}
          <motion.div
            className="fixed inset-x-0 top-20 z-50 lg:hidden flex flex-col overflow-hidden"
            style={{
              background: 'var(--background)',
              borderBottom: '1px solid var(--border)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' as const }}
          >
            {/* Nav links */}
            <nav className="px-4 pt-4 pb-2" aria-label="Mobile navigation">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                    >
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center justify-between py-3 px-3 rounded-lg transition-colors duration-150"
                        style={{
                          color: active ? 'var(--color-accent)' : 'var(--color-foreground)',
                          background: active ? 'oklch(0.55 0.15 145 / 0.08)' : 'transparent',
                        }}
                      >
                        <span className="text-base font-medium">{link.label}</span>
                        {active && (
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Divider */}
            <div className="mx-4 h-px bg-border" />

            {/* Book Now CTA */}
            <div className="px-4 py-4">
              <a
                href={siteConfig.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="btn-primary btn-shimmer w-full text-center block"
              >
                Book an Appointment
              </a>
            </div>

            {/* Contact row */}
            <div className="px-4 pb-5 flex items-center gap-6 flex-wrap">
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.business.phone}
              </a>
              <a
                href={`https://instagram.com/${siteConfig.business.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                {siteConfig.business.instagram}
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${siteConfig.business.address.street}, ${siteConfig.business.address.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {siteConfig.business.address.street}, {siteConfig.business.address.city}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
