import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useUserAccount } from '../../state/User';
import VideoProvider from '../../state/Video';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import LogoutPage from '../../pages/Logout';
import FavoritesPage from '../../pages/Favorites';
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
            <Route exact path="/logout">
              <LogoutPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>

            <Route exact path="/favorites">
              <VideoProvider>
                <FavoritesPage />
              </VideoProvider>
            </Route>

            <Route exact path="/">
              <VideoProvider>
                <HomePage />
              </VideoProvider>
            </Route>
            <Route exact path="/:videoId?">
              <VideoProvider>
                <VideoPage />
              </VideoProvider>
            </Route>

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
