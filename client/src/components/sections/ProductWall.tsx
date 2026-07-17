import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

interface ProductWallProps {
  products: { name: string }[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/**
 * Elegant "brand wall" for the professional products the clinic uses. Each brand
 * name sits in a refined card that lifts, warms its border to the sage accent,
 * and reveals a soft glow on hover — a calmer, more premium treatment than a row
 * of flat pills. Names are set in type (no logo images) to avoid trademark use.
 */
export function ProductWall({ products }: ProductWallProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.name}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card px-5 py-8 md:py-10 text-center transition-colors duration-300 hover:border-accent/40"
          variants={cardVariants}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        >
          {/* Soft radial glow, revealed on hover */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(120% 80% at 50% 0%, oklch(0.55 0.15 145 / 0.09) 0%, transparent 70%)',
            }}
            aria-hidden
          />

          <div className="relative z-10 flex flex-col items-center gap-3">
            <span className="text-accent/40 transition-colors duration-300 group-hover:text-accent">
              <Leaf className="w-4 h-4" />
            </span>
            <p className="font-serif text-lg md:text-xl leading-tight text-foreground">
              {product.name}
            </p>
            {/* Divider that grows and warms on hover */}
            <div className="h-px w-8 rounded-full bg-accent/30 transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
