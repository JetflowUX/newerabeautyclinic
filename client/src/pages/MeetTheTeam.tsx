import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TeamCard } from '@/components/shared/TeamCard';
import { BookingCTA } from '@/components/sections/BookingCTA';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function MeetTheTeam() {
  const teamGridRef = useScrollReveal<HTMLDivElement>({ stagger: 0.12, y: 40 });

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
            <p className="eyebrow mb-3">OUR TEAM</p>
            <h1 className="heading-lg mb-6">Meet Your Beauty Professionals</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team combines professional expertise with a genuine passion for helping clients feel their best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing">
        <div className="container">
          <div ref={teamGridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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

          {/* Additional Info */}
          <motion.div
            className="mt-16 pt-16 border-t border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="heading-sm mb-4">Interested in Joining Our Team?</h3>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented beauty professionals to join our clinic. If you're passionate about providing exceptional care, we'd love to hear from you.
            </p>
            <a
              href={`mailto:${siteConfig.business.email}`}
              className="btn-outline inline-block mt-6"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <BookingCTA />
    </>
  );
}
