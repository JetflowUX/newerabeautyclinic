import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { SplitText } from '@/components/shared/SplitText';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage: string;
  trustIndicators?: Array<{ icon?: string; text: string }>;
}

export function Hero({
  eyebrow = 'BEAUTY, SKIN AND WELLBEING IN HEYWOOD',
  headline = 'Feel Beautiful. Look Naturally You.',
  subheadline = 'Personalised beauty, skincare, permanent makeup and holistic treatments designed to help you look radiant, feel confident and enjoy a moment of complete calm.',
  primaryButtonText = 'Book Your Treatment',
  secondaryButtonText = 'Explore Treatments',
  backgroundImage,
  trustIndicators = [
    { text: '4.9-star client rating' },
    { text: '100+ verified reviews' },
    { text: 'Experienced beauty professionals' },
    { text: 'Personalised consultations' },
  ],
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const magnetic = useMagnetic();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax on the background image
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  // Content drifts up slightly as you scroll
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '5rem' }}
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0 scale-110"
        style={{ y: bgY }}
      >
        {backgroundImage && (
          <motion.img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            style={{ transformOrigin: 'center' }}
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.06] }}
            transition={{ duration: 22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        )}
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/60 to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </motion.div>

      {/* Floating decorative orbs — hidden on mobile to avoid overflow */}
      <motion.div
        className="hidden sm:block absolute top-1/4 right-[15%] w-72 h-72 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, oklch(0.55 0.15 145 / 0.14) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hidden sm:block absolute bottom-1/4 right-[30%] w-48 h-48 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, oklch(0.8 0.1 25 / 0.12) 0%, transparent 70%)',
          filter: 'blur(36px)',
        }}
        animate={{ scale: [1, 1.22, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Content — scroll-driven drift */}
      <motion.div
        className="container relative z-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {eyebrow}
          </motion.p>

          {/* Headline — SplitText word reveal */}
          <h1
            className="heading-lg mb-6 text-foreground"
            style={{ lineHeight: 1.1 }}
          >
            <SplitText text={headline} by="words" delay={0.25} tag="span" reveal="blur" />
          </h1>

          {/* Subheadline */}
          <motion.p
            className="body-lg text-muted-foreground mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          >
            <motion.a
              ref={magnetic.ref}
              href={siteConfig.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-shimmer text-center"
              style={{ x: magnetic.x, y: magnetic.y }}
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {primaryButtonText}
            </motion.a>
            <motion.a
              href="/treatments"
              className="btn-outline text-center"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {secondaryButtonText}
            </motion.a>
          </motion.div>

          {/* Trust indicators — glassmorphism panel */}
          <motion.div
            className="inline-flex flex-col gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: 'rgba(250, 248, 244, 0.65)',
              WebkitBackdropFilter: 'blur(16px) saturate(180%)',
              backdropFilter: 'blur(16px) saturate(180%)',
              border: '1px solid rgba(250, 248, 244, 0.4)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{indicator.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
