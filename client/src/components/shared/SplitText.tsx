import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  /** 'chars' animates each character, 'words' animates each word */
  by?: 'chars' | 'words';
  once?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.022, delayChildren: delay },
  }),
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: '0.4em', rotateX: -30 },
  visible: {
    opacity: 1,
    y: '0em',
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SplitText({
  text,
  className = '',
  delay = 0,
  by = 'words',
  once = true,
  tag: Tag = 'span',
}: SplitTextProps) {
  const MotionTag = motion[Tag] as typeof motion.span;

  if (by === 'chars') {
    const chars = text.split('');
    return (
      <MotionTag
        className={className}
        style={{ display: 'block', perspective: '600px' }}
        variants={containerVariants}
        custom={delay}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        aria-label={text}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={charVariants}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
            aria-hidden
          >
            {char}
          </motion.span>
        ))}
      </MotionTag>
    );
  }

  // Words mode
  const words = text.split(' ');
  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      aria-label={text}
      style={{ display: 'block' }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
          <motion.span
            variants={wordVariants}
            style={{ display: 'inline-block' }}
            aria-hidden
          >
            {word}
          </motion.span>
          {i < words.length - 1 && (
            <span style={{ display: 'inline-block', width: '0.3em' }} aria-hidden> </span>
          )}
        </span>
      ))}
    </MotionTag>
  );
}
