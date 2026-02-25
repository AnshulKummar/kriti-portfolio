import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import { trackProjectClick } from '../analytics/ga4Events';
import TableauEmbed from './TableauEmbed';

const typeIcons = {
  tableau: BarChart3,
  github: Github,
  maven: ExternalLink,
};

const typeLabels = {
  tableau: 'Tableau Public',
  github: 'GitHub',
  maven: 'Maven Showcase',
};

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = typeIcons[project.type] || ExternalLink;

  const handleClick = () => {
    trackProjectClick(project.title, project.type);
    setExpanded(!expanded);
  };

  // Determine the primary "View Project" URL — prefer externalUrl, then tableauUrl, then githubUrl
  const viewUrl =
    project.externalUrl || project.tableauUrl || project.githubUrl;

  // Show a separate "Source" button when there's a githubUrl AND a different primary view URL
  const showSourceButton =
    project.githubUrl && viewUrl && viewUrl !== project.githubUrl;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-surface shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Card header with type badge */}
      <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-teal-700 shadow-sm">
            <Icon size={12} />
            {typeLabels[project.type]}
          </span>
          {project.featured && (
            <span className="rounded-full bg-emerald-400/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-text-primary leading-snug">
          {project.title}
        </h3>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5 pt-3">
        <p className="mb-3 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expanded content — Tableau live embed */}
        <AnimatePresence>
          {expanded && project.type === 'tableau' && project.tableauUrl && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <TableauEmbed
                tableauUrl={project.tableauUrl}
                title={project.title}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action buttons */}
        <div className="mt-auto flex flex-wrap items-center gap-2">
          {project.type === 'tableau' && project.tableauUrl && (
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1 rounded-lg bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 transition-colors hover:bg-teal-100"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? 'Collapse' : 'Preview'}
            </motion.button>
          )}
          {viewUrl && (
            <motion.a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProjectClick(project.title, project.type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-400 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:shadow-md"
            >
              <ExternalLink size={12} />
              View Project
            </motion.a>
          )}
          {showSourceButton && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200"
            >
              <Github size={12} />
              Source
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
