import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Loader2, AlertCircle, Maximize2 } from 'lucide-react';

/**
 * TableauEmbed — Lazy-loaded Tableau Public iframe embed.
 *
 * The iframe only loads when the component scrolls into view (via IntersectionObserver).
 * Shows a loading spinner while the iframe loads, and gracefully handles errors.
 *
 * @param {string} tableauUrl — full Tableau Public URL (e.g. https://public.tableau.com/views/...)
 * @param {string} title — accessible title for the iframe
 */
export default function TableauEmbed({ tableauUrl, title = 'Tableau Visualization' }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const iframeRef = useRef(null);

  // Lazy-load: only render iframe when visible
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '200px 0px', // start loading slightly before in view
  });

  // Build the embed URL from the Tableau Public URL
  // Tableau embed format: URL + ?:embed=y&:display_count=no&:showVizHome=no
  const embedUrl = tableauUrl
    ? `${tableauUrl}?:embed=y&:display_count=no&:showVizHome=no&:toolbar=yes&:animate_transition=yes`
    : null;

  // Timeout: if iframe doesn't load in 15s, show error
  useEffect(() => {
    if (!inView || !embedUrl) return;

    const timer = setTimeout(() => {
      if (!loaded) setError(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, [inView, embedUrl, loaded]);

  if (!embedUrl) return null;

  return (
    <div
      ref={inViewRef}
      className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
    >
      {/* Loading state */}
      {inView && !loaded && !error && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
          <Loader2 size={24} className="animate-spin text-teal-500" />
          <p className="text-xs text-text-secondary">Loading visualization...</p>
        </div>
      )}

      {/* Error state */}
      {error && !loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
          <AlertCircle size={24} className="text-slate-400" />
          <p className="text-xs text-text-secondary">
            Unable to load preview.{' '}
            <a
              href={tableauUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-600 hover:underline"
            >
              View on Tableau Public
            </a>
          </p>
        </div>
      )}

      {/* Iframe — only rendered when in view */}
      {inView && (
        <iframe
          ref={iframeRef}
          src={embedUrl}
          title={title}
          className={`h-full w-full border-0 transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => {
            setLoaded(true);
            setError(false);
          }}
          onError={() => setError(true)}
          allowFullScreen
          loading="lazy"
        />
      )}

      {/* Fullscreen link overlay — top-right */}
      {loaded && (
        <a
          href={tableauUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Open in Tableau Public"
          className="absolute top-2 right-2 z-20 flex h-7 w-7 items-center justify-center rounded-md bg-white/80 text-slate-500 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-teal-600 hover:shadow-md"
        >
          <Maximize2 size={14} />
        </a>
      )}
    </div>
  );
}
