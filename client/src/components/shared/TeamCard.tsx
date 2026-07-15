import { motion } from 'framer-motion';
import { Mail, Phone, Sparkles } from 'lucide-react';
import { useTilt } from '@/hooks/useTilt';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  services: string[];
  image: string;
  email?: string;
  phone?: string;
  index?: number;
}

export function TeamCard({
  name,
  role,
  bio,
  services,
  image,
  email,
  phone,
  index = 0,
}: TeamCardProps) {
  const tiltRef = useTilt({ max: 5, speed: 500, scale: 1.01 });

  return (
    <motion.div
      ref={tiltRef}
      className="group overflow-hidden rounded-xl bg-card shadow-sm hover:shadow-2xl transition-shadow duration-500"
      style={{ transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-80">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Name overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-bold text-xl mb-0.5">{name}</h3>
          <p className="text-white/80 text-sm font-medium">{role}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8" style={{ transform: 'translateZ(20px)' }}>
        <p className="body-sm text-muted-foreground mb-6 leading-relaxed">{bio}</p>

        {/* Services */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Specialities
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <span
                key={service}
                className="text-xs bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full font-medium transition-colors duration-200 hover:bg-accent hover:text-accent-foreground cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        {(email || phone) && (
          <div className="flex gap-3 pt-4 border-t border-border">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors min-h-11 px-3 py-2 rounded-lg hover:bg-accent/8"
                aria-label={`Call ${name}`}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{phone}</span>
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors min-h-11 px-3 py-2 rounded-lg hover:bg-accent/8"
                aria-label={`Email ${name}`}
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{email}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
