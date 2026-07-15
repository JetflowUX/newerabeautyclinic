import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  text: string;
  author: string;
  rating: number;
  index?: number;
}

export function ReviewCard({ text, author, rating, index = 0 }: ReviewCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl p-6 md:p-8"
      style={{
        background: 'rgba(250, 248, 244, 0.7)',
        WebkitBackdropFilter: 'blur(12px) saturate(160%)',
        backdropFilter: 'blur(12px) saturate(160%)',
        border: '1px solid rgba(141, 155, 135, 0.2)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)' }}
    >
      {/* Decorative large quote mark */}
      <div
        className="absolute top-4 right-6 text-7xl font-serif leading-none select-none pointer-events-none"
        style={{ color: 'oklch(0.55 0.15 145 / 0.12)', fontFamily: 'Georgia, serif' }}
        aria-hidden
      >
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.06, type: 'spring', stiffness: 400 }}
          >
            <Star
              className={`w-4 h-4 ${i < rating ? 'fill-accent text-accent' : 'fill-muted text-muted'}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Review Text */}
      <p className="body-base text-foreground mb-5 italic leading-relaxed relative z-10">
        "{text}"
      </p>

      {/* Author with accent line */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-0.5 bg-accent rounded-full" />
        <p className="font-semibold text-foreground text-sm">{author}</p>
      </div>
    </motion.div>
  );
}
