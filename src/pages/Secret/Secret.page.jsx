import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import PrivateAsideMenu from '../../components/PrivateAsideMenu';
import Dialog from '../../components/Dialog';
import { useUserAccount } from '../../state/User';
import { useVideo, actions } from '../../state/Video';
import { Container, PreSection } from './Secret.styles';

function SecretPage() {
  const {
    state: { authenticated, showMenu },
  } = useUserAccount();
  const { dispatch } = useVideo();

  if (!authenticated) {
    dispatch({
      type: actions.displayError,
      payload: {
        type: 'danger',
        message: 'Only Authenticated users can go to secret page. :(',
      },
    });
  }

  const updateGrid = authenticated && showMenu;
  return (
    <>
      <Header />
      {alert.message ? <Dialog message={alert.message} type={alert.type} /> : null}
      <Container updateGrid={updateGrid}>
        {showMenu ? <PrivateAsideMenu /> : null}
        <section>
          <PreSection>
            <pre>
              welcome, voyager...
              <Link to="/"> ← go back</Link>
            </pre>
          </PreSection>
        </section>
      </Container>
    </>
  );
}

export default SecretPage;
