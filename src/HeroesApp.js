import React from 'react';
import { AuthContextProvider } from './contexts/AuthContext';
import { ContainerContextProvider } from './contexts/ContainerContext';
import AppRouter from './routers/AppRouter';

import './HeroesApp.scss';
import './HeroesApp.less';

const HeroesApp = () => {
  return (
    <AuthContextProvider>
      <ContainerContextProvider>
        <AppRouter />
      </ContainerContextProvider>
    </AuthContextProvider>
  );
};

export default HeroesApp;
