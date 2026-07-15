import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { siteConfig } from '@/config/siteConfig';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { Logo } from '@/components/shared/Logo';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Results', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) =>
    href === '/' ? location === '/' : location.startsWith(href);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        animate={
          isScrolled
            ? {
                paddingTop: '0px',
                paddingBottom: '0px',
              }
            : {
                paddingTop: '0px',
                paddingBottom: '0px',
              }
        }
        style={
          isScrolled
            ? {
                background: 'rgba(250, 248, 244, 0.88)',
                WebkitBackdropFilter: 'blur(20px) saturate(200%)',
                backdropFilter: 'blur(20px) saturate(200%)',
                borderBottom: '1px solid rgba(141, 155, 135, 0.18)',
                boxShadow: '0 2px 32px rgba(0,0,0,0.07)',
              }
            : {
                background: 'transparent',
              }
        }
      >
        {/* Top accent line — only visible when scrolled */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, oklch(0.55 0.15 145) 40%, oklch(0.8 0.1 25) 70%, transparent 100%)',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </AnimatePresence>

        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            aria-label="New Era Beauty Clinic — home"
          >
            <Logo size={38} showText={true} variant="light" className="hidden sm:flex" />
            <Logo size={34} showText={false} variant="light" className="sm:hidden" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 group"
                style={{
                  color: isActive(link.href)
                    ? 'var(--color-accent)'
                    : 'var(--color-foreground)',
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ color: 'var(--color-accent)' }}
              >
                {/* Hover bg pill */}
                <motion.span
                  className="absolute inset-0 rounded-lg -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ background: 'oklch(0.55 0.15 145 / 0.07)' }}
                  transition={{ duration: 0.15 }}
                />

                {link.label}

                {/* Active underline — shared layout */}
                {isActive(link.href) && (
                  <motion.span
                    className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-accent"
                    layoutId="nav-underline"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Right side — separator + CTA */}
          <motion.div
            className="hidden lg:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Vertical divider */}
            <div className="w-px h-5 bg-border" />

            <motion.a
              href={siteConfig.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-shimmer text-sm px-5 py-2.5"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Book Now
            </motion.a>
          </motion.div>

          {/* Mobile: phone + burger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-foreground/70 hover:text-accent transition-colors px-3 py-2"
            >
              {siteConfig.business.phone}
            </a>
            <motion.button
              className="relative w-10 h-10 flex items-center justify-center rounded-xl text-foreground transition-colors"
              style={{
                background: isMobileMenuOpen
                  ? 'oklch(0.55 0.15 145 / 0.12)'
                  : 'transparent',
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={location}
      />

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
