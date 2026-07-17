import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface TrustItem {
  label: string;
  value: string | number;
  icon: ReactNode;
  suffix?: string;
}

interface TrustStripProps {
  items: TrustItem[];
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function AnimatedCounter({
  value,
  suffix = '',
  delay = 0,
}: {
  value: string | number;
  suffix?: string;
  delay?: number;
}) {
  const numValue = typeof value === 'number' ? value : parseFloat(String(value));
  const isNumeric = !isNaN(numValue);
  const hasDecimals = numValue % 1 !== 0;
  const stringSuffix = typeof value === 'string' ? value.replace(/[0-9.]/g, '') : '';
  const prefersReducedMotion = useReducedMotion();

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [displayValue, setDisplayValue] = useState<number | string>(isNumeric ? 0 : value);

  useEffect(() => {
    if (!isNumeric) return;
    // Respect reduced motion, and only run once the counter scrolls into view.
    if (prefersReducedMotion) {
      setDisplayValue(numValue);
      return;
    }
    if (!inView) return;

    let raf: number;
    let startTs: number | null = null;
    const duration = 1400; // ms — eased count-up

    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const eased = easeOutCubic(progress) * numValue;
      setDisplayValue(hasDecimals ? parseFloat(eased.toFixed(1)) : Math.floor(eased));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplayValue(numValue);
      }
    };

    const t = setTimeout(() => { raf = requestAnimationFrame(tick); }, delay * 1000);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [numValue, isNumeric, hasDecimals, inView, prefersReducedMotion, delay]);

  return <span ref={ref}>{displayValue}{stringSuffix || suffix}</span>;
}

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <motion.section
      className="bg-secondary py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {items.map((item, index) => {
            const numValue = typeof item.value === 'number'
              ? item.value
              : parseFloat(String(item.value));
            const isNumeric = !isNaN(numValue);

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' as const }}
              >
                {/* Icon badge */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'oklch(0.55 0.15 145 / 0.12)' }}
                >
                  <span className="text-accent [&>svg]:w-5 [&>svg]:h-5">
                    {item.icon}
                  </span>
                </div>

                {/* Stat */}
                <p className="text-3xl md:text-4xl font-bold text-accent leading-none text-center">
                  {isNumeric
                    ? <AnimatedCounter value={item.value} suffix={item.suffix} delay={index * 0.1} />
                    : item.value
                  }
                </p>

                {/* Label */}
                <p className="text-xs md:text-sm text-muted-foreground font-medium leading-snug text-center">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
