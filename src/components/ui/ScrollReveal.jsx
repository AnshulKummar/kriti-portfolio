import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const presets = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
};

/**
 * ScrollReveal — wraps children in a motion.div that animates on scroll.
 */
export default function ScrollReveal({
  children,
  preset = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.15,
  once = true,
  ...rest
}) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  });

  const variants = presets[preset] || presets.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer — wraps children with staggered reveal animation.
 */
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  threshold = 0.1,
  ...rest
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem — a child of StaggerContainer. Animates in sequence.
 */
export function StaggerItem({
  children,
  className = '',
  preset = 'fadeUp',
  duration = 0.5,
  ...rest
}) {
  const variants = presets[preset] || presets.fadeUp;

  return (
    <motion.div
      variants={variants}
      transition={{
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
