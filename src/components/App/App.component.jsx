import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useUserAccount } from '../../state/User';
import VideoProvider from '../../state/Video';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import themes from './Theme';

function App() {
  const { state } = useUserAccount();
  const { theme } = state;
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[theme]}>
        <Layout>
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>

            <Route path="/:videoId?">
              <VideoProvider>
                <HomePage />
              </VideoProvider>
            </Route>

            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
