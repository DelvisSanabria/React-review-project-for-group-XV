import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Asegúrate de tener un contexto de autenticación.

const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default useAuth;

