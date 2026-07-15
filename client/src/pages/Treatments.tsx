import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { BookingCTA } from '@/components/sections/BookingCTA';

export default function Treatments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(siteConfig.treatments.map((t) => t.category));
    return Array.from(cats).sort();
  }, []);

  // Filter treatments
  const filteredTreatments = useMemo(() => {
    return siteConfig.treatments.filter((treatment) => {
      const matchesSearch =
        treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        !selectedCategory || treatment.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-secondary flex items-center pt-20">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-3">OUR SERVICES</p>
            <h1 className="heading-lg mb-6">Explore Our Treatments</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              From permanent makeup to facials, massage and holistic therapies, discover the perfect treatment for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-spacing">
        <div className="container">
          {/* Search Bar */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`min-h-11 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-foreground hover:bg-border'
                }`}
              >
                All Treatments
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-11 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-foreground hover:bg-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            className="text-center text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showing {filteredTreatments.length} treatment{filteredTreatments.length !== 1 ? 's' : ''}
          </motion.p>

          {/* Treatments Grid */}
          {filteredTreatments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTreatments.map((treatment, index) => (
                <motion.div
                  key={treatment.id}
                  className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="heading-sm mb-2 text-foreground">
                    {treatment.name}
                  </h3>
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                    {treatment.category}
                  </p>
                  <p className="body-sm text-muted-foreground mb-4">
                    {treatment.description}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">From</p>
                      <p className="font-bold text-accent">
                        £{treatment.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">
                        {treatment.duration} min
                      </p>
                    </div>
                  </div>
                  <a
                    href={siteConfig.booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center btn-outline text-sm"
                  >
                    Book This Treatment
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground text-lg">
                No treatments found matching your search.
              </p>
            </motion.div>
          )}

          {/* Disclaimer */}
          <motion.p
            className="text-center text-xs text-muted-foreground mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Prices and availability may change. Please confirm current details through the online booking system.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <BookingCTA />
    </>
  );
}
