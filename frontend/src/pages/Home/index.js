import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <h1>
          <span className="black">Atten</span><span className="highlight">zio</span>
          </h1>
        </div>
        <div className="buttons">
          <button className="button login"><Link to='/login'> Iniciar sesión</Link></button>
          <button className="button register"><Link to='/registro'> Registrarse </Link></button>
        </div>
      </header>
      <section className="main-content">
        <div className="text-container">
          <h2>¡Bienvenidos a Attenzio!</h2>
          <p>
            Una plataforma creada para facilitar el control de asistencia y mejorar
            la participación en clase mediante una experiencia sencilla y rápida. Con
            Attenzio, los estudiantes pueden registrar su asistencia escaneando un código
            QR que verifica su ubicación en el aula en tiempo real, y responder preguntas
            interactivas durante la clase.
          </p>
          <p>
            Attenzio es ideal para instituciones educativas que buscan simplificar el
            proceso de asistencia y fomentar una mayor atención en el aprendizaje. Además,
            los docentes pueden acceder a reportes detallados de asistencia y participación,
            ayudando a mejorar la dinámica de enseñanza y el seguimiento del rendimiento de
            cada estudiante.
          </p>
        </div>
        <div className="image-container">
          <img
            src="/images/estudiantes.webp"
            alt="Estudiantes usando Attenzio"
            className="image"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;