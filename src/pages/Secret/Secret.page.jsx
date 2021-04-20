import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { useUserAccount } from '../../state/User';
import { useVideo, actions } from '../../state/Video';

function SecretPage() {
  const { state } = useUserAccount();
  const { dispatch } = useVideo();

  const { authenticated } = state;
  if (!authenticated) {
    dispatch({
      type: actions.displayError,
      payload: {
        type: 'danger',
        message: 'Only Authenticated users can go to favorites. :(',
      },
    });
  }
  return (
    <>
      <Header />
      <section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <pre style={{ display: 'inline-block' }}>
            welcome, voyager...
            <Link to="/"> ← go back</Link>
          </pre>
        </div>
      </section>
    </>
  );
}

export default SecretPage;
