const botonRegresar = document.getElementById('btn-regresar')
const textoArribaDiv = document.getElementById('texto-arriba');
const mensajeTexto = "Cada pétalo de esta flor representa una de las infinitas razones por las cual me gustas";
let indiceTexto = 0;

function escribirTexto() {
    if (indiceTexto < mensajeTexto.length) {
        textoArribaDiv.textContent += mensajeTexto[indiceTexto];
        indiceTexto++;
        
        setTimeout(escribirTexto, 60); 
    }
}

setTimeout(escribirTexto, 3500);

setTimeout(() => {
    setInterval(crearPetalo, 1500); 
}, 2500);

function crearPetalo() {
    const contenedor = document.getElementById('contenedor-petalos');
    const petalo = document.createElement('img');
    petalo.src = 'img/petalo.png'; 
    petalo.classList.add('petalo-cayendo');

    const variacionHorizontal = Math.floor(Math.random() * 60) + 20; 
    petalo.style.left = `${variacionHorizontal}%`;
    
    petalo.style.top = '50%'; 

    const duracionCaida = Math.random() * 2 + 4; 
    petalo.style.animationDuration = `${duracionCaida}s`;

    const escala = Math.random() * 0.4 + 0.6; 
    petalo.style.transform = `scale(${escala})`;

    contenedor.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, duracionCaida * 1000);
}

function crearLuciernagas() {
    const contenedor = document.getElementById('luciernagas');
    const cantidad = 25; 

    for (let i = 0; i < cantidad; i++) {
        const luz = document.createElement('div');
        luz.classList.add('mota-luz');

        const tamaño = Math.random() * 4 + 2; 
        luz.style.width = `${tamaño}px`;
        luz.style.height = `${tamaño}px`;

        luz.style.left = `${Math.random() * 100}%`;

        const duracion = Math.random() * 10 + 10; 
        luz.style.animationDuration = `${duracion}s`;
        luz.style.animationDelay = `${Math.random() * 15}s`;

        contenedor.appendChild(luz);
    }
}

crearLuciernagas();


function RegresarPagina(){
    localStorage.setItem('volverElegir', "true");
    window.location.href='../index.html'
}



botonRegresar.addEventListener('click', RegresarPagina);