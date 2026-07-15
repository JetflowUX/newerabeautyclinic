import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  /** Selector for the child elements to stagger-reveal */
  selector?: string;
  /** Y offset to animate from (px) */
  y?: number;
  /** Stagger delay between each item (s) */
  stagger?: number;
  /** Animation duration (s) */
  duration?: number;
  /** Viewport start trigger, e.g. 'top 85%' */
  start?: string;
}

/**
 * Attaches a GSAP ScrollTrigger stagger reveal to a container ref.
 * Children matching `selector` fade+slide up when the container enters the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  selector = ':scope > *',
  y = 40,
  stagger = 0.08,
  duration = 0.7,
  start = 'top 85%',
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = el.querySelectorAll<HTMLElement>(selector);
    if (!items.length) return;

    // Set initial hidden state
    gsap.set(items, { opacity: 0, y });

    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return ref;
}
