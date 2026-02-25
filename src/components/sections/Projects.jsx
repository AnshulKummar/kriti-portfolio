import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { projects, projectCategories } from '../../data/projects';
import { useInView } from 'react-intersection-observer';
import { trackSectionView, trackFilterChange } from '../analytics/ga4Events';
import ScrollReveal from '../ui/ScrollReveal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) trackSectionView('projects');
    },
  });

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    trackFilterChange(category);
  };

  return (
    <section id="projects" ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal preset="fadeUp">
          <SectionHeading
            title="Projects"
            subtitle="Interactive dashboards, data pipelines, and analytical models — explore the work."
          />
        </ScrollReveal>

        {/* Filter row */}
        <ScrollReveal preset="fadeUp" delay={0.1}>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {projectCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project grid with AnimatePresence for filter transitions */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  layout: { duration: 0.3 },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center text-text-secondary"
          >
            No projects found for this filter.
          </motion.p>
        )}
      </div>
    </section>
  );
}
