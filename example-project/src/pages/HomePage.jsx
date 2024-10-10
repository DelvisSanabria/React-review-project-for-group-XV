import React from 'react'; // Importamos la librería de React
import { useNavigate } from 'react-router-dom'; // Importamos el hook useNavigate de react-router-dom para manejar la navegación

// Componente funcional que representa la página de inicio (HomePage)
function HomePage() {
  // Inicializamos el hook useNavigate, que devuelve una función para programar la navegación entre rutas
  const navigate = useNavigate();

  // Función que se ejecuta cuando el usuario hace clic en el botón de "Ir a inicio de Sesion"
  const handleLoginRedirect = () => {
    // Utilizamos la función 'navigate' para redirigir al usuario a la ruta '/login'
    navigate('/login');
  };

  // El retorno JSX define la estructura visual del componente que se renderiza en la página
  return (
    <div className="home-page">
      {/* Título principal de la página */}
      <h1>Bienvenido a nuestro Repaso!</h1>
      
      {/* Descripción introductoria, animando al usuario a crear una lista de tareas */}
      <p>
        Estoy feliz de que te hayas unido, vamos a crear una TODO list para repasar conceptos
        de React.
      </p>
      
      {/* Botón que, al hacer clic, ejecuta la función 'handleLoginRedirect' para redirigir al usuario a la página de inicio de sesión */}
      <button className="btn-login" onClick={handleLoginRedirect}>
        Ir a inicio de Sesion
      </button>
    </div>
  );
}

export default HomePage; // Exportamos el componente para poder usarlo en otras partes de la aplicación
