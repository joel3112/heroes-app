/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { AuthContext } from '../../auth/AuthContext';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import { types } from '../../utils/types.js';
import './Navbar.css';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState('');
  const breakpoint = useBreakpointViewport();
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const isMobile = () => breakpoint === 'xs';
  const handleLogout = () => {
    history.replace('/login');
    dispatch({
      type: types.logout,
    });
  };
  const handleMenu = () => setMenuOpened((prev) => !prev);

  useEffect(() => {
    if (!isMobile()) {
      setMenuOpened(false);
    }
  }, [isMobile])

  const menuToggle = () => {
    return (
      <div className="nav-item nav-link p-0">
        <Hamburger 
           data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
          toggled={menuOpened} 
          toggle={handleMenu} />
      </div>
    );
  };

  const navRoutes = () => {
    return (
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel">
            Marvel
          </NavLink>

          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc">
            DC
          </NavLink>
        </div>
      </div>
    );
  };

  const navActions = () => {
    return (
      <div className="navbar-collapse d-flex flex-row-reverse">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">{user.name}</span>

          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    );
  };

  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-sm navbar-dark ${breakpoint}`}>
        <Link className="navbar-brand" to="/">
          <img src="/assets/logo.png" alt="logo" height="35" />
          <span className="ms-2">Heroes</span>
        </Link>

        {!isMobile() && navRoutes()}
        {!isMobile() && navActions()}
        {isMobile() && menuToggle()}

        <div className={`collapse w-100 ${menuOpened ? 'show' : ''}`}>
          {navRoutes()}
          {navActions()}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
