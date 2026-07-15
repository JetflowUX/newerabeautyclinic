import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';

export default function Terms() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-lg mb-8">Terms & Conditions</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="heading-sm mb-4">1. Agreement to Terms</h2>
              <p className="body-base text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">2. Use License</h2>
              <p className="body-base text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials (information or software) on {siteConfig.business.name}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-sm mb-4">3. Disclaimer</h2>
              <p className="body-base text-muted-foreground">
                The materials on {siteConfig.business.name}'s website are provided on an 'as is' basis. {siteConfig.business.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">4. Limitations</h2>
              <p className="body-base text-muted-foreground">
                In no event shall {siteConfig.business.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">5. Accuracy of Materials</h2>
              <p className="body-base text-muted-foreground">
                The materials appearing on {siteConfig.business.name}'s website could include technical, typographical, or photographic errors. {siteConfig.business.name} does not warrant that any of the materials on the website are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">6. Booking and Cancellation</h2>
              <p className="body-base text-muted-foreground">
                Bookings are made through our online booking system. Cancellations and rescheduling must be made according to the terms set out by our booking provider. Please refer to their cancellation policy for specific details.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">7. Contact Information</h2>
              <p className="body-base text-muted-foreground">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${siteConfig.business.email}`} className="text-accent hover:underline">
                    {siteConfig.business.email}
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${siteConfig.business.phone}`} className="text-accent hover:underline">
                    {siteConfig.business.phone}
                  </a>
                </p>
              </div>
            </section>

            <p className="text-xs text-muted-foreground pt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
