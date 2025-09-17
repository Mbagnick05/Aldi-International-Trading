import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Maintenance from './Maintenance.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Maintenance />
  </StrictMode>
);
