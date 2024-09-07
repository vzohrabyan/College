import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<div>Loading....</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);

reportWebVitals();
