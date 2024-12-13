import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useParams } from 'react-router-dom'; // Para obtener los parámetros de la URL
import { fetchCursosPorProfesor } from '../../api/cursoApi'; // API personalizada
import '../style.css';

const CursosProfesor = () => {
  const { nombreUsuario } = useParams(); // Captura el parámetro dinámico desde la URL
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const cursosData = await fetchCursosPorProfesor(nombreUsuario);
        setCursos(cursosData);
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

      <div className='content'>

        {/* Header */}
          <header className="header">
          <div className="header-content">
        
            {/* Logo */}
            <div className="logo">
            <span className="black">Atten</span><span className="highlight">zio</span>
            </div>

            {/* Perfil de usuario */}
            <div className="user-profile">
              <div className="user-icon">&#128100;</div>
              <span className="username">@NombreUsuario</span>
            </div>
          </div>
        </header>

        <div className='main'>

        <h1 className="title">Cursos Asignados</h1>

          <div className="list">
            {cursos.map((curso, index) => (
              <div key={index} className="item">
                <Link to={`/${nombreUsuario}/cursos/${curso.nombre}/historial`}> 
                  {/* Enlazar al nombre del curso */} 
                  <span className="clase">Curso: {curso.nombre}</span> 
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default CursosProfesor;
