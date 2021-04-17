import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';
import UserProvider from './state/User';

window.YTConfig = {
  host: 'https://www.youtube.com',
};
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
