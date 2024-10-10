// Importamos StrictMode de React para habilitar un modo de verificación adicional en el desarrollo
import { StrictMode } from 'react';
// Importamos createRoot de 'react-dom/client' para renderizar nuestro componente raíz
import { createRoot } from 'react-dom/client';
// Importamos el componente principal de nuestra aplicación
import App from './App.jsx';
// Importamos los estilos CSS de la aplicación
import './styles.css';
// Importamos el AuthProvider desde el contexto de autenticación
import { AuthProvider } from './context/AuthContext'; 

// Creamos el root donde se renderizará nuestra aplicación
createRoot(document.getElementById('root')).render(
    // StrictMode permite identificar problemas potenciales en la aplicación y mejorar su calidad
    <StrictMode>
      {/* AuthProvider es un componente que proporciona el contexto de autenticación a toda la aplicación */}
      <AuthProvider>
        {/* Renderizamos el componente App que contiene la lógica y las rutas de la aplicación */}
        <App />
      </AuthProvider>
    </StrictMode>
);
