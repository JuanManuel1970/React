import React from 'react';
import pesa2Image from '/assets/3.png';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src={pesa2Image} alt="Pesa" className="pesa2-image" />MernGYM</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Runing">Runing</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Formulario">Formulario</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Vite">Vite</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Faq">Faq</Link>
            </li>
            
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
