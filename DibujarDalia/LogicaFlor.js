function crearPolen() {
    const contenedor = document.getElementById('contenedor-polen');
    const cantidadPolen = 35;
    
    const colores = [
        'rgba(255, 193, 7, 0.8)',   // Dorado
        'rgba(255, 152, 0, 0.7)',   // Naranja/Ámbar
        'rgba(233, 30, 99, 0.6)'    // Rosa tenue
    ];

    for (let i = 0; i < cantidadPolen; i++) {
        let polen = document.createElement('div');
        polen.classList.add('particula-polen');

        let size = Math.random() * 3 + 2; 
        polen.style.width = `${size}px`;
        polen.style.height = `${size}px`;

        polen.style.left = `${Math.random() * 100}%`;
        polen.style.top = `${Math.random() * 100}%`;

        let colorElegido = colores[Math.floor(Math.random() * colores.length)];
        polen.style.backgroundColor = colorElegido;
        polen.style.boxShadow = `0 0 8px 2px ${colorElegido}`;

        polen.style.animationDuration = `${Math.random() * 7 + 7}s`;
        
        polen.style.animationDelay = `${Math.random() * 10}s`;

        contenedor.appendChild(polen);
    }
}

crearPolen();


const textoDiv = document.getElementById('texto-dalia');
const mensajeDalia = "Dicen que la complejidad de esta flor es inigualable...\nClaramente no te han mirado a los ojos";
const botonRegresar = document.getElementById('btn-regresar')
let indice = 0;

setTimeout(() => {
    
    function escribirLetras() {
        if (indice < mensajeDalia.length) {
            textoDiv.textContent += mensajeDalia[indice];
            indice++;
            setTimeout(escribirLetras, 90); 
        }
    }
    
    escribirLetras();

}, 2000);


function RegresarPagina(){
    localStorage.setItem('volverElegir', "true");
    window.location.href='../index.html'
}



botonRegresar.addEventListener('click', RegresarPagina);