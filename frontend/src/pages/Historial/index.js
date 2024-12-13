import React, { useState, useEffect } from 'react';
import "../style.css";
import "./Historial.css";
import { useParams} from 'react-router-dom';
import { obtenerClasesCurso } from '../../api/clasesApi';
import Header from '../../components/Header/Header';

const Historial = () => {
  const { nombreUsuario, nombreCurso } = useParams(); // Captura el nombreUsuario desde la URL
  const [clases, setClases] = useState([]); // Estado para las clases
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para errores

    // Efecto para cargar las clases del profesor
    useEffect(() => {
      const fetchClases = async () => {
        try {
          setLoading(true);
          const datos = await obtenerClasesCurso(nombreUsuario, nombreCurso); // Llama a la API
          setClases(datos); // Actualiza el estado con las clases obtenidas
          console.log(clases);
        } catch (err) {
          setError("No se pudieron cargar las clases. Inténtalo más tarde.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchClases();
    }, [nombreUsuario]);

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
