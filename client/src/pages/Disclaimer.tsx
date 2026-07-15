import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-8 h-8 text-accent" />
            <h1 className="heading-lg">Treatment Disclaimer</h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section className="bg-secondary p-6 rounded-lg">
              <p className="body-base text-muted-foreground">
                Please read this disclaimer carefully before booking any treatment at New Era Beauty Clinic.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">Medical Advice</h2>
              <p className="body-base text-muted-foreground">
                The treatments and services provided by New Era Beauty Clinic are not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before undergoing any treatment, especially if you have pre-existing medical conditions, are pregnant, or are taking medications.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">Individual Results</h2>
              <p className="body-base text-muted-foreground">
                Results from treatments vary from person to person and depend on individual factors including skin type, age, lifestyle, and adherence to aftercare instructions. The results shown in our gallery and testimonials are not guaranteed and may not be typical for all clients.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">Contraindications</h2>
              <p className="body-base text-muted-foreground">
                Certain treatments may not be suitable for individuals with specific medical conditions, allergies, or sensitivities. It is your responsibility to disclose all relevant medical information during your consultation. We reserve the right to decline treatment if we believe it may not be safe or appropriate for you.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">Aftercare Instructions</h2>
              <p className="body-base text-muted-foreground">
                Proper aftercare is essential for optimal results and to minimise the risk of complications. Failure to follow aftercare instructions may result in unsatisfactory results or adverse reactions. You are responsible for following all aftercare guidance provided by our therapists.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">Allergic Reactions</h2>
              <p className="body-base text-muted-foreground">
                Although we use professional-grade products from reputable suppliers, allergic reactions or sensitivities may occur. Please inform us of any known allergies or sensitivities before treatment. We recommend performing a patch test for new products if you have sensitive skin.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">Limitation of Liability</h2>
              <p className="body-base text-muted-foreground">
                New Era Beauty Clinic and its staff shall not be liable for any adverse reactions, complications, or unsatisfactory results arising from treatments, unless caused by gross negligence or willful misconduct on our part. By booking a treatment, you acknowledge that you have read and understood this disclaimer and accept full responsibility for any outcomes.
              </p>
            </section>

            <section>
              <h2 className="heading-sm mb-4">Consultation</h2>
              <p className="body-base text-muted-foreground">
                A thorough consultation is conducted before all treatments. During this consultation, we will discuss your expectations, medical history, and any concerns. It is essential that you provide accurate and complete information to ensure your safety and satisfaction.
              </p>
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
