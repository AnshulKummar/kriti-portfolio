import ReactGA from 'react-ga4';
import { GA4_EVENTS } from '../../config/ga4';

export function trackSectionView(sectionName) {
  ReactGA.event({
    category: 'Navigation',
    action: GA4_EVENTS.SECTION_VIEW,
    label: sectionName,
  });
}

export function trackProjectClick(projectTitle, projectType) {
  ReactGA.event({
    category: 'Engagement',
    action: GA4_EVENTS.PROJECT_CLICK,
    label: `${projectType}: ${projectTitle}`,
  });
}

export function trackResumeDownload() {
  ReactGA.event({
    category: 'Conversion',
    action: GA4_EVENTS.RESUME_DOWNLOAD,
  });
}

export function trackContactSubmit() {
  ReactGA.event({
    category: 'Conversion',
    action: GA4_EVENTS.CONTACT_SUBMIT,
  });
}

export function trackSocialClick(platform) {
  ReactGA.event({
    category: 'Engagement',
    action: GA4_EVENTS.SOCIAL_CLICK,
    label: platform,
  });
}

export function trackCTAClick(label) {
  ReactGA.event({
    category: 'Engagement',
    action: GA4_EVENTS.CTA_CLICK,
    label,
  });
}

export function trackFilterChange(filter) {
  ReactGA.event({
    category: 'Engagement',
    action: GA4_EVENTS.FILTER_CHANGE,
    label: filter,
  });
}
