import React from 'react';
import ReactDom from 'react-dom';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Login from '../../pages/Login';
import { useUserAccount, actions } from '../../state/User';
import { LoginModalBackground, CloseButton } from './LoginModal.styles';

function LoginModal() {
  const {
    state: { closeModal },
    dispatch,
  } = useUserAccount();
  const history = useHistory();
  if (closeModal) return true;

  const closeLoginModal = () => {
    dispatch({
      type: actions.closeLoginModal,
      payload: {},
    });
    history.goBack();
  };
  return ReactDom.createPortal(
    <LoginModalBackground>
      <CloseButton type="button" onClick={closeLoginModal}>
        <FontAwesomeIcon data-testid="preferences-icon" icon={faWindowClose} />
      </CloseButton>
      <Login />
    </LoginModalBackground>,
    document.querySelector('#portal')
  );
}

export default LoginModal;
