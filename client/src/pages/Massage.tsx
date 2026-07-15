import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TreatmentGrid } from '@/components/shared/TreatmentGrid';
import { BookingCTA } from '@/components/sections/BookingCTA';

export default function Massage() {
  const massageTreatments = siteConfig.featuredTreatments.filter(
    (t) => t.category === 'Massage and Holistic'
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
            <p className="eyebrow mb-3">MASSAGE & WELLBEING</p>
            <h1 className="heading-lg mb-6">Therapeutic Massage & Holistic Treatments</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Relax and rejuvenate with our range of therapeutic massage and holistic wellness treatments designed to restore balance and promote wellbeing.
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
            <h2 className="heading-md mb-4">The Power of Therapeutic Touch</h2>
            <p className="body-lg text-muted-foreground">
              Massage therapy is more than just relaxation. It reduces stress, relieves muscle tension, improves circulation and promotes overall physical and mental wellbeing.
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
                title: 'Stress Relief',
                description: 'Release tension and anxiety through therapeutic touch and relaxation.',
              },
              {
                title: 'Pain Management',
                description: 'Alleviate muscle tension, stiffness and chronic pain naturally.',
              },
              {
                title: 'Improved Circulation',
                description: 'Enhance blood flow and oxygenation for better overall health.',
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
            title="Massage & Holistic Treatments"
            subtitle="Choose from our selection of therapeutic massage and wellness services"
          />
          <TreatmentGrid treatments={massageTreatments} />
        </div>
      </section>

      {/* Massage Types Section */}
      <section className="section-spacing">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md mb-6 text-center">Massage Techniques</h2>
            <div className="space-y-4">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">Swedish Massage</h3>
                <p className="body-base text-muted-foreground">
                  A classic technique using long, flowing strokes to relax muscles and improve circulation.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">Deep Tissue Massage</h3>
                <p className="body-base text-muted-foreground">
                  Targeted pressure to release chronic muscle tension and knots.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">Holistic Therapies</h3>
                <p className="body-base text-muted-foreground">
                  Integrative approaches combining massage with sound healing and wellness practices.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="heading-sm mb-2">Bespoke Treatments</h3>
                <p className="body-base text-muted-foreground">
                  Customised sessions tailored to your specific needs and preferences.
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
