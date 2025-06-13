import React from 'react';
import { CurrentUserProvider } from './contexts/CurrentUserContext';
import { UserDataProvider } from './contexts/UserDataContext';
import { AlertProvider } from './contexts/AlertContext';

export default function ContextProviders({ children }) {
  return (
    <CurrentUserProvider>
      <UserDataProvider>
        <AlertProvider>
          {children}
        </AlertProvider>
      </UserDataProvider>
    </CurrentUserProvider>
  );
}
