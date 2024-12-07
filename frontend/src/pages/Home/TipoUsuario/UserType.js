import React from 'react';
import './UserType.css'; // Importa el archivo CSS

const UserType = () => {
  return (
    <div className="user-type-container">
      <div className="user-type-box">
        <h1 className="user-type-title">Attenzio</h1>
        <h2 className="user-type-subtitle">
          Bienvenido a Attenzio, ¿Cuál de los siguientes roles te identifica?
        </h2>
        <div className="user-type-buttons">
          <button className="user-type-button profesor">Profesorado</button>
          <button className="user-type-button estudiante">Estudiante</button>
        </div>
      </div>
    </div>
  );
};

export default UserType;