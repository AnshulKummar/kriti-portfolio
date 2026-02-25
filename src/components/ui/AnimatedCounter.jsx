import { useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedCounter({ end, suffix = '', label, duration = 2 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      animate(count, end, { duration, ease: 'easeOut' });
    }
  }, [inView, count, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-extrabold text-teal-600 tabular-nums md:text-4xl">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      {label && (
        <p className="mt-1 text-sm font-medium text-text-secondary">{label}</p>
      )}
    </div>
  );
}
