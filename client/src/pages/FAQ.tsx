import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { BookingCTA } from '@/components/sections/BookingCTA';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | number | null>(null);

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
            <p className="eyebrow mb-3">QUESTIONS?</p>
            <h1 className="heading-lg mb-6">Frequently Asked Questions</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our treatments, booking process, and clinic policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {siteConfig.faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="border border-border rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <button
                  onClick={() =>
                    setOpenId(openId === faq.id ? null : faq.id)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors"
                >
                  <h3 className="heading-sm text-left text-foreground">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openId === (faq.id || faq.question) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-accent" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === (faq.id || faq.question) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-secondary border-t border-border">
                        <p className="body-base text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Additional Help */}
          <motion.div
            className="mt-16 p-8 bg-secondary rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="heading-sm mb-4">Still have questions?</h3>
            <p className="body-base text-muted-foreground mb-6">
              Don't hesitate to reach out to us directly. Our team is happy to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="btn-primary"
              >
                Call Us
              </a>
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="btn-outline"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <BookingCTA />
    </>
  );
}
