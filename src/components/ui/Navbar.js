import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    history.replace('/login');
    dispatch({
      type: types.logout,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        <img src="/assets/logo.png" alt="logo" height="35" />
        <span className="ms-2">Heroes</span>
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel">
            Marvel
          </NavLink>

          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc">
            DC
          </NavLink>

          {/* <NavLink activeClassName="active" className="nav-item nav-link" exact to="/search">
            Search
          </NavLink> */}
        </div>
      </div>

      <div className="navbar-collapse d-flex flex-row-reverse">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">{user.name}</span>

          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
