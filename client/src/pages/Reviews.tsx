import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ReviewCard } from '@/components/shared/ReviewCard';
import { BookingCTA } from '@/components/sections/BookingCTA';

export default function Reviews() {
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
            <p className="eyebrow mb-3">CLIENT FEEDBACK</p>
            <h1 className="heading-lg mb-6">Loved by Our Clients</h1>
            <div className="inline-block">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {siteConfig.trust.rating} out of 5
              </p>
              <p className="text-muted-foreground">
                Based on more than {siteConfig.trust.reviews} verified reviews
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                text={review.text}
                author={review.author}
                rating={review.rating}
                index={index}
              />
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 pt-16 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-accent mb-2">
                  {siteConfig.trust.reviews}
                </p>
                <p className="text-foreground font-semibold">Verified Reviews</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">
                  {siteConfig.trust.rating}★
                </p>
                <p className="text-foreground font-semibold">Average Rating</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">
                  {siteConfig.trust.experience}+
                </p>
                <p className="text-foreground font-semibold">Years of Experience</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href={siteConfig.booking.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-secondary">
        <div className="container">
          <SectionHeading
            title="Why Our Clients Choose Us"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Professional Care', description: 'Trained professionals committed to your satisfaction' },
              { title: 'Personalised Approach', description: 'Every treatment tailored to your unique needs' },
              { title: 'Premium Products', description: 'High-quality professional products used throughout' },
              { title: 'Relaxing Environment', description: 'Calm, welcoming clinic designed for your comfort' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="heading-sm mb-2">{item.title}</h3>
                <p className="body-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <BookingCTA />
    </>
  );
}
