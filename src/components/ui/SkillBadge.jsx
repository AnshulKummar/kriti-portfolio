import { motion } from 'framer-motion';

export default function SkillBadge({ name }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className="inline-block cursor-default rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-3 py-1.5 text-sm font-medium text-teal-700 border border-teal-200/60 transition-colors duration-200 hover:border-teal-300 hover:shadow-sm"
    >
      {name}
    </motion.span>
  );
}
