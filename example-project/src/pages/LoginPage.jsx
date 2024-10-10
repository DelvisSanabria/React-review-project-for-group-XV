// Importamos React y el hook useContext que permite acceder a contextos globales
import React, { useContext } from 'react';
// Importamos el hook useNavigate de react-router-dom para manejar la navegación
import { useNavigate } from 'react-router-dom';
// Importamos el AuthContext, que nos dará acceso a la autenticación global
import { AuthContext } from '../context/AuthContext';

// Definimos el componente funcional LoginPage
function LoginPage() {
  // Extraemos la función login del AuthContext usando useContext. Esto nos permite acceder a la lógica de autenticación
  const { login } = useContext(AuthContext);
  
  // Inicializamos el hook useNavigate para redirigir al usuario después de iniciar sesión
  const navigate = useNavigate();

  // Función que maneja el proceso de inicio de sesión cuando el usuario hace clic en el botón
  const handleLogin = () => {
    // Ejecutamos la función login, que se encargará de autenticar al usuario
    login();
    // Una vez autenticado, redirigimos al usuario a la ruta '/dashboard'
    navigate('/dashboard');
  };

  // JSX que define el diseño visual de la página de inicio de sesión
  return (
    <div className="login-page">
      {/* Título de la página de inicio de sesión */}
      <h2>Bienvenido al inicio de sesion</h2>

      {/* Descripción que informa al usuario que debe iniciar sesión para acceder a las tareas */}
      <p>Inicia sesion para poder acceder a la creacion de tareas</p>

      {/* Botón que, al hacer clic, ejecuta la función handleLogin para autenticar al usuario */}
      <button className="btn-login" onClick={handleLogin}>
        Iniciar Sesion
      </button>
    </div>
  );
}

// Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
export default LoginPage;
