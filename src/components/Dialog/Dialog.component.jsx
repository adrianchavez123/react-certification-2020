import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Alert, CloseButton, Span } from './Dialog.styles';
import { useVideo } from '../../providers/Video';

const alertTypes = [
  { type: 'success', color: '#C3E6CD', border: '#155724' },
  { type: 'danger', color: '#f8d7da', border: '#721c24' },
];

function Dialog({ message, type }) {
  const { setAlert } = useVideo();
  return (
    <Alert role="dialog" theme={alertTypes.find((theme) => theme.type === type)}>
      <Span>{message}</Span>
      <CloseButton
        name="close-alert"
        type="button"
        title="close"
        onClick={() => setAlert({ message: null, type: null })}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </CloseButton>
    </Alert>
  );
}

export default Dialog;
