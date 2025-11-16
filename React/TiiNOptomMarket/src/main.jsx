import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // <-- Routerni import qildik
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- Router bilan o‘rab oldik */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
