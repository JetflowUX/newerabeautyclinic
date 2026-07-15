import { motion } from 'framer-motion';

interface Hours {
  [key: string]: {
    open: string;
    close: string;
    closed: boolean;
  };
}

interface OpeningHoursProps {
  hours: Hours;
}

export function OpeningHours({ hours }: OpeningHoursProps) {
  const daysOrder = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const isOpen = (day: string) => {
    const dayHours = hours[day];
    if (dayHours.closed) return false;

    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    if (currentDay !== day) return false;

    const [openHour, openMin] = dayHours.open.split(':').map(Number);
    const [closeHour, closeMin] = dayHours.close.split(':').map(Number);
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();

    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;
    const currentTime = currentHour * 60 + currentMin;

    return currentTime >= openTime && currentTime < closeTime;
  };

  return (
    <motion.div
      className="bg-card rounded-lg p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="heading-sm mb-6 text-foreground">Opening Hours</h3>

      <div className="space-y-3">
        {daysOrder.map((day, index) => {
          const dayHours = hours[day];
          const dayLabel = day.charAt(0).toUpperCase() + day.slice(1);
          const open = isOpen(day);

          return (
            <motion.div
              key={day}
              className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="font-medium text-foreground">{dayLabel}</span>
              <div className="flex items-center gap-3">
                {dayHours.closed ? (
                  <span className="text-muted-foreground text-sm">Closed</span>
                ) : (
                  <>
                    <span className="text-muted-foreground text-sm">
                      {formatTime(dayHours.open)} – {formatTime(dayHours.close)}
                    </span>
                    {open && (
                      <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        title="Currently open"
                      />
                    )}
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
