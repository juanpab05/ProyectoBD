import React from 'react';
import "../style.css";
import "./Historial.css";
import Header from '../../components/Header/Header';

const Historial = () => {
  // Datos de las clases
  const clases = [
    { nombre: "CLASE 1", fecha: "05/12/2024" },
    { nombre: "CLASE 2", fecha: "06/12/2024" },
    { nombre: "CLASE 3", fecha: "07/12/2024" },
    { nombre: "CLASE 4", fecha: "08/12/2024" },
  ];

  return (
    <div className="container">


      {/* Contenido principal */}
      <div className="content">
        
        
        {/* Header */}
        <Header />


        {/* Lista dinámica */}
        <main className="main">
          <div className="header-row">
            <h1 className="title">Historial de las clases</h1>
            <h1 className="subtitle">Fecha</h1>
          </div>
          <div className="list">
            {clases.map((clase, index) => (
              <div key={index} className="item">
                <span className="clase">{clase.nombre}</span>
                <div className="date">
                  <span className="class-date">{clase.fecha}</span>
                </div>
              </div>
            ))}
          </div>
        </main>



      </div>
    </div>
  );
};

export default Historial;
