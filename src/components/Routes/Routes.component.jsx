import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import LoginPage from '../../pages/Login';
import LogoutPage from '../../pages/Logout';
import FavoritesPage from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import LoginModal from '../LoginModal';
import Private from '../Private';

function Routes() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
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
          <FavoritesPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/:videoId?">
          <VideoPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {background && <Route path="/login" component={LoginModal} />}
    </>
  );
}

export default Routes;