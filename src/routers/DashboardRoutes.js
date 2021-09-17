import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import MarvelScreen from '../pages/MarvelPage';
import DcScreen from '../pages/DcPage';
import HeroScreen from '../pages/HeroPage';

const DashboardRoutes = () => {
  const [container, setContainer] = useState(null);

  return (
    <div className="application-container">
      <Navbar />

      <div className="main-container" id="main-container" ref={setContainer}>
        <Switch>
          <Route exact path="/marvel" render={(props) => <MarvelScreen {...props} container={container} />} />
          <Route exact path="/dc" render={(props) => <DcScreen {...props} container={container} />} />
          <Route exact path="/heroes/:heroId" render={(props) => <HeroScreen {...props} container={container} />} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </div>
  );
};

export default DashboardRoutes;
