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
  /**
   * 'default' uses a rise + subtle 3D tilt. 'blur' adds a soft focus-in for a
   * more refined, editorial reveal (used on the hero headline).
   */
  reveal?: 'default' | 'blur';
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

const charVariantsBlur: Variants = {
  hidden: { opacity: 0, y: '0.5em', filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: '0em',
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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

const wordVariantsBlur: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SplitText({
  text,
  className = '',
  delay = 0,
  by = 'words',
  once = true,
  tag: Tag = 'span',
  reveal = 'default',
}: SplitTextProps) {
  const MotionTag = motion[Tag] as typeof motion.span;
  const isBlur = reveal === 'blur';
  const activeCharVariants = isBlur ? charVariantsBlur : charVariants;
  const activeWordVariants = isBlur ? wordVariantsBlur : wordVariants;

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
            variants={activeCharVariants}
            style={{ display: 'inline-block', whiteSpace: 'pre', willChange: 'transform, filter, opacity' }}
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
        <span key={i} style={{ display: 'inline-block', overflow: isBlur ? 'visible' : 'hidden' }}>
          <motion.span
            variants={activeWordVariants}
            style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
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
