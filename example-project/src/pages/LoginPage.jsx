// src/pages/LoginPage.js
import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <h2>Bienvenido al inicio de sesion</h2>
      <p>Inicia sesion para poder acceder a la creacion de tareas</p>
      <button className="btn-login" onClick={handleLogin}>Iniciar Sesion</button>
    </div>
  );
}

export default LoginPage;
