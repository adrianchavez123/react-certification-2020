import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useUserAccount } from '../../state/User';
import Routes from '../Routes';
import Layout from '../Layout';
import themes from './Theme';

function App() {
  const {
    state: { theme },
  } = useUserAccount();

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[theme]}>
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
