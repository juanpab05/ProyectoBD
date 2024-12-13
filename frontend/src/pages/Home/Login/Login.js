import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { loginUsuario } from '../../../api/login';
import axios from 'axios';
import './Login.css'; // Importa el archivo CSS para los estilos

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/usuario/api/login/', {
        correo: correo,
        contraseña: contraseña,
      });
      if (response.status === 200) {
        // Redirect to the main page with the username
        navigate(`/historial/${response.data.username}`);
      } else {
        // Handle error
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Attenzio</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="correo">Correo:</label>
          <input 
            type="email" 
            id="correo" 
            placeholder="Ingresa tu correo" 
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required 
          />

          <label htmlFor="contraseña">Contraseña:</label>
          <input 
            type="password" 
            id="contraseña" 
            placeholder="Ingresa tu contraseña" 
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required 
          />

          <button type="submit" className="login-button">Iniciar sesión</button>

          <div className="login-links">
            <a href="#forgot-password">¿Olvidaste tu contraseña?</a>
            <Link to="/registro">Crear una cuenta</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
