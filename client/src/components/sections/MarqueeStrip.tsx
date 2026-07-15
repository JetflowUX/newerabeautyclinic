import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface MarqueeStripProps {
  items?: string[];
  direction?: 'left' | 'right';
  speed?: number;
  variant?: 'light' | 'dark';
}

const defaultItems = [
  'Permanent Makeup',
  'Microblading',
  'Lip Blush',
  'Skin Facials',
  'Dermaplaning',
  'Lash Lift',
  'Brow Lamination',
  'Hot Stone Massage',
  'Vitamin C Glow',
  'LED Therapy',
  'Body Wraps',
  'Holistic Therapies',
];

export function MarqueeStrip({
  items = defaultItems,
  direction = 'left',
  speed = 40,
  variant = 'light',
}: MarqueeStripProps) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];
  const isDark = variant === 'dark';

  const animationDuration = `${(items.length * speed)}s`;

  return (
    <div
      className="relative overflow-hidden py-4 border-y"
      style={{
        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(141,155,135,0.15)',
        background: isDark ? 'oklch(0.2 0.01 145)' : 'oklch(0.97 0.005 100)',
      }}
    >
      {/* Fade masks */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(to right, oklch(0.2 0.01 145), transparent)'
            : 'linear-gradient(to right, oklch(0.97 0.005 100), transparent)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(to left, oklch(0.2 0.01 145), transparent)'
            : 'linear-gradient(to left, oklch(0.97 0.005 100), transparent)',
        }}
      />

      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-${direction} ${animationDuration} linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-6 text-sm font-semibold uppercase tracking-widest select-none"
            style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'oklch(0.4 0.04 145)' }}
          >
            <Sparkles
              className="w-3 h-3 flex-shrink-0"
              style={{ color: 'oklch(0.55 0.15 145)' }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
