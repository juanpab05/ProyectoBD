import React from "react";
import Header from '../../components/Header/Header';
import "../style.css";

const Asistencia = () => {
  return (
    <div className="container">
      
      {/** Contenedor principal*/}
      <div className="content">

        {/*Header*/}
        <Header/>

        {/** Cuerpo */}
        <main className="main">
          <h1 className="title">Reporte de la clase n</h1>
          <div className="table">
            <div className="table-header">
              <span className="table-column">Estudiantes</span>
              <span className="table-column">Asistencia</span>
            </div>
            <div className="table-row">
              <span className="student-name">Nombre estudiante</span>
              <span className="status">Asistencia</span>
            </div>
            <div className="table-row">
              <span className="student-name">Nombre estudiante</span>
              <span className="status">Asistencia</span>
            </div>
            <div className="table-row">
              <span className="student-name">Nombre estudiante</span>
              <span className="status">Asistencia</span>
            </div>
          </div>
        </main>


      </div>
    </div>
  );
};

export default Asistencia;