import { useRef } from 'react';
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface UseMagneticOptions {
  /** How strongly the element follows the cursor (0–1). Kept low for an elegant, subtle pull. */
  strength?: number;
  /** Maximum offset in px the element may travel from its origin. */
  max?: number;
}

interface UseMagneticResult {
  ref: React.RefObject<HTMLAnchorElement | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

/**
 * Subtle magnetic-hover effect: the element drifts a few pixels toward the
 * cursor while hovered, then springs back on leave. Built on framer-motion so
 * it composes with existing whileHover/whileTap transforms.
 *
 * Disabled when the user prefers reduced motion — the motion values stay at 0.
 */
export function useMagnetic({
  strength = 0.28,
  max = 6,
}: UseMagneticOptions = {}): UseMagneticResult {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const springConfig = { stiffness: 250, damping: 18, mass: 0.5 };
  const x = useSpring(useMotionValue(0), springConfig);
  const y = useSpring(useMotionValue(0), springConfig);

  const onMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-max, Math.min(max, relX * strength)));
    y.set(Math.max(-max, Math.min(max, relY * strength)));
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x, y, onMouseMove, onMouseLeave };
}
