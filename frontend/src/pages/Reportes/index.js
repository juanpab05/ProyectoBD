import React from "react";
import Header from "../../components/Header/Header";
import "../style.css";
import "./Reportes.css";

const ReporteClases = () => {
  return (
    <div className='container'>
      <div className="content">
      <Header/>

      <main className="main">
        <h1 className="title">Reporte Detallado de las clases</h1>

        {/** Itera sobre las clase, preguntas y las presenta */}
        <div className="list">
          {["CLASE 1", "CLASE 2", "CLASE 3", "CLASE 4"].map((clase, index) => (
            <div key={index} className="item">
              <span className="clase">{clase}</span>
              <div className="buttons">
                <button className="btn btn-pregunta">Ver Pregunta(s)</button>
                <button className="btn btn-asistencia">Ver Asistencia</button>
              </div>
            </div>
          ))}
        </div>

      </main>


      </div>
    </div>
  );
};

export default ReporteClases;