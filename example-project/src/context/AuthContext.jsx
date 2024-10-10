import React, { createContext, useState, useEffect } from 'react';


/* 

¿Qué es un Contexto Global en React?
Un contexto global en React es una manera de compartir datos (estado, funciones, etc.) entre múltiples componentes sin tener que pasarlos manualmente como props a través de la jerarquía de componentes. En este caso, el contexto global permite manejar la autenticación del usuario en cualquier parte de la aplicación sin tener que pasar el estado de autenticación y las funciones de login/logout de componente a componente.

El contexto global es útil cuando se tienen datos que deben ser accesibles por muchos componentes (como temas de estilo, autenticación, configuraciones globales, etc.) y no se quiere pasar manualmente esta información en cada componente padre/hijo.

*/


/* 

createContext

Este es el método de React para crear un contexto. El contexto permite compartir valores (como el estado de autenticación) entre componentes sin necesidad de pasarlos manualmente como props a través de cada nivel de la jerarquía de componentes.

*/


export const AuthContext = createContext();

/* 

createContext(): Este método crea un contexto llamado AuthContext. Este contexto permitirá que el estado de autenticación (si un usuario está o no autenticado) y las funciones de autenticación (login y logout) estén disponibles en cualquier componente que lo consuma.

*/

export const AuthProvider = ({ children }) => {
  /* 
  
  AuthProvider: Es un componente funcional que provee el estado y las funciones de autenticación a todos los componentes hijos que estén dentro de este proveedor.

  ({ children }): El componente AuthProvider acepta un prop especial llamado children, que representa los componentes hijos que se envolverán dentro del proveedor. Todo lo que esté dentro de este componente podrá acceder al contexto.

  useState(false): Se utiliza el hook useState para crear una variable de estado isAuthenticated que controla si el usuario está autenticado o no. Su valor inicial es false, es decir, el usuario no está autenticado al inicio.
    
  */
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  /* 
  
  useEffect(): Este hook se ejecuta al montar el componente. En este caso, se utiliza para comprobar si el usuario ya está autenticado cuando la aplicación se carga, usando el valor almacenado en localStorage.

  localStorage.getItem('isAuthenticated') === 'true': Verifica si en el localStorage hay un valor que indique que el usuario ya está autenticado. Si el valor almacenado es 'true', el usuario está autenticado; si no, el usuario no lo está.

  setIsAuthenticated(loggedIn): Si el usuario estaba autenticado previamente (según el valor almacenado en localStorage), actualiza el estado de isAuthenticated a true.
    
  */
  useEffect(() => {
    // Simulamos autenticación para pruebas, puedes usar localStorage o alguna lógica real
    const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  /* 
  
  login(): Esta función actualiza el estado isAuthenticated a true, lo que indica que el usuario ha iniciado sesión. Además, almacena el valor 'true' en el localStorage para que la próxima vez que el usuario vuelva a cargar la página, se mantenga autenticado.
  
  */

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
  };


  /* 
  
  logout(): Esta función hace lo contrario de login. Cambia el estado isAuthenticated a false, lo que indica que el usuario ha cerrado sesión, y actualiza el localStorage con el valor 'false'.
  
  */

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>

    {/* 
    
    ¿Qué es AuthContext.Provider?
    AuthContext.Provider es un componente especial que viene del contexto que creamos anteriormente con createContext. Su propósito es proveer (de ahí su nombre) datos a todos los componentes hijos que estén envueltos dentro de él.

    Provider: provee datos significa que cualquier componente que esté dentro de este Provider podrá "consumir" el contexto, es decir, tendrá acceso a los valores y funciones que se pasen dentro de la propiedad value.
        
    */}

    {/* 
    
    La propiedad value es un objeto que contiene los datos que queremos compartir con los componentes hijos.
    
    */}
      {children}
    </AuthContext.Provider>
  );

  /* 
  
  <AuthContext.Provider>: El componente AuthProvider usa el contexto que creamos con createContext para envolver a todos los componentes hijos ({children}). Esto permite que todos los componentes hijos tengan acceso a los valores y funciones que se pasan dentro de la propiedad value.

  {children}: Esto permite que cualquier componente hijo envuelto por AuthProvider (es decir, cualquier componente que esté entre las etiquetas de apertura y cierre de AuthProvider) pueda acceder a los valores y funciones provistos por el contexto.
    
  */
};
