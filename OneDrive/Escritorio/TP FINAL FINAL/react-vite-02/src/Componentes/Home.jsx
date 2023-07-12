import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import './home.css';
import pesaImage from '/assets/1.png';
import pesa1Image from '/assets/2.png';

const Home = () => {
  return (
    <Container>
      <div className="title-container">
        <h1 className="text-center mb-5">
          <img src={pesa1Image} alt="Pesa" className="pesa1-image" /> Bienvenido a MernGYM{' '}
          <img src={pesa1Image} alt="Pesa" className="pesa1-image" />
        </h1>
        <div className="image-container"></div>
      </div>
      <h2 className="text-center mb-4">
        <img src={pesaImage} alt="Pesa" className="pesa-image" /> Mejora tu salud y bienestar
        <img src={pesaImage} alt="Pesa" className="pesa-image" />
      </h2>

      <Container className="yo">
        
      </Container>

      <h2 className="text-center mb-5">
        <img src={pesaImage} alt="Pesa" className="pesa-image" /> Explora nuestras instalaciones
        <img src={pesaImage} alt="Pesa" className="pesa-image" />
      </h2>

      <Container className="trabajos">
        <Row className="card-container">
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="../assets/musc.jpg" />
              <Card.Body>
                <Card.Title>Área de Musculación</Card.Title>
                <Card.Text>
                  Nuestra completa área de musculación está equipada con máquinas de última
                  generación para brindarte el mejor entrenamiento. Tanto si eres principiante como
                  si eres un atleta experimentado, encontrarás todo lo que necesitas para fortalecer
                  tus músculos y alcanzar tus objetivos de acondicionamiento físico.
                </Card.Text>
                <Card.Text>
                  Nuestro equipo de entrenadores profesionales estará disponible para asesorarte y
                  diseñar un programa de ejercicios personalizado según tus necesidades y metas.
                  Disfruta de un ambiente motivador y seguro mientras trabajas en tu fuerza y
                  resistencia.
                </Card.Text>
                <Card.Text>
                  ¡No esperes más para mejorar tu rendimiento y obtener resultados visibles! Únete a
                  nuestras clases de musculación y descubre una comunidad de entusiastas del fitness
                  que te acompañarán en tu camino hacia una vida más saludable y activa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="../assets/grupo.jpg" />
              <Card.Body>
                <Card.Title>Clases Grupales</Card.Title>
                <Card.Text>
                  Participa en nuestras emocionantes clases grupales y lleva tu entrenamiento al
                  siguiente nivel. Desde sesiones de spinning llenas de energía hasta intensas
                  rutinas de zumba y desafiantes entrenamientos funcionales, encontrarás una amplia
                  variedad de opciones para mantenerte motivado y alcanzar tus objetivos.
                </Card.Text>
                <Card.Text>
                  Nuestros talentosos instructores te guiarán a través de cada clase, asegurándose
                  de que te ejercites de manera segura y efectiva. Únete a una comunidad de personas
                  entusiastas que comparten tus mismos intereses y disfruta del ambiente amigable y
                  estimulante que ofrecemos en nuestras clases grupales.
                </Card.Text>
                <Card.Text>
                  No importa si eres principiante o experto, nuestras clases se adaptan a todos los
                  niveles de condición física. Descubre el placer de ejercitarte en grupo, aumenta
                  tu resistencia, quema calorías y diviértete mientras te pones en forma. ¡No te
                  pierdas la oportunidad de formar parte de esta experiencia única!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="../assets/spa.jpg" />
              <Card.Body>
                <Card.Title>Piscina y Spa</Card.Title>
                <Card.Text>
                  Relájate y disfruta de nuestras increíbles instalaciones acuáticas. Sumérgete en
                  nuestra piscina de primer nivel, donde podrás nadar, hacer ejercicios acuáticos o
                  simplemente relaxarte. Además, contamos con un área de spa diseñada para brindarte momentos de tranquilidad y rejuvenecimiento.
                </Card.Text>
                <Card.Text>
                  Nuestro personal capacitado te proporcionará el mejor servicio y te guiará en el uso de nuestras instalaciones. Desconecta del estrés diario mientras te sumerges en un ambiente sereno y cuidado. Nuestro spa ofrece una variedad de tratamientos, desde masajes relajantes hasta terapias de hidroterapia, para que puedas renovarte por completo.
                </Card.Text>
                <Card.Text>
                  Aprovecha la oportunidad de cuidar tu cuerpo y mente en nuestro espacio acuático y de spa. Date un capricho, alivia la tensión muscular, mejora tu circulación y disfruta de momentos de bienestar incomparables. ¡Te garantizamos una experiencia rejuvenecedora que te hará sentir renovado y revitalizado!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <h2 className="text-center mb-4">
        <img src={pesaImage} alt="Pesa" className="pesa-image" /> Mira alguna de nuestras imágenes
        <img src={pesaImage} alt="Pesa" className="pesa-image" />
      </h2>

      <Container className="Carrusel">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="../assets/1.jpg" alt="Imagen 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="../assets/9.jpg" alt="Imagen 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="../assets/3.jpg" alt="Imagen 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="../assets/1.jpeg" alt="Imagen 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="../assets/7.jpg" alt="Imagen 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="../assets/6.jpg" alt="Imagen 3" />
          </Carousel.Item>
        </Carousel>
      </Container>
      <h2 className="text-center mb-4">
        <img src={pesaImage} alt="Pesa" className="pesa-image" /> Asociate ya!!! mira nuestro precios!!!
        <img src={pesaImage} alt="Pesa" className="pesa-image" />
      </h2>




      <Container className='asociate'>
        <Row className="card-container text-center mb-4">
            <Col xs={12} sm={6} md={4}>
                  <Card className="card7">
                  <p>Mensual</p>
                  <h3>Plan Plus</h3>
                  <hr />
                  <p>$12.000 /mes</p>
                  <p>¡Accede a 10 sedes!</p>
                  <ul>
                  <li>Acceso a 10 sedes</li>
                  <li>Actividades Indoor/Outdoor</li>
                  <li>Clases en vivo y On Demand</li>
                  <li>Nutricionista</li>
                  <li>Salidas Runing</li>
                  </ul>
                  </Card>
            </Col>
              <Col xs={12} sm={6} md={4}>
                  <Card className="card6">
                      <p>Mensual</p>
                      <h3>Plan Total</h3>
                      <hr />
                      <p>$15.000 /mes</p>
                      <p>¡Accede a + de 20 sedes!</p>
                      <ul>
                      <li>Acceso a +20 sedes</li>
                      <li>Actividades Indoor/Outdoor</li>
                      <li>Clases en vivo y On Demand</li>
                      <li>Nutricionista</li>
                      <li>Musculacion personalizada</li>
                      <li>Salidas Runing</li>
                      </ul>
                  </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
                  <Card className="card8">
                  <p>Mensual</p>
                  <h3>Plan Base</h3>
                  <hr />
                  <p>$9.000 /mes</p>
                  <p>¡Accede a 2 sedes!</p>
                  <ul>
                  <li>Acceso a 2 sedes</li>
                  <li>Actividades Indoor/Outdoor</li>
                  <li>Clases en vivo y On Demand</li> 
                  <li>Nutricionista</li>
                  </ul>
                  </Card>
            </Col>
      </Row>
      </Container>






    </Container>



  );
};

export default Home;
