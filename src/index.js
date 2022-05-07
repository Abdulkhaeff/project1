import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConnectionsProvider } from './Context';
import './index.css';
import Root from './root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConnectionsProvider>
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
    </ConnectionsProvider>
  </React.StrictMode>
);


