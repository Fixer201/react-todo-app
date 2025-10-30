import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './styles/index.css';
import App from './App';
import StarryBackground from './components/StarryBackground';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Analytics />
        <SpeedInsights />
        <StarryBackground></StarryBackground>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
