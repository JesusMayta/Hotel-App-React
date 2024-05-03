import React from 'react';
import ReactDOM from 'react-dom/client';
import { HotelApp } from './HotelApp.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HotelApp />
  </React.StrictMode>,
);
