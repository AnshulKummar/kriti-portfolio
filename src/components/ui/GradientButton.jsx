import { trackResumeDownload, trackCTAClick } from '../analytics/ga4Events';

export default function GradientButton({
  children,
  href,
  onClick,
  variant = 'primary',
  download = false,
  className = '',
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5',
    outline:
      'border-2 border-teal-500 text-teal-600 hover:bg-teal-50 hover:-translate-y-0.5',
  };

  const handleClick = (e) => {
    if (download) trackResumeDownload();
    else trackCTAClick(typeof children === 'string' ? children : 'CTA');
    if (onClick) onClick(e);
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        onClick={handleClick}
        {...(download ? { download: 'Kriti_Srivastava_Resume.pdf' } : {})}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
