import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProviders from './ContextProviders';
import AlertDisplay from './components/AlertDisplay';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextProviders>
        <AlertDisplay />
        <App />
      </ContextProviders>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
