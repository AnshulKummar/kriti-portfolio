import {
  Linkedin,
  Github,
  BarChart3,
  Globe,
  BadgeCheck,
  ExternalLink,
  FileDown,
  ArrowDown,
  User,
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../ui/AnimatedCounter';
import GradientButton from '../ui/GradientButton';
import { trackSocialClick } from '../analytics/ga4Events';
import { useInView } from 'react-intersection-observer';
import { trackSectionView } from '../analytics/ga4Events';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kritisrivastava18/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/kriti-hub',
    icon: Github,
  },
  {
    name: 'Tableau Public',
    url: 'https://public.tableau.com/app/profile/kritisri86/vizzes#!/',
    icon: BarChart3,
  },
  {
    name: 'Maven Showcase',
    url: 'https://mavenshowcase.com/profile/e851e3e0-20b1-7085-9763-08c1d9dcee4b',
    icon: Globe,
  },
  {
    name: 'Google Skills',
    url: 'https://www.skills.google/public_profiles/d6c4b1eb-14ab-47a6-b839-16ec41dc3619',
    icon: BadgeCheck,
  },
];

const ease = [0.25, 0.1, 0.25, 1];

export default function Hero() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) trackSectionView('hero');
    },
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
    >
      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-teal-200/40 via-cyan-200/30 to-emerald-200/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-200/30 via-teal-200/20 to-cyan-200/10 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              Kriti Srivastava
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
              className="mt-2 text-xl font-semibold text-teal-600 sm:text-2xl"
            >
              Senior Data Analyst
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
              className="mt-1 text-base text-text-secondary"
            >
              7+ Years &middot; Healthcare, E-commerce &amp; Non-Profit
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
            >
              Kriti Srivastava is a Senior Data Analyst with over 7 years of
              experience transforming complex data into strategic business
              outcomes. From identifying a $10M+ revenue opportunity at Wayfair
              to building self-service analytics tools adopted by 95% of
              stakeholders, she combines deep technical expertise in SQL, Python,
              and Looker with a sharp eye for storytelling with data. With a
              Master&apos;s in Information Systems (4.0 GPA) from DePaul
              University, Kriti has partnered with product, engineering, and
              executive teams across Healthcare, E-commerce, and Non-profit
              sectors — bringing both technical depth and business intuition to
              every challenge.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <GradientButton href="#projects">
                <BarChart3 size={18} />
                View Projects
              </GradientButton>
              <GradientButton
                href="/resume/Kriti_Srivastava_Resume.pdf"
                variant="outline"
                download
              >
                <FileDown size={18} />
                Download Resume
              </GradientButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75, ease }}
              className="mt-6 flex justify-center gap-3 md:justify-start"
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  onClick={() => trackSocialClick(link.name)}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.08, ease }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-200 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="shrink-0"
          >
            <div className="h-56 w-56 overflow-hidden rounded-full shadow-lg ring-4 ring-white md:h-72 md:w-72">
              <img
                src="/assets/images/profile.jpg"
                alt="Kriti Srivastava - Senior Data Analyst"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* Animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease }}
          className="mx-auto mt-16 grid max-w-md grid-cols-3 gap-8 md:max-w-lg"
        >
          <AnimatedCounter end={7} suffix="+" label="Years Experience" />
          <AnimatedCounter end={12} suffix="+" label="Projects" />
          <AnimatedCounter end={3} suffix="" label="Industries" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3, ease }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#experience"
            aria-label="Scroll to Experience section"
            className="animate-bounce text-slate-400 transition-colors hover:text-teal-500"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
