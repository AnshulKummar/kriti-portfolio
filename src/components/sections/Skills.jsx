import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import SkillBadge from '../ui/SkillBadge';
import { skillCategories } from '../../data/skills';
import { googleBadges, education } from '../../data/certifications';
import { useInView } from 'react-intersection-observer';
import { trackSectionView } from '../analytics/ga4Events';
import { GraduationCap, Award } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

export default function Skills() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) trackSectionView('skills');
    },
  });

  return (
    <section id="skills" ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal preset="fadeUp">
          <SectionHeading
            title="Skills & Certifications"
            subtitle="Technical proficiency built across 7+ years and continuous learning."
          />
        </ScrollReveal>

        {/* Technical Skills */}
        <StaggerContainer
          staggerDelay={0.1}
          className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = LucideIcons[category.icon] || LucideIcons.Star;
            return (
              <StaggerItem key={category.name} preset="scaleUp">
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-slate-200 bg-surface p-5 shadow-sm transition-colors duration-300"
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 text-white">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-text-primary">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Google Cloud Badges */}
        <ScrollReveal preset="fadeUp" delay={0.1}>
          <div className="mb-16">
            <h3 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-text-primary">
              <Award size={22} className="text-teal-500" />
              Google Cloud Certifications
            </h3>
            <StaggerContainer
              staggerDelay={0.06}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {googleBadges.map((badge) => (
                <StaggerItem key={badge.id} preset="fadeUp">
                  <motion.div
                    whileHover={{ y: -3, borderColor: 'rgb(45 212 191)' }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-start gap-3 rounded-lg border border-slate-200 bg-surface p-4 transition-shadow duration-200 hover:shadow-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <Award size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-snug text-text-primary">
                        {badge.name}
                      </p>
                      <p className="mt-0.5 text-xs text-text-secondary">
                        {badge.earned}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal preset="fadeUp" delay={0.2}>
          <div>
            <h3 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-text-primary">
              <GraduationCap size={22} className="text-teal-500" />
              Education
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  className="rounded-xl border border-slate-200 bg-surface p-5 text-center shadow-sm"
                >
                  <h4 className="font-bold text-text-primary">{edu.degree}</h4>
                  <p className="mt-1 text-sm text-text-secondary">{edu.school}</p>
                  <p className="mt-1 text-sm text-text-secondary">{edu.period}</p>
                  {edu.gpa && (
                    <span className="mt-2 inline-block rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-700">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
