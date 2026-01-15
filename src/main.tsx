import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Maintenance.tsx';
import './index.css';
import Maintenance from './Maintenance.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Maintenance />
  </StrictMode>
);
