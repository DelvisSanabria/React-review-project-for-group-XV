// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';  // Importamos la nueva página
import useAuth from './hooks/useAuth';


function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          {/* Mostrar la página de bienvenida si no está autenticado */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <HomePage />} />
          
          {/* Rutas para Login y Dashboard */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />

          {/* Ruta 404 o redirección a la home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
