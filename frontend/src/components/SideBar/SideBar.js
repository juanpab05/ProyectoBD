import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="sidebar-container">
      {/* Menú lateral */}
      <aside className={`menu ${menuOpen ? "menu-open" : ""}`}>
        {/* Botón para cerrar el menú dentro del menú */}
        <div className="menu-close" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Contenido del menú lateral */}
        <div className="menu-header">
          <div className="menu-logo">
            Attenz<span className="highlight">io</span>
          </div>
        </div>
        <nav className="menu-nav">
          <ul>
            <li><Link to='/historial'>Inicio</Link></li>
            <li><Link to='/creacionclase'>  Crear clase </Link></li>
            <li><Link to='/reportes'> Reportes de las clases </Link></li>
            <li><Link to='/crearpreguntas'>Crear preguntas/subir material a clases</Link></li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
