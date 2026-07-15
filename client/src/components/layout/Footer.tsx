import { motion } from 'framer-motion';
import { Instagram, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { Logo } from '@/components/shared/Logo';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' as const },
  }),
};

const formatTime = (t: string) => {
  const [hr] = t.split(':');
  const n = parseInt(hr);
  const min = t.split(':')[1];
  return `${n % 12 || 12}:${min} ${n >= 12 ? 'pm' : 'am'}`;
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Treatments', href: '/treatments' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
  ];

  const secondaryLinks = [
    { label: 'Reviews', href: '/reviews' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer
      style={{
        background: 'oklch(0.13 0.012 145)',
        color: 'oklch(0.92 0.004 70)',
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, oklch(0.55 0.15 145 / 0.6), oklch(0.8 0.1 25 / 0.4), transparent)',
        }}
      />

      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>

        {/* Upper section: brand + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand — takes more space */}
          <motion.div
            className="lg:col-span-4"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="mb-5">
              <Logo size={42} showText={true} variant="dark" />
            </div>
            <p
              className="text-sm leading-relaxed mb-8 max-w-xs"
              style={{ color: 'oklch(0.65 0.01 70)' }}
            >
              {siteConfig.business.tagline}
            </p>

            {/* Social + CTA */}
            <div className="flex items-center gap-3 mb-8">
              <a
                href={`https://instagram.com/${siteConfig.business.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'oklch(0.65 0.01 70)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'oklch(0.75 0.1 145)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'oklch(0.65 0.01 70)')}
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'oklch(1 0 0 / 0.06)' }}
                >
                  <Instagram className="w-4 h-4" />
                </span>
                {siteConfig.business.instagram}
              </a>
            </div>

            <a
              href={siteConfig.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-lg transition-all"
              style={{
                background: 'oklch(0.55 0.15 145)',
                color: 'oklch(0.98 0.001 70)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'oklch(0.62 0.14 145)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'oklch(0.55 0.15 145)'; }}
            >
              Book an Appointment
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Spacer on large screens */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Navigation columns */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'oklch(0.55 0.1 145)' }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'oklch(0.65 0.01 70)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'oklch(0.75 0.1 145)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'oklch(0.65 0.01 70)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {secondaryLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'oklch(0.65 0.01 70)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'oklch(0.75 0.1 145)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'oklch(0.65 0.01 70)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'oklch(0.55 0.1 145)' }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="flex items-start gap-3 text-sm transition-colors"
                  style={{ color: 'oklch(0.65 0.01 70)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'oklch(0.75 0.1 145)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'oklch(0.65 0.01 70)')}
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.55 0.1 145)' }} />
                  {siteConfig.business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="flex items-start gap-3 text-sm transition-colors break-all"
                  style={{ color: 'oklch(0.65 0.01 70)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'oklch(0.75 0.1 145)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'oklch(0.65 0.01 70)')}
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.55 0.1 145)' }} />
                  {siteConfig.business.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${siteConfig.business.address.street}, ${siteConfig.business.address.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm transition-colors"
                  style={{ color: 'oklch(0.65 0.01 70)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'oklch(0.75 0.1 145)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'oklch(0.65 0.01 70)')}
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'oklch(0.55 0.1 145)' }} />
                  <span>
                    {siteConfig.business.address.street}<br />
                    {siteConfig.business.address.city}, {siteConfig.business.address.postcode}
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'oklch(0.55 0.1 145)' }}
            >
              Hours
            </h4>
            <ul className="space-y-2.5">
              {Object.entries(siteConfig.hours).map(([day, h]) => {
                const label = day.charAt(0).toUpperCase() + day.slice(1);
                return (
                  <li key={day} className="flex justify-between items-center text-sm gap-4">
                    <span style={{ color: 'oklch(0.65 0.01 70)' }}>{label}</span>
                    {h.closed ? (
                      <span style={{ color: 'oklch(0.45 0.06 25)' }}>Closed</span>
                    ) : (
                      <span style={{ color: 'oklch(0.72 0.1 145)' }}>
                        {formatTime(h.open)}–{formatTime(h.close)}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="my-12"
          style={{ height: '1px', background: 'oklch(1 0 0 / 0.07)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs" style={{ color: 'oklch(0.45 0.01 70)' }}>
          <p>© {currentYear} New Era Beauty Clinic. All rights reserved.</p>
          <div className="flex gap-5">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms & Conditions', href: '/terms' },
              { label: 'Treatment Disclaimer', href: '/disclaimer' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors"
                style={{ color: 'oklch(0.45 0.01 70)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'oklch(0.72 0.1 145)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'oklch(0.45 0.01 70)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
