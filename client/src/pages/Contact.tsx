import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { LocationSection } from '@/components/sections/LocationSection';
import { BookingCTA } from '@/components/sections/BookingCTA';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'A valid email address is required.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${siteConfig.business.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
            <p className="eyebrow mb-3">GET IN TOUCH</p>
            <h1 className="heading-lg mb-6">Contact Us</h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to answer any questions and help you book your perfect treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <motion.div
              className="bg-card p-6 md:p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-sm mb-3">Phone</h3>
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="text-accent hover:text-accent/80 transition-colors font-semibold"
              >
                {siteConfig.business.phone}
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-card p-6 md:p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-sm mb-3">Email</h3>
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="text-accent hover:text-accent/80 transition-colors font-semibold"
              >
                {siteConfig.business.email}
              </a>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="bg-card p-6 md:p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-sm mb-3">Hours</h3>
              <p className="text-muted-foreground text-sm">
                Monday – Saturday
                <br />
                See opening hours below
              </p>
            </motion.div>
          </div>

          {/* Location Section */}
          <LocationSection />
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing">
        <div className="container max-w-2xl">
          <SectionHeading
            title="Send Us a Message"
            subtitle="Have a question or want to find out more about a treatment? Fill in the form below and we'll get back to you as soon as possible."
            className="mb-10"
          />

          {submitted ? (
            <motion.div
              className="flex flex-col items-center text-center gap-4 py-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle className="w-16 h-16 text-accent" />
              <h3 className="heading-sm">Message Ready to Send</h3>
              <p className="text-muted-foreground">
                Your email client has been opened with your message. Please click
                Send to complete your enquiry.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                className="btn-outline mt-4"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-lg bg-secondary border focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${errors.name ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-destructive">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg bg-secondary border focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${errors.email ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              {/* Phone (optional) */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number <span className="text-muted-foreground text-xs">(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="07xxx xxxxxx"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your enquiry, which treatments you're interested in, or any questions you have…"
                  className={`w-full px-4 py-3 rounded-lg bg-secondary border focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none ${errors.message ? 'border-destructive' : 'border-border'}`}
                />
                {errors.message && <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              <p className="text-xs text-muted-foreground">
                Your message will open in your default email client. Alternatively, call us on{' '}
                <a href={`tel:${siteConfig.business.phone}`} className="text-accent hover:underline">
                  {siteConfig.business.phone}
                </a>
                .
              </p>
            </motion.form>
          )}
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-spacing">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-md mb-6">Ready to Book?</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Book your appointment directly through our online booking system on Treatwell. It's quick, easy, and you'll receive instant confirmation.
            </p>
            <a
              href={siteConfig.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <BookingCTA />
    </>
  );
}
