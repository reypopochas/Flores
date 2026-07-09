const textoDiv = document.getElementById('texto-margarita');
const mensajeMargarita = "La belleza está en los detalles más sencillos \nY eso a ti te queda de sobra";
const botonRegresar = document.getElementById('btn-regresar')

let indice = 0;

setTimeout(() => {
    
    function escribirLetras() {
        if (indice < mensajeMargarita.length) {
            textoDiv.textContent += mensajeMargarita[indice];
            indice++;
            setTimeout(escribirLetras, 100);
        }
    }
    
    escribirLetras();

}, 1500);



function RegresarPagina(){
    localStorage.setItem('volverElegir', "true");
    window.location.href='../index.html'
}



botonRegresar.addEventListener('click', RegresarPagina);