import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import StarryBackground from './components/StarryBackground';
createRoot(document.getElementById('root')).render(_jsxs(StrictMode, { children: [_jsx(StarryBackground, {}), _jsx(App, {})] }));
