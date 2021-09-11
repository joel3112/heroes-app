import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import MarvelScreen from '../pages/MarvelPage';
import DcScreen from '../pages/DcPage';
import HeroScreen from '../pages/HeroPage';

const DashboardRoutes = ({ history }) => {
  return (
    <div className="application-container">
      <Navbar />

      <div className="main-container" id="main-container">
        <Switch>
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
