import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { AuthContext } from '../../contexts/AuthContext';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import { isMobile } from '../../utils/helpers';
import './Navbar.css';

const Navbar = () => {
  const history = useHistory();
  const [menuOpened, setMenuOpened] = useState('');
  const { user, logout } = useContext(AuthContext);
  const breakpoint = useBreakpointViewport();

  const handleLogout = () => {
    history.replace('/login');
    logout();
  };
  const handleMenu = () => setMenuOpened((prev) => !prev);

  useEffect(() => {
    if (!isMobile(breakpoint)) {
      setMenuOpened(false);
    }
  }, [breakpoint]);

  const menuToggle = () => {
    return (
      <div className="nav-item nav-link p-0">
        <Hamburger data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" toggled={menuOpened} toggle={handleMenu} />
      </div>
    );
  };

  const navRoutes = () => {
    return (
      <div className="navbar-collapse">
        <div className="navbar-nav">
          {/* <NavLink activeClassName="active" className="nav-item nav-link nav-route" exact to="/home">
            Home
          </NavLink> */}

          <NavLink activeClassName="active" className="nav-item nav-link nav-route" exact to="/marvel">
            Marvel
          </NavLink>

          <NavLink activeClassName="active" className="nav-item nav-link nav-route" exact to="/dc">
            DC
          </NavLink>
        </div>
      </div>
    );
  };

  const navActions = () => {
    return (
      <div className="navbar-collapse nav-bar-actions">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">{user.name}</span>

          <button className="nav-item nav-link btn nav-link-button" onClick={handleLogout}>
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
          <img src="/assets/logo.png" className="logo" alt="logo" />
          <span>Heroes</span>
        </Link>

        {!isMobile(breakpoint) && navRoutes()}
        {!isMobile(breakpoint) && navActions()}
        {isMobile(breakpoint) && menuToggle()}

        <div className={`collapse ${menuOpened ? 'show' : ''}`}>
          {navRoutes()}
          {navActions()}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
