import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewCard } from '@/components/shared/ReviewCard';

interface Review {
  id: number;
  text: string;
  author: string;
  rating: number;
}

interface ReviewCarouselProps {
  reviews: Review[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export function ReviewCarousel({
  reviews,
  autoplay = true,
  autoplayInterval = 5000,
}: ReviewCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, reviews.length]);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="relative">
      {/* Carousel — auto height, no fixed h */}
      <div className="relative min-h-[12rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
          >
            <ReviewCard
              text={reviews[current].text}
              author={reviews[current].author}
              rating={reviews[current].rating}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6">
        {/* Prev — 44px touch target */}
        <button
          onClick={prev}
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots — each has a 44px tall touch area via padding */}
        <div className="flex items-center gap-2 py-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="py-2 px-1 flex items-center justify-center"
              aria-label={`Go to review ${index + 1}`}
            >
              <motion.span
                className="block rounded-full bg-accent transition-all duration-300"
                animate={{
                  width: index === current ? 24 : 8,
                  height: 8,
                  opacity: index === current ? 1 : 0.35,
                }}
              />
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Next review"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
