import React, { useState } from 'react';
import './faq.css';
import pesaImage from '/assets/1.png';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq">
      
      <h2 className="text-center mb-5"><img src={pesaImage} alt="Pesa" className="pesa-image" />Preguntas frecuentes<img src={pesaImage} alt="Pesa" className="pesa-image" /></h2>
      <ol>
        <li>
          <h3 onClick={() => toggleAnswer(0)}>¿Cuál es el horario de atención?</h3>
          <p className={activeIndex === 0 ? 'show' : ''}>Nuestro horario de atención es de lunes a viernes de 9:00 AM a 6:00 PM.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(1)}>¿Cuáles son los métodos de pago aceptados?</h3>
          <p className={activeIndex === 1 ? 'show' : ''}>Aceptamos tarjetas de crédito, débito y transferencias bancarias.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(2)}>¿Puedo cancelar mi suscripción en cualquier momento?</h3>
          <p className={activeIndex === 2 ? 'show' : ''}>Sí, puedes cancelar tu suscripción en cualquier momento sin penalizaciones.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(3)}>¿Cuánto tiempo tarda en llegar mi pedido?</h3>
          <p className={activeIndex === 3 ? 'show' : ''}>El tiempo de entrega depende de tu ubicación, generalmente tarda entre 3 y 7 días hábiles.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(4)}>¿Tienen opciones de envío internacional?</h3>
          <p className={activeIndex === 4 ? 'show' : ''}>Sí, realizamos envíos internacionales a la mayoría de los países.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(5)}>¿Cómo puedo realizar un cambio o devolución?</h3>
          <p className={activeIndex === 5 ? 'show' : ''}>Puedes contactarnos por correo electrónico o teléfono para iniciar el proceso de cambio o devolución.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(6)}>¿Ofrecen descuentos para clientes frecuentes?</h3>
          <p className={activeIndex === 6 ? 'show' : ''}>Sí, ofrecemos descuentos especiales para clientes frecuentes. ¡No dudes en preguntarnos!</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(7)}>¿Puedo realizar un seguimiento de mi pedido?</h3>
          <p className={activeIndex === 7 ? 'show' : ''}>Sí, te proporcionaremos un número de seguimiento una vez que tu pedido haya sido enviado.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(8)}>¿Cuál es su política de privacidad?</h3>
          <p className={activeIndex === 8 ? 'show' : ''}>Respetamos tu privacidad y protegemos tus datos personales. Puedes consultar nuestra política de privacidad en nuestro sitio web.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(9)}>¿Tienen un programa de afiliados?</h3>
          <p className={activeIndex === 9 ? 'show' : ''}>Sí, contamos con un programa de afiliados. Puedes obtener más información en nuestra página de afiliados.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(10)}>¿Puedo hacer cambios en mi pedido después de realizarlo?</h3>
          <p className={activeIndex === 10 ? 'show' : ''}>Intentaremos ayudarte en la medida de lo posible, pero los cambios en un pedido ya realizado pueden estar sujetos a restricciones.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(11)}>¿Ofrecen garantía en sus productos?</h3>
          <p className={activeIndex === 11 ? 'show' : ''}>Sí, ofrecemos garantía en todos nuestros productos. Consulta los términos y condiciones de garantía en nuestro sitio web.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(12)}>¿Tienen servicio al cliente los fines de semana?</h3>
          <p className={activeIndex === 12 ? 'show' : ''}>Sí, nuestro equipo de servicio al cliente está disponible los fines de semana para ayudarte con cualquier consulta.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(13)}>¿Puedo obtener un reembolso si no estoy satisfecho con mi compra?</h3>
          <p className={activeIndex === 13 ? 'show' : ''}>Sí, ofrecemos reembolsos si no estás satisfecho con tu compra. Consulta nuestra política de reembolso para más detalles.</p>
        </li>
        <li>
          <h3 onClick={() => toggleAnswer(14)}>¿Puedo contactarlos por chat en vivo?</h3>
          <p className={activeIndex === 14 ? 'show' : ''}>Sí, contamos con un chat en vivo en nuestro sitio web donde puedes contactarnos en tiempo real.</p>
        </li>
      </ol>
    </div>
  );
}

export default Faq;
