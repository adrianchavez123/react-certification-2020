import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';

window.YTConfig = {
  host: 'https://www.youtube.com',
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
