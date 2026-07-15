import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TreatmentGrid } from '@/components/shared/TreatmentGrid';
import { BookingCTA } from '@/components/sections/BookingCTA';

export default function PermanentMakeup() {
  const permanentMakeupTreatments = siteConfig.treatments
    .filter((t) => t.category === 'Permanent Makeup')
    .map((t) => ({
      id: t.id,
      title: t.name,
      description: t.description,
      image: '/placeholder-treatment.jpg',
    }));

  // If no permanent makeup treatments in config, show featured ones
  const displayTreatments = permanentMakeupTreatments.length > 0
    ? permanentMakeupTreatments
    : siteConfig.featuredTreatments.filter((t) => t.category === 'Permanent Makeup')

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
            <p className="eyebrow mb-3">PERMANENT MAKEUP</p>
            <h1 className="heading-lg mb-6">Semi-Permanent Beauty Enhancement</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our range of professional permanent makeup treatments designed to enhance your natural features and save you time every morning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-spacing">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md mb-4">What is Permanent Makeup?</h2>
            <p className="body-lg text-muted-foreground">
              Permanent makeup, also known as cosmetic tattooing or micropigmentation, is a semi-permanent procedure that uses specialized techniques to apply pigment to the skin. Unlike traditional tattoos, permanent makeup is designed to fade gradually over time and can be refreshed as needed.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {[
              {
                title: 'Time-Saving',
                description: 'Wake up with perfect makeup every day. No more daily application needed.',
              },
              {
                title: 'Long-Lasting',
                description: 'Results last 1-3 years depending on the treatment and your skin type.',
              },
              {
                title: 'Natural Results',
                description: 'Our expert technicians create subtle, natural-looking enhancements.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-secondary p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="heading-sm mb-2">{benefit.title}</h3>
                <p className="body-base text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section-spacing bg-secondary">
        <div className="container">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Permanent Makeup Treatments"
            subtitle="Choose from our selection of professional permanent makeup services"
          />
          <TreatmentGrid treatments={displayTreatments} />
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="section-spacing">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md mb-6 text-center">Aftercare Instructions</h2>
            <div className="space-y-4">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">First 24-48 Hours</h3>
                <p className="body-base text-muted-foreground">
                  Keep the area clean and dry. Avoid water, makeup, and touching the treated area. Some redness and swelling is normal.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">Week 1</h3>
                <p className="body-base text-muted-foreground">
                  Apply the recommended aftercare balm 2-3 times daily. Avoid swimming, saunas, and intense exercise. The area may appear darker initially.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">Weeks 2-4</h3>
                <p className="body-base text-muted-foreground">
                  Flaking and peeling is normal as the skin heals. Do not pick or scratch. Continue using aftercare balm. Avoid direct sunlight.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <BookingCTA />
    </>
  );
}
