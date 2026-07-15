import { motion } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';

export interface TrustItem {
  label: string;
  value: string | number;
  icon: ReactNode;
  suffix?: string;
}

interface TrustStripProps {
  items: TrustItem[];
}

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
  const stringSuffix = typeof value === 'string' ? value.replace(/[0-9.]/g, '') : '';
  const [displayValue, setDisplayValue] = useState(isNumeric ? 0 : value);

  useEffect(() => {
    if (!isNumeric) return;
    let raf: number;
    let current = 0;
    const tick = () => {
      current += numValue / 50;
      if (current < numValue) {
        setDisplayValue(numValue % 1 !== 0 ? parseFloat(current.toFixed(1)) : Math.floor(current));
        raf = requestAnimationFrame(tick);
      } else {
        setDisplayValue(numValue);
      }
    };
    const t = setTimeout(() => { raf = requestAnimationFrame(tick); }, delay * 1000);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [numValue, isNumeric, delay]);

  return <>{displayValue}{stringSuffix || suffix}</>;
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
