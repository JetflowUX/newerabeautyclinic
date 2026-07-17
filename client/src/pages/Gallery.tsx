import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { BookingCTA } from '@/components/sections/BookingCTA';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (!selectedCategory) return siteConfig.gallery;
    return siteConfig.gallery.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredImages.length);
  };
  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <>
      {/* Hero */}
      <section className="min-h-[50vh] md:min-h-[60vh] bg-secondary flex items-center pt-20">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-3">GALLERY</p>
            <h1 className="heading-lg mb-6">The Treatments We Offer.</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              A look at the treatments in our collection and the calm, professional environment we deliver them in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-spacing">
        <div className="container">
          {/* Filter pills — min-h-11 for 44px touch target */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[null, ...(siteConfig.galleryCategories ?? [])].map((cat) => (
              <button
                key={cat ?? 'all'}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-11 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-foreground hover:bg-border'
                }`}
              >
                {cat ?? 'All'}
              </button>
            ))}
          </motion.div>

          {/* Gallery grid — 16:9 aspect ratio tiles */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.button
                  key={image.id}
                  className="relative overflow-hidden rounded-xl w-full text-left"
                  style={{ aspectRatio: '4/3' }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onClick={() => setSelectedIndex(index)}
                  whileHover={{ scale: 1.02 }}
                  aria-label={`View ${image.category} image`}
                >
                  <img
                    src={image.image}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Overlay — always visible on touch, hover on pointer */}
                  <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 sm:opacity-0 sm:hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-semibold">{image.category}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Photography here is illustrative of the treatments we offer rather than of individual
            clients. Results vary from person to person, and a consultation may be required before treatment.
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close — 44px target */}
            <button
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            {filteredImages.length > 1 && (
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Image */}
            <motion.div
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-3"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
              <p className="text-white/80 text-sm font-medium">{selectedImage.category}</p>
              <p className="text-white/40 text-xs">
                {(selectedIndex ?? 0) + 1} / {filteredImages.length}
              </p>
            </motion.div>

            {/* Next */}
            {filteredImages.length > 1 && (
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <BookingCTA />
    </>
  );
}
