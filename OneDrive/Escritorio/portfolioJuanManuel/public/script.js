$(document).ready(function(){
    $(window).scroll(function(){
      
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
  
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
     
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
   
        $('html').css("scrollBehavior", "smooth");
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    var typed = new Typed(".typing", {
        strings: ["Autodidacta","Coder", "Developer"],
        typeSpeed: 130,
        backSpeed: 20,
        loop: true
    });

   
   
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


  function getRandomSkillIndex() {
    const skills = document.querySelectorAll('.lenguajesSkills__box__item');
    return Math.floor(Math.random() * skills.length);
  }

  function toggleRandomActiveSkill() {
    const skills = document.querySelectorAll('.lenguajesSkills__box__item');
    skills.forEach(skill => skill.classList.remove('is-active'));

    const randomIndex = getRandomSkillIndex();
    skills[randomIndex].classList.add('is-active');
  }

 
  setInterval(toggleRandomActiveSkill, 2300);

    // Función para validar si un valor contiene solo letras
  function isValidName(value) {
    const regex = /^[A-Za-z]+$/;
    return regex.test(value);
  }

  // Función para validar si un valor es un número
  function isValidNumber(value) {
    const regex = /^[0-9]+$/;
    return regex.test(value);
  }

  // Función para validar el formato de correo electrónico
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Función para validar el formulario
  function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validación del campo Nombre (requerido y solo letras)
    if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
    } else if (!isValidName(nombre)) {
      alert("El nombre debe contener solo letras.");
      return false;
    }

    // Validación del campo Email (requerido y formato de correo electrónico)
    if (email === "") {
      alert("Por favor, ingresa tu dirección de correo electrónico.");
      return false;
    } else if (!isValidEmail(email)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      return false;
    }

    // Validación del campo Teléfono (requerido y solo números)
    if (telefono === "") {
      alert("Por favor, ingresa tu número de teléfono.");
      return false;
    } else if (!isValidNumber(telefono)) {
      alert("El teléfono debe contener solo números.");
      return false;
    }

    // Validación del campo Mensaje (requerido y mínimo 20 caracteres)
    if (mensaje === "") {
      alert("Por favor, ingresa tu mensaje.");
      return false;
    } else if (mensaje.length < 20) {
      alert("El mensaje debe contener al menos 20 caracteres.");
      return false;
    }

    return true; // El formulario es válido
  }

