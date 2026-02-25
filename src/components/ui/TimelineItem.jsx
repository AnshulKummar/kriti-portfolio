import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function TimelineItem({ entry, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex w-full items-start gap-6 md:w-1/2 ${
        isLeft ? 'md:ml-0 md:pr-12' : 'md:ml-auto md:pl-12'
      }`}
    >
      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 200 }}
        className={`absolute top-1 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 text-white shadow-md ${
          isLeft
            ? 'left-0 md:-right-5 md:left-auto'
            : 'left-0 md:-left-5'
        }`}
      >
        <Briefcase size={18} />
      </motion.div>

      {/* Card — all text left-aligned */}
      <motion.div
        whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
        transition={{ duration: 0.2 }}
        className="ml-14 w-full rounded-xl border border-slate-200 bg-surface p-5 shadow-sm md:ml-0"
      >
        <div className="mb-1 text-sm font-medium text-teal-600">
          {entry.period}
        </div>
        <h3 className="text-lg font-bold text-text-primary">
          {entry.role}
        </h3>
        <p className="mb-3 text-sm font-medium text-text-secondary">
          {entry.company} &middot; {entry.location}
        </p>
        <ul className="space-y-1.5">
          {entry.highlights.map((highlight, i) => (
            <li
              key={i}
              className="text-sm text-text-secondary"
            >
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {entry.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
