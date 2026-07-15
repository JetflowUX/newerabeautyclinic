import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltOptions {
  max?: number;
  speed?: number;
  scale?: number;
  glare?: boolean;
  'max-glare'?: number;
  perspective?: number;
  reverse?: boolean;
}

export function useTilt(options: TiltOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Disable on touch/mobile devices
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    VanillaTilt.init(el, {
      max: 8,
      speed: 400,
      scale: 1.02,
      glare: false,
      perspective: 1200,
      ...options,
    });

    return () => {
      (el as HTMLDivElement & { vanillaTilt?: { destroy: () => void } }).vanillaTilt?.destroy();
    };
  }, []);

  return ref;
}
