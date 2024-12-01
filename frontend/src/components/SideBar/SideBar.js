import React from "react";
import "./SideBar.css";

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
            <li>Inicio</li>
            <li>Crear clase</li>
            <li>Clases creadas</li>
            <li>Reportes de las clases</li>
            <li>Crear preguntas/subir material a clases</li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
