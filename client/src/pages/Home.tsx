import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { MarqueeStrip } from '@/components/sections/MarqueeStrip';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TreatmentGrid } from '@/components/shared/TreatmentGrid';
import { ReviewCarousel } from '@/components/shared/ReviewCarousel';
import { BookingCTA } from '@/components/sections/BookingCTA';
import { LocationSection } from '@/components/sections/LocationSection';

export default function Home() {
  const trustItems = [
    { label: 'Client Rating', value: siteConfig.trust.rating },
    { label: 'Verified Reviews', value: siteConfig.trust.reviews },
    { label: 'Years of Experience', value: siteConfig.trust.experience },
    { label: 'European-Trained Team', value: siteConfig.trust.team },
    { label: 'Premium Products', value: siteConfig.trust.products },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        backgroundImage="/placeholder-hero.jpg"
        headline="Feel Beautiful. Look Naturally You."
        subheadline="Personalised beauty, skincare, permanent makeup and holistic treatments designed to help you look radiant, feel confident and enjoy a moment of complete calm."
      />

      {/* Trust Strip */}
      <TrustStrip items={trustItems} />

      {/* Treatment Marquee */}
      <MarqueeStrip direction="left" />

      {/* Introduction Section */}
      <section className="section-spacing bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="rounded-lg overflow-hidden h-96"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/placeholder-intro.jpg"
                alt="Clinic interior"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.p className="eyebrow mb-3" variants={itemVariants}>
                WELCOME TO NEW ERA
              </motion.p>
              <motion.h2 className="heading-md mb-6" variants={itemVariants}>
                Beauty That Begins With How You Feel
              </motion.h2>
              <motion.p className="body-lg text-muted-foreground mb-8" variants={itemVariants}>
                New Era Beauty Clinic is a welcoming beauty and wellness destination in the heart of Heywood. Our treatments go beyond appearance. We combine professional expertise, carefully selected products and personalised care to help every client feel confident, restored and naturally beautiful.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <a href="/team" className="btn-primary btn-shimmer text-center">
                  Meet Our Team
                </a>
                <a href="/about" className="btn-outline text-center">
                  Discover Our Philosophy
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            title="Treatments Created Around You"
            subtitle="From subtle permanent makeup to advanced facials and deeply restorative massage, every treatment is tailored to your needs."
            className="mb-12"
          />
          <TreatmentGrid treatments={siteConfig.featuredTreatments} columns={3} />
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="/treatments" className="btn-outline">
              View All Treatments
            </a>
          </motion.div>
        </div>
      </section>

      {/* Signature Experience */}
      <section className="section-spacing bg-dark" style={{ color: 'oklch(0.95 0.002 70)' }}>
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-3">THE NEW ERA EXPERIENCE</p>
            <h2 className="heading-md">More Than a Treatment</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Personalised',
                description: 'Every appointment begins with understanding your goals, preferences and concerns.',
              },
              {
                title: 'Professional',
                description: 'Treatments are delivered by trained professionals committed to high standards and continued education.',
              },
              {
                title: 'Restorative',
                description: 'The clinic provides a peaceful environment where clients can slow down and feel cared for.',
              },
              {
                title: 'Natural',
                description: 'Enhancements are designed to complement your existing features rather than overpower them.',
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="heading-sm mb-4">{pillar.title}</h3>
                <p className="body-sm" style={{ color: 'oklch(0.78 0.008 70)' }}>{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark marquee between sections */}
      <MarqueeStrip direction="right" variant="dark" />

      {/* Reviews Section */}
      <section className="section-spacing bg-secondary">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-3">CLIENT EXPERIENCES</p>
            <h2 className="heading-md mb-6">Loved by Clients Across Heywood</h2>
            <div className="inline-block">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {siteConfig.trust.rating} out of 5
              </p>
              <p className="text-muted-foreground">
                Based on more than {siteConfig.trust.reviews} verified reviews
              </p>
            </div>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <ReviewCarousel reviews={siteConfig.reviews} />
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="/reviews" className="btn-outline">
              Read More Reviews
            </a>
          </motion.div>
        </div>
      </section>

      {/* Professional Products */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            title="Professional Products. Thoughtful Care."
            subtitle="We carefully select professional products that support treatment quality, client comfort and beautiful results."
            className="mb-12"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {siteConfig.products?.map((product, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-6 bg-secondary rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="font-semibold text-center text-foreground">
                  {product.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section-spacing bg-secondary">
        <div className="container">
          <SectionHeading
            title="Your Appointment, Made Simple"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Treatment',
                description: 'Explore the service collection and select what feels right for you.',
              },
              {
                step: '2',
                title: 'Book Online',
                description: 'Choose an available therapist, date and appointment time.',
              },
              {
                step: '3',
                title: 'Visit the Clinic',
                description: 'Arrive at our welcoming York Street clinic and let our team take care of you.',
              },
              {
                step: '4',
                title: 'Enjoy Your Results',
                description: 'Receive personalised aftercare guidance and enjoy your treatment results.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>

                <h3 className="heading-sm mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>

                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-spacing">
        <LocationSection />
      </section>

      {/* Final CTA */}
      <BookingCTA backgroundImage="/placeholder-cta.jpg" />
    </>
  );
}
