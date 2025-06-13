import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useAlert } from '../contexts/AlertContext';

function AlertDisplay() {
  const { alerts, removeAlert } = useAlert();

  return (
    <div
      style={{
        position: 'fixed',
        top: 70,
        right: 20,
        zIndex: 1050,
        minWidth: 300,
      }}
    >
      {alerts.map(({ id, message, variant }) => (
        <Alert
          key={id}
          variant={variant}
          onClose={() => removeAlert(id)}
          dismissible
        >
          {message}
        </Alert>
      ))}
    </div>
  );
}

export default AlertDisplay;
