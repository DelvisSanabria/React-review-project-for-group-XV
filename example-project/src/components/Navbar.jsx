/* 

¿Qué es un componente?

Un componente en React es una pieza reutilizable de código que representa una parte de la interfaz de usuario (UI). Los componentes pueden ser clases o funciones que devuelven elementos de React. Los componentes permiten dividir la UI en partes más pequeñas, modulares, y reutilizables. En React, hay dos tipos de componentes principales:

- Componentes de Clase: Definidos como clases de JavaScript que extienden de `React.Component`.
- Componentes Funcionales: Son funciones de JavaScript que retornan JSX. Los componentes funcionales suelen ser preferidos porque son más simples y fáciles de leer.

*/

import React, { useContext } from "react";
/* 

Se importa el componente Link desde react-router-dom, que se utiliza para la navegación entre rutas en aplicaciones de React con enrutamiento. Link permite cambiar la URL sin recargar toda la página, aprovechando el enrutamiento dinámico del lado del cliente.

*/
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  /* 
  
  Aquí estamos desestructurando el valor que devuelve nuestro contexto.

  isAuthenticated: Un booleano que indica si el usuario está autenticado o no.
  logout: Una función que permite al usuario cerrar sesión cuando se llama.

  */

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
        {/* 
        
        isAuthenticated ?: Se verifica si el usuario está autenticado. Dependiendo del valor de isAuthenticated, se renderiza un bloque u otro:
        Si el usuario está autenticado (isAuthenticated es true):
        <Link to="/dashboard">Panel administrativo</Link>: Un enlace al panel administrativo, probablemente disponible solo para usuarios autenticados.
        <button onClick={logout}>terminar sesion</button>: Un botón para cerrar sesión. Al hacer clic en este botón, se invoca la función logout para cerrar la sesión.
        Si el usuario no está autenticado (isAuthenticated es false):
        <Link to="/login">Iniciar Sesion</Link>: Muestra un enlace que dirige al usuario a la página de inicio de sesión.

        */}
      </div>
    </nav>
  );
}

export default Navbar;
