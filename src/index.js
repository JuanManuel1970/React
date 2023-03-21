import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import App from './App';
/* Pao 2: importamos el administrador de rutas */
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Paso 3: envolvemos la aplicación en el administrador de rutas */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


