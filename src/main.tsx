import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import StarryBackground from './components/StarryBackground';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StarryBackground></StarryBackground>
    <App />
  </StrictMode>,
);
