import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import App from './App';
import { GA4_MEASUREMENT_ID } from './config/ga4';
import './styles/globals.css';

// Initialize GA4 only in production
if (import.meta.env.PROD && GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  ReactGA.initialize(GA4_MEASUREMENT_ID);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
