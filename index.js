// src/index.js (for JavaScript)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, add your global styles
import App from './App'; // Assuming App is correctly defined in App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);