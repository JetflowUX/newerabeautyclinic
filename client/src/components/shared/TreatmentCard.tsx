import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTilt } from '@/hooks/useTilt';

interface TreatmentCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  index?: number;
}

export function TreatmentCard({
  title,
  description,
  image,
  href = '#',
  index = 0,
}: TreatmentCardProps) {
  const tiltRef = useTilt({ max: 6, scale: 1.02, speed: 500 });

  return (
    <motion.div
      ref={tiltRef}
      className="group overflow-hidden rounded-xl bg-card shadow-sm hover:shadow-xl transition-shadow duration-500"
      style={{ transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 md:h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Category badge — slides up on hover */}
        <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
            }}
          >
            View Treatments
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="heading-sm mb-3 text-foreground">{title}</h3>
        <p className="body-sm text-muted-foreground mb-5 leading-relaxed">{description}</p>

        {/* Link */}
        <motion.a
          href={href}
          className="inline-flex items-center gap-2 text-accent font-semibold text-sm group/link"
          whileHover={{ x: 2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          View Treatments
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </motion.a>
      </div>
    </motion.div>
  );
}
