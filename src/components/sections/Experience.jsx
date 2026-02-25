import SectionHeading from '../ui/SectionHeading';
import TimelineItem from '../ui/TimelineItem';
import { experiences } from '../../data/experience';
import { useInView } from 'react-intersection-observer';
import { trackSectionView } from '../analytics/ga4Events';
import ScrollReveal from '../ui/ScrollReveal';

export default function Experience() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) trackSectionView('experience');
    },
  });

  return (
    <section id="experience" ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal preset="fadeUp">
          <SectionHeading
            title="Work Experience"
            subtitle="A track record of driving impact through data across industries."
          />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line — visible on desktop */}
          <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-gradient-to-b from-teal-300 via-cyan-300 to-emerald-300 md:left-1/2 md:block md:-translate-x-px" />

          {/* Mobile left line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-teal-300 via-cyan-300 to-emerald-300 md:hidden" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((entry, index) => (
              <ScrollReveal
                key={entry.id}
                preset={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'}
                delay={index * 0.15}
                threshold={0.2}
              >
                <TimelineItem entry={entry} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
