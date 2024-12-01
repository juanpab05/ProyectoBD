import React from "react";
import Header from "../../components/Header/Header";
import "../style.css";
import "./style.css";

const InformePreguntas = () => {
  const preguntasData = [
    { pregunta: "Pregunta 1", promedio: "22/25", estudiantes: "25/30", fecha: "05/12/2024" },
    { pregunta: "Pregunta 2", promedio: "18/30", estudiantes: "30/30", fecha: "06/12/2024" },
    { pregunta: "Pregunta 3", promedio: "15/28", estudiantes: "28/30", fecha: "07/12/2024" },
    { pregunta: "Pregunta 4", promedio: "5/11", estudiantes: "11/30", fecha: "08/12/2024" },
  ];

  return (
    <div className="container">
      <div className="content">
        <Header />

        <main className="main">

          {/* Encabezados de la tabla */}
          <div className="table-header">
            <div>Reporte Detallado de las preguntas</div>
            <div>Promedio de aciertos</div>
            <div>Cantidad de estudiantes que respondieron</div>
            <div>Fecha realizado</div>
          </div>

          {/* Lista dinámica de preguntas */}
          <div className="list">
            {preguntasData.map((pregunta, index) => (
              <div key={index} className="item">
                <span className="pregunta-titulo">{pregunta.pregunta.toUpperCase()}</span>
                <span>{pregunta.promedio}</span>
                <span>{pregunta.estudiantes}</span>
                <span>{pregunta.fecha}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default InformePreguntas;
