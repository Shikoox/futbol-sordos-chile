// Tamaño de texto base
let textSize = 16;

// Mostrar/ocultar intérprete
function toggleInterpreter() {
    const interpreter = document.getElementById('signLanguageInterpreter');
    const interpreterVideo = document.getElementById('interpreterVideo');
    
    if (interpreter.style.display === 'none' || !interpreter.style.display) {
        interpreter.style.display = 'block';
        interpreterVideo.play();
    } else {
        interpreter.style.display = 'none';
        interpreterVideo.pause();
    }
}

// Ajustar tamaño del texto
function adjustTextSize(change) {
    textSize += change;
    document.body.style.fontSize = textSize + 'px';
}

// Alternar modo alto contraste
function toggleContrast() {
    document.body.classList.toggle('alto-contraste');
}

// Simulación de subtítulos en vivo
const subtitulosChilenos = [
    "[Silbato] El árbitro da inicio al clásico chileno",
    "La U presiona alto, buscando el gol tempranero",
    "[Griterío] La barra canta 'Y va a caer, y va a caer...'",
    "¡Tiro libre! Pelota detenida a 25 metros del arco",
    "¡Gooool de Colo-Colo! Remate cruzado al ángulo",
    "El entrenador pide cambio, se prepara el jugador suplente",
    "Tarjeta amarilla para el jugador de la U por entrada dura",
    "Pitazo final! El partido termina 1-1 en el Nacional"
];

let indiceSubtitulo = 0;
setInterval(() => {
    document.getElementById('subtitleText').textContent = subtitulosChilenos[indiceSubtitulo];
    indiceSubtitulo = (indiceSubtitulo + 1) % subtitulosChilenos.length;
}, 10000);

// Evento de gol (simulado)
setTimeout(() => {
    const eventoGol = document.createElement('div');
    eventoGol.innerHTML = `
        <div class="evento-gol" style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #D52B1E;
            color: white;
            padding: 15px;
            border-radius: 8px;
            z-index: 1000;
            animation: fadeInOut 3s;
        ">
            ⚽ ¡GOOOL! U. de Chile 1 - Colo-Colo 0 (35')
        </div>
    `;
    document.body.appendChild(eventoGol);
    setTimeout(() => eventoGol.remove(), 3000);
}, 15000);