import { motion } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-lg mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="heading-sm mb-4">1. Introduction</h2>
              <p className="body-base text-muted-foreground">
                {siteConfig.business.name} ("we", "us", "our", or "Company") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">2. Information Collection and Use</h2>
              <p className="body-base text-muted-foreground">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Personal Data: Name, email address, phone number, and appointment details</li>
                <li>Usage Data: Browser type, pages visited, and time spent on pages</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-sm mb-4">3. Use of Data</h2>
              <p className="body-base text-muted-foreground">
                {siteConfig.business.name} uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-sm mb-4">4. Security of Data</h2>
              <p className="body-base text-muted-foreground">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">5. Contact Us</h2>
              <p className="body-base text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
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
