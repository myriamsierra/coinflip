import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterConfig from './utils/RouterConfig.jsx'
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterConfig />
  </React.StrictMode>
);


