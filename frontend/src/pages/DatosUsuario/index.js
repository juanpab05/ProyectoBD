import React from 'react';
import './styles.css'; // Importa el archivo CSS

const DatosUsuario = () => {
  return (
    <div className="user-details-container">
      <div className="user-details-box">
        <h1 className="user-details-title">Attenzio</h1>
        <h2 className="user-details-subtitle">Datos del Usuario</h2>
        <form className="user-details-form">
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
          <input type="text" placeholder="Tipo de mesero" required />
          <input type="text" placeholder="Correo" required />
          <input type="text" placeholder="Cédula" required />
          <input type="text" placeholder="Dirección" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit" className="user-details-btn">Volver</button>
        </form>
      </div>
    </div>
  );
};

export default DatosUsuario;
