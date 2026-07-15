import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TreatmentGrid } from '@/components/shared/TreatmentGrid';
import { BookingCTA } from '@/components/sections/BookingCTA';

export default function SkinAndFacials() {
  const skinTreatments = siteConfig.featuredTreatments.filter(
    (t) => t.category === 'Facials and Skincare'
  );

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
            <p className="eyebrow mb-3">SKINCARE & FACIALS</p>
            <h1 className="heading-lg mb-6">Professional Facial Treatments</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our range of professional facial treatments designed to cleanse, rejuvenate and transform your skin.
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
            <h2 className="heading-md mb-4">Why Professional Facials?</h2>
            <p className="body-lg text-muted-foreground">
              Professional facials go beyond basic skincare. Our expert therapists use advanced techniques and premium products to address specific skin concerns, improve texture, and promote a healthy, radiant complexion.
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
                title: 'Deep Cleansing',
                description: 'Professional-grade cleansing removes impurities and dead skin cells for a fresh start.',
              },
              {
                title: 'Targeted Treatment',
                description: 'Customised treatments address acne, aging, sensitivity or dryness.',
              },
              {
                title: 'Visible Results',
                description: 'See immediate improvements in skin texture, tone and radiance.',
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
            title="Facial Treatments"
            subtitle="Choose from our selection of professional skincare and facial services"
          />
          <TreatmentGrid treatments={skinTreatments} />
        </div>
      </section>

      {/* Skin Types Section */}
      <section className="section-spacing">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md mb-6 text-center">Facials for Every Skin Type</h2>
            <div className="space-y-4">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">Oily & Acne-Prone</h3>
                <p className="body-base text-muted-foreground">
                  Deep cleansing treatments that control sebum production and reduce breakouts without over-drying.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">Dry & Sensitive</h3>
                <p className="body-base text-muted-foreground">
                  Gentle, nourishing treatments that restore hydration and soothe irritated skin.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">Mature & Anti-Aging</h3>
                <p className="body-base text-muted-foreground">
                  Advanced treatments that boost collagen production and reduce fine lines for a more youthful appearance.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">Combination</h3>
                <p className="body-base text-muted-foreground">
                  Balanced treatments that address multiple skin concerns simultaneously.
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
