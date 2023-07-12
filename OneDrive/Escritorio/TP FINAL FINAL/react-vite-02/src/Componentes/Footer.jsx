import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h5>Encontranos en:</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.7417512146235!2d-58.36567972500077!3d-34.66122436053622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3335032a3a871%3A0xacf3b1f8f91dff4c!2sBodynfinit%20Gym!5e0!3m2!1ses-419!2sar!4v1688984302427!5m2!1ses-419!2sar" width="300" height="225" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="col-md-4">
           
            <h5>Estas son nuestras redes Sociales  :</h5>
            <div className="social-icons">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+123456789" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            <p>Tel : 4303-1600 </p>
            
          </div>

          <div className="col-md-4">
            <h5>Horarios de Atención :</h5>
            <p>Lunes a Viernes: 8:00 am - 10:00 pm</p>
            <p>Sábados: 9:00 am - 5:00 pm</p>
            <p>Domingos: Cerrado</p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">© {new Date().getFullYear()} Gimnasio MernGYM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
