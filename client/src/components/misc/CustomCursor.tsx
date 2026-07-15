import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const rafRef = useRef<number>(0);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // Dot (fast, direct)
  const dotSpringX = useSpring(cursorX, { damping: 50, stiffness: 600, mass: 0.2 });
  const dotSpringY = useSpring(cursorY, { damping: 50, stiffness: 600, mass: 0.2 });

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const computed = window.getComputedStyle(el).cursor;
        setIsPointer(computed === 'pointer');
      }
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring — lags behind for elegance */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.9)',
          width: 32,
          height: 32,
          opacity: 0,
        }}
        animate={{
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          opacity: isHovering ? 1 : 0,
          borderWidth: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      />

      {/* Inner dot — snappy */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'oklch(0.55 0.15 145)',
          opacity: isHovering ? 1 : 0,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      />
    </>
  );
}
