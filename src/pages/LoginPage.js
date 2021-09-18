import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = ({ history }) => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    login({ name: 'Joel' });
    history.replace(lastPath);
  };

  return (
    <div className="container page-container">
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Ingresar
      </button>
    </div>
  );
};

export default LoginPage;
