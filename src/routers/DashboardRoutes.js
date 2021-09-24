import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ContainerContext } from '../contexts/ContainerContext';
import Navbar from '../components/ui/Navbar';
import HomeScreen from '../pages/HomePage';
import MarvelScreen from '../pages/MarvelPage';
import DcScreen from '../pages/DcPage';
import HeroScreen from '../pages/HeroPage';

const DashboardRoutes = () => {
  const { setContainer } = useContext(ContainerContext);

  return (
    <div className="application-container">
      <Navbar />

        <div className="main-container" ref={setContainer}>
          <Switch>
            <Route exact path="/home" component={HomeScreen} />
            <Route exact path="/marvel" component={MarvelScreen} />
            <Route exact path="/dc" component={DcScreen} />
            <Route exact path="/heroes/:heroId" component={HeroScreen} />

            <Redirect to="/marvel" />
          </Switch>
        </div>
    </div>
  );
};

export default DashboardRoutes;
