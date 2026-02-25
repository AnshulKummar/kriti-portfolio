import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, BarChart3, Globe, BadgeCheck } from 'lucide-react';
import { trackSocialClick } from '../analytics/ga4Events';

const footerSocials = [
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

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Social icons */}
          <div className="flex gap-3">
            {footerSocials.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                onClick={() => trackSocialClick(link.name)}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors duration-200 hover:bg-teal-50 hover:text-teal-600"
              >
                <link.icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Kriti Srivastava. Built with
            <Heart size={14} className="text-teal-500" />
            using React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
