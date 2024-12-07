import React from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css'; // Importa el archivo CSS para los estilos

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Attenzio</h1>
        <form className="login-form">
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" placeholder="Ingresa tu correo" required />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" required />

          <button type="submit" className="login-button"><Link to='/historial'> Iniciar sesión</Link></button>

          <div className="login-links">
            <a href="#forgot-password">¿Olvidaste tu contraseña?</a>
            <a href="#register">Crear una cuenta</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
