// src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="home-page">
      <h1>Bienvenido a nuestro Repaso!</h1>
      <p>
        Estoy feliz de que te hayas unido, vamos a crear una TODO list para repasar conceptos
        de React.
      </p>
      <button className="btn-login" onClick={handleLoginRedirect}>
        Ir a inicio de Sesion
      </button>
    </div>
  );
}

export default HomePage;
