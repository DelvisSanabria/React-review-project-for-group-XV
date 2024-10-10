// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">TODO list</Link>
      </div>
      <div className="navbar-links">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Panel administrativo</Link>
            <button onClick={logout}>terminar sesion</button>
          </>
        ) : (
          <>
            <Link to="/login">Iniciar Sesion</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
