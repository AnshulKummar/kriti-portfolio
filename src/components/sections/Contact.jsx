import { useForm, ValidationError } from '@formspree/react';
import {
  Mail,
  MapPin,
  FileDown,
  Send,
  CheckCircle,
  Linkedin,
  Github,
  BarChart3,
  Globe,
  BadgeCheck,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GradientButton from '../ui/GradientButton';
import { useInView } from 'react-intersection-observer';
import {
  trackSectionView,
  trackContactSubmit,
  trackSocialClick,
} from '../analytics/ga4Events';
import ScrollReveal from '../ui/ScrollReveal';

// Replace with actual Formspree form ID after creating the form
const FORMSPREE_FORM_ID = 'meelvyva';

const contactSocials = [
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

export default function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) trackSectionView('contact');
    },
  });

  const onSubmit = (e) => {
    handleSubmit(e);
    if (!state.errors || state.errors.length === 0) {
      trackContactSubmit();
    }
  };

  return (
    <section id="contact" ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal preset="fadeUp">
          <SectionHeading
            title="Get in Touch"
            subtitle="Interested in working together? Send a message or download the resume."
          />
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact form */}
          <ScrollReveal preset="fadeRight" delay={0.1}>
            <div>
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 p-10 text-center"
                >
                  <CheckCircle size={48} className="mb-4 text-emerald-500" />
                  <h3 className="text-xl font-bold text-text-primary">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    Thank you for reaching out. Kriti will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-primary"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-text-primary transition-colors focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-text-primary transition-colors focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none"
                      placeholder="you@example.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-primary"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-text-primary transition-colors focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none resize-none"
                      placeholder="Your message..."
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                  >
                    <Send size={18} />
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal preset="fadeLeft" delay={0.2}>
            <div className="flex flex-col justify-center space-y-6">
              {/* Resume download */}
              <motion.div
                whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 p-6 text-center"
              >
                <FileDown size={32} className="mx-auto mb-3 text-teal-500" />
                <h3 className="text-lg font-bold text-text-primary">
                  Download Resume
                </h3>
                <p className="mt-1 mb-4 text-sm text-text-secondary">
                  Get the full details in PDF format.
                </p>
                <GradientButton
                  href="/resume/Kriti_Srivastava_Resume.pdf"
                  download
                >
                  <FileDown size={16} />
                  Download PDF
                </GradientButton>
              </motion.div>

              {/* Contact details */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:kriti.srivastava18@gmail.com"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 text-text-secondary transition-colors hover:text-teal-600"
                >
                  <Mail size={20} className="shrink-0 text-teal-500" />
                  <span>kriti.srivastava18@gmail.com</span>
                </motion.a>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 text-text-secondary"
                >
                  <MapPin size={20} className="shrink-0 text-teal-500" />
                  <span>Bolingbrook, IL</span>
                </motion.div>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {contactSocials.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    onClick={() => trackSocialClick(link.name)}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-200 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600"
                  >
                    <link.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
