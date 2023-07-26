import React from 'react';
import createRoot from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';


import history from './history';
createRoot.render(
  <Router history={history} basename="/">
    <App />
  </Router>
, document.getElementById('root'));
