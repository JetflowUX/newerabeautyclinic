import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TrustItem {
  label: string;
  value: string | number;
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

  // Extract suffix already in string values like '100+' or '11+'
  const stringSuffix =
    typeof value === 'string' ? value.replace(/[0-9.]/g, '') : '';

  const [displayValue, setDisplayValue] = useState(isNumeric ? 0 : value);

  useEffect(() => {
    if (!isNumeric) return;

    let animationFrameId: number;
    let currentValue = 0;

    const animate = () => {
      currentValue += numValue / 50;
      if (currentValue < numValue) {
        setDisplayValue(
          numValue % 1 !== 0
            ? parseFloat(currentValue.toFixed(1))
            : Math.floor(currentValue),
        );
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(numValue);
      }
    };

    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [numValue, isNumeric, delay]);

  if (!isNumeric) {
    // Display non-numeric string values directly (e.g. 'European-Trained')
    return <>{value}</>;
  }

  return (
    <>
      {displayValue}
      {stringSuffix || suffix}
    </>
  );
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                  delay={index * 0.1}
                />
              </div>
              <p className="text-sm md:text-base text-foreground font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
