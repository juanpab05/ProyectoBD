import React, { useState } from "react";
import SideBar from '../SideBar/SideBar';
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return ( // Asegúrate de retornar el JSX aquí
    <header className="header">
      <div className="header-content">
        {/* Botón de apertura del menú dentro del header */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Sidebar */}
        <SideBar menuOpen={menuOpen} toggleMenu={toggleMenu} />

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
  );
};

export default Header;
