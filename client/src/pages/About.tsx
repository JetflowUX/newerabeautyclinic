import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TeamCard } from '@/components/shared/TeamCard';
import { BookingCTA } from '@/components/sections/BookingCTA';

export default function About() {
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
      <section className="min-h-[60vh] bg-secondary flex items-center pt-20">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-3">ABOUT US</p>
            <h1 className="heading-lg mb-6">
              {siteConfig.philosophy?.headline || 'About New Era Beauty Clinic'}
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              {siteConfig.philosophy?.tagline || 'Where natural beauty, professional care and complete wellbeing come together.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-spacing">
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
                src="/placeholder-about.jpg"
                alt="Clinic philosophy"
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
              <motion.h2 className="heading-md mb-6" variants={itemVariants}>
                Our Approach
              </motion.h2>

              <motion.p
                className="body-lg text-muted-foreground mb-6"
                variants={itemVariants}
              >
                At New Era Beauty Clinic, we believe that true beauty is not just about appearance. It's about feeling confident, healthy, and at peace with yourself.
              </motion.p>

              <motion.div className="space-y-4" variants={containerVariants}>
                {siteConfig.philosophy?.values?.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-3"
                    variants={itemVariants}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="body-base text-foreground">{value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-secondary">
        <div className="container">
          <SectionHeading
            title="Meet Your Beauty Professionals"
            subtitle="Our experienced team combines professional expertise with a genuine passion for helping clients feel their best."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.team.map((member, index) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                services={member.services}
                image={member.image}
                index={index}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground mb-4">
              More team members coming soon. We're always welcoming talented professionals to our clinic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            title="Our Commitment"
            subtitle="We're dedicated to providing the highest standards of care and professionalism."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Excellence',
                description: 'Continuous training and education ensure our team stays at the forefront of beauty and wellness treatments.',
              },
              {
                title: 'Client Wellbeing',
                description: 'Every treatment is tailored to your individual needs, preferences and comfort. Your satisfaction is our priority.',
              },
              {
                title: 'Premium Products',
                description: 'We use only professional-grade products from trusted brands like Dermalogica, Olaplex, and Young Living.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="heading-sm mb-4 text-foreground">{item.title}</h3>
                <p className="body-base text-muted-foreground">{item.description}</p>
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
