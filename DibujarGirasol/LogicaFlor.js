const botonRegresar = document.getElementById('btn-regresar')

setTimeout(crearGirasol, 2000);

function crearGirasol() {
    const centroMagico = document.getElementById('centro-magico');
    const totalPetalosCapa1 = 26; 
    const totalPetalosCapa2 = 20; 
    const radioCentro = 100; 

    let contadorRetraso = 0;

    function dibujarAnillo(totalPetalos, radio, escala, offsetRotacion) {
        
        for (let i = 0; i < totalPetalos; i++) {
            setTimeout(() => {
                const petalo = document.createElement('div');
                petalo.classList.add('petalo-girasol');

                const angulo = (360 / totalPetalos) * i + offsetRotacion;
                
                petalo.style.setProperty('--rotacion', `${angulo}deg`);
                petalo.style.setProperty('--radio', `-${radio}px`);
                petalo.style.setProperty('--escala', escala);

                centroMagico.appendChild(petalo);
                
            }, contadorRetraso * 100);
            
            contadorRetraso++;
        }
    }

    dibujarAnillo(totalPetalosCapa1, radioCentro, 1, 0);
    dibujarAnillo(totalPetalosCapa2, radioCentro - 10, 0.85, 10);
}


function RegresarPagina(){
    localStorage.setItem('volverElegir', "true");
    window.location.href='../index.html'
}



botonRegresar.addEventListener('click', RegresarPagina);