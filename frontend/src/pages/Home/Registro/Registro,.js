import React from "react";
import { Link } from 'react-router-dom'; 
import "./Registro.css";

function Registro() {
  return (
    <div className="registro-container">
      <div className="form-container">
        <h1 className="logo">Attenzio</h1>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Ingrese su nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" id="apellidos" placeholder="Ingrese sus apellidos" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="correo">Correo</label>
              <input type="email" id="correo" placeholder="Ingrese su correo" />
            </div>
            <div className="form-group">
              <label htmlFor="cedula">Cédula</label>
              <input type="text" id="cedula" placeholder="Ingrese su cédula" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input type="text" id="direccion" placeholder="Ingrese su dirección" />
            </div>
            <div className="form-group">
              <label htmlFor="fotografia">Fotografía</label>
              <input type="file" id="fotografia" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input type="password" id="contraseña" placeholder="Ingrese su contraseña" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmarContraseña">Confirmar contraseña</label>
              <input type="password" id="confirmarContraseña" placeholder="Confirme su contraseña" />
            </div>
          </div>
          <button type="submit" className="register-button"> <Link to='/'> Registrarse </Link></button>
        </form>
      </div>
    </div>
  );
}

export default Registro;