const jardinTulipanes = document.getElementById('jardin-tulipanes');
const textoDiv = document.getElementById('texto-tulipanes');

const mensajeTulipanes = "Quiero que seas tú\n Y solo tú";
const botonRegresar = document.getElementById('btn-regresar')

const configuracionJardin = [
    { left: '-15%',  ancho: '90px', rotacion: '-4deg', capa: 2 },
    { left: '5%',  ancho: '90px', rotacion: '-8deg', capa: 2 },
    { left: '18%', ancho: '120px', rotacion: '-2deg', capa: 4 },
    { left: '28%', ancho: '80px', rotacion: '5deg', capa: 1 },
    { left: '40%', ancho: '130px', rotacion: '-5deg', capa: 5 },
    { left: '55%', ancho: '95px', rotacion: '8deg', capa: 3 },
    { left: '70%', ancho: '110px', rotacion: '3deg', capa: 4 },
    { left: '85%', ancho: '85px', rotacion: '10deg', capa: 1 }
];

setTimeout(() => {
    plantarJardin();
}, 500);

function plantarJardin() {
    configuracionJardin.forEach((config, index) => {
        const tulipan = document.createElement('img');
        tulipan.src = 'img/tulipan.png'; 
        tulipan.classList.add('tulipan');
        
        tulipan.style.setProperty('--posicion-x', config.left);
        tulipan.style.setProperty('--ancho', config.ancho);
        tulipan.style.setProperty('--rotacion', config.rotacion);
        tulipan.style.setProperty('--capa', config.capa);
        
        const retrasoSegundos = index * 0.3;
        tulipan.style.setProperty('--retraso', `${retrasoSegundos}s`);
        
        const tiempoBalanceo = Math.random() * 2 + 3;
        tulipan.style.setProperty('--tiempo-balanceo', `${tiempoBalanceo}s`);
        
        jardinTulipanes.appendChild(tulipan);
    });

    const tiempoTotalCrecimiento = (configuracionJardin.length * 300) + 1500 + 600;
    
    setTimeout(escribirTexto, tiempoTotalCrecimiento);
}

let indice = 0;
function escribirTexto() {
    if (indice < mensajeTulipanes.length) {
        textoDiv.textContent += mensajeTulipanes[indice];
        indice++;
        setTimeout(escribirTexto, 80);
    }
}



function RegresarPagina(){
    localStorage.setItem('volverElegir', "true");
    window.location.href='../index.html'
}



botonRegresar.addEventListener('click', RegresarPagina);