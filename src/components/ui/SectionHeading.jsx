import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-extrabold text-text-primary md:text-4xl">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto mt-3 h-1 w-16 origin-left rounded-full bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400"
      />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
