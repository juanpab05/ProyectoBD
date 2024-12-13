import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style.css';

const CursosProfesor = ({ nombreUsuario }) => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get(`/api/usuarioApi/${nombreUsuario}/cursos`);
        setCursos(response.data); // Asume que la API devuelve un array de objetos con los datos de los cursos
      } catch (error) {
        console.error("Error al cargar los cursos:", error);
        setError("No se pudieron cargar los cursos.");
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, [nombreUsuario]);

  if (loading) {
    return <div>Cargando cursos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      {/* Título */}
      <h1 className="title">Cursos Asignados</h1>

      {/* Lista de cursos */}
      <div className="list">
        {cursos.map((curso, index) => (
          <div key={index} className="item">
            <span className="clase">Curso: {curso.nombre}</span>
            <div className="date">
              <span className="class-date">Sección: {curso.seccion}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursosProfesor;
