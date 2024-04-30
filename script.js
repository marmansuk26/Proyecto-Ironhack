const imagen = document.getElementById('imagen');
const puntuacion = document.getElementById('puntuacion');
let puntos = 0;
let tiempoRestante = 25; // Segundos de cuenta atrás

function generarPosicionAleatoria() {
    const contenedor = document.getElementById('contenedor-juego');
    const anchoContenedor = contenedor.offsetWidth;
    const altoContenedor = contenedor.offsetHeight;
    const anchoImagen = imagen.offsetWidth;
    const altoImagen = imagen.offsetHeight;

    let x = Math.floor(Math.random() * (anchoContenedor - anchoImagen));
    let y = Math.floor(Math.random() * (altoContenedor - altoImagen));

    return { x, y };
}

function colocarImagen() {
    const posicion = generarPosicionAleatoria();
    imagen.src = "orb.png";
    imagen.style.top = `${posicion.y}px`;
    imagen.style.left = `${posicion.x}px`;
}

function iniciarCuentaAtras() {
    const countdownTimer = document.getElementById('countdown-timer'); // Obtener el elemento "countdown-timer"
  
    const intervalo = setInterval(() => {
      if (tiempoRestante >= 0) {
        countdownTimer.textContent = `TE QUEDAN ${tiempoRestante} SEGUNDOS`; // Actualizar el texto con el tiempo restante
        tiempoRestante--; // Decrementar el tiempo restante
      } else {
        clearInterval(intervalo); // Detener el intervalo cuando el tiempo llegue a 0
        mostrarFinDelJuego(); // Mostrar el mensaje de fin del juego
      }
    }, 1000); // Actualizar cada segundo (1000 milisegundos)
  }

  function mostrarFinDelJuego() {
    const imagen = document.getElementById('imagen');
    const puntuacion = document.getElementById('puntuacion');
    const countdownTimer = document.getElementById('countdown-timer');
  
    imagen.style.display = 'none';

  
    puntuacion.textContent = `¡FIN DEL JUEGO! TU PUNTUACIÓN FINAL: ${puntos}`;
  
  
  countdownTimer.style.display = 'none'; // Esconder el timer

  
  }

imagen.addEventListener('click', function() {
    puntos++;
    puntuacion.textContent = `PUNTUACIÓN: ${puntos}`;
    colocarImagen();
});

colocarImagen(); // Colocar la imagen inicial al cargar la página

iniciarCuentaAtras(); // Iniciar la cuenta atrás
