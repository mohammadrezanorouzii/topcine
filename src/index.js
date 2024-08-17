import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import './styles/tailwind.scss';  // Tailwind CSS
import './styles/index.scss';   // Your SASS styles


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


