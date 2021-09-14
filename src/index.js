import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <scrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();