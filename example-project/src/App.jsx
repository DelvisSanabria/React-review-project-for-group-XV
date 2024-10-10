// Importamos React y el hook useContext para acceder al contexto global
import React, { useContext } from 'react';
// Importamos los componentes de enrutamiento de react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Importamos el componente Navbar que muestra el menú de navegación
import Navbar from './components/Navbar';
// Importamos las páginas del dashboard, login y home que hemos creado
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';  
// Importamos el AuthContext para saber si el usuario está autenticado
import { AuthContext } from './context/AuthContext';

// Definimos el componente principal de la aplicación
function App() {
  // Extraemos el valor isAuthenticated del AuthContext para saber si el usuario está logueado o no
  const { isAuthenticated } = useContext(AuthContext);

  return (
    // Router envuelve toda la aplicación y se encarga de manejar la navegación entre rutas
    <Router>
      <div className="app">
        {/* Incluimos el Navbar en todas las páginas */}
        <Navbar />
        
        {/* Configuramos las rutas usando el componente Routes */}
        <Routes>
          {/* Ruta principal ("/"), muestra la HomePage si no está autenticado, 
              si el usuario está autenticado, lo redirige al "/dashboard" */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <HomePage />} />
          
          {/* Ruta para la página de login, siempre se puede acceder sin importar si está autenticado */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Ruta para el dashboard, solo accesible si el usuario está autenticado. Si no lo está, 
              se redirige a la página de login */}
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />

          {/* Cualquier otra ruta no especificada (404), redirige a la página principal ("/") */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

// Exportamos el componente App para que se pueda usar en la aplicación
export default App;
