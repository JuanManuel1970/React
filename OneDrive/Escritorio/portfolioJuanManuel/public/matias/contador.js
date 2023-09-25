// Recuperar el contador de visitas almacenado en localStorage
let contadorVisitas = localStorage.getItem('contadorVisitas');

// Verificar si es la primera visita o no
if (contadorVisitas === null) {
    contadorVisitas = 1; // Si es la primera visita, establecer el contador en 1
} else {
    contadorVisitas = parseInt(contadorVisitas) + 1; // Si no es la primera visita, incrementar el contador en 1
}

// Mostrar el contador en la página
document.getElementById('contador').textContent = contadorVisitas;

// Almacenar el contador de visitas actualizado en localStorage
localStorage.setItem('contadorVisitas', contadorVisitas);
