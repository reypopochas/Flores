const textoDiv = document.getElementById('texto-orquidea');
const mensajeOrquidea = "Dicen que las flores huelen bien\n Pero tu fragancia es la que me embriaga cada que nos vemos";
const botonRegresar = document.getElementById('btn-regresar')
let indice = 0;

setTimeout(() => {
    
    function escribirLetras() {
        if (indice < mensajeOrquidea.length) {
            textoDiv.textContent += mensajeOrquidea[indice];
            indice++;
            setTimeout(escribirLetras, 90); 
        }
    }
    
    escribirLetras();

}, 1500);
function crearBrillos() {
    const contenedor = document.getElementById('contenedor-brillos');
    const cantidadBrillos = 40; 

    for (let i = 0; i < cantidadBrillos; i++) {
        let brillo = document.createElement('div');
        brillo.classList.add('brillo');

        let size = Math.random() * 3 + 1; 
        brillo.style.width = `${size}px`;
        brillo.style.height = `${size}px`;

        brillo.style.left = `${Math.random() * 100}%`;
        brillo.style.animationDuration = `${Math.random() * 9 + 6}s`;
        brillo.style.animationDelay = `${Math.random() * 5}s`;

        contenedor.appendChild(brillo);
    }
}

crearBrillos();



function RegresarPagina(){
    localStorage.setItem('volverElegir', "true");
    window.location.href='../index.html'
}



botonRegresar.addEventListener('click', RegresarPagina);