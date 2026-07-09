// 1. Seleccionamos los elementos correctos
const divNubes = document.getElementById('ContenedorNubes');
const divTitulo1 = document.getElementById('ContenedorTitulo1');
const nube1 = document.getElementById('nube1');
const nube2 = document.getElementById('nube2');
const contenedorTipoFlor = document.getElementById('ContenedorTipoFlor'); // <--- NUEVO
const tipoFlorTexto = document.getElementById('TipoFLorTexto'); // <--- NUEVO
let parte1Terminada = false;


const opcionesFlores = document.getElementById('OpcionesFlores');
const btnConfirmar = document.getElementById('BtnConfirmar');
const tarjetas = document.querySelectorAll('.TarjetaFlor');
let florSeleccionada = "";


const volverElegir = localStorage.getItem('volverElegir')
if (volverElegir === 'true') {
    localStorage.removeItem('volverElegir');
    saltarAParte2();
}

function saltarAParte2() {
    divNubes.style.pointerEvents = 'none';
    divNubes.style.cursor = 'default';
    divNubes.style.width = '100vh';

    nube1.style.transition = 'none';
    nube1.style.bottom = '95%';       
    nube1.style.width = '60%';      
    nube1.style.left = '0';
    nube1.style.right = '0';
    nube1.style.margin = 'auto';    
    nube1.style.transform = 'translateX(0)';
    nube1.style.opacity = '1';
    nube1.style.animation = 'flotar 3s ease-in-out infinite';

    nube2.style.transition = 'none';
    nube2.style.top = '95%'; 
    nube2.style.width = '60%';
    nube2.style.left = '0';
    nube2.style.right = '0';
    nube2.style.margin = 'auto';
    nube2.style.transform = 'translateX(0) rotate(180deg)'; 
    nube2.style.opacity = '1';
    nube2.style.animation = 'flotar-invertido 3.5s ease-in-out infinite 0.5s';

    divTitulo1.style.opacity = '0';
    divTitulo1.style.pointerEvents = 'none';

    contenedorTipoFlor.style.opacity = '1';
    contenedorTipoFlor.style.pointerEvents = 'auto';
    
    iniciarSegundoMensaje();
}

function iniciarAnimacion() {
    divNubes.style.pointerEvents = 'none';
    divNubes.style.cursor = 'default';

    nube1.style.animation = 'none';
    nube2.style.animation = 'none';

    nube1.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s';
    nube2.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s';

    setTimeout(() => {
        nube1.style.transform = 'translateX(150vw)';
        nube1.style.opacity = '0';
        
        nube2.style.transform = 'translateX(-150vw)';
        nube2.style.opacity = '0';
    }, 50);

    const TextoTitulo1 = "Un pequeño detalle para la mujer que no sale de mi mente";

    setTimeout(() => {
        nube1.style.transition = 'none';
        nube2.style.transition = 'none';

        nube1.style.bottom = '95%';       
        nube1.style.width = '60%';      
        nube1.style.left = '0';
        nube1.style.right = '0';
        nube1.style.margin = 'auto';    
        nube1.style.transform = 'translateX(150vw)';

        nube2.style.top = '95%'; 
        nube2.style.width = '60%';
        nube2.style.left = '0';
        nube2.style.right = '0';
        nube2.style.margin = 'auto';
        nube2.style.transform = 'translateX(-150vw) rotate(180deg)';

        setTimeout(() => {
            divNubes.style.width = '100vh';
            nube1.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s';
            nube2.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s';
            
            nube1.style.transform = 'translateX(0)';
            nube1.style.opacity = '1';
            
            nube2.style.transform = 'translateX(0) rotate(180deg)'; 
            nube2.style.opacity = '1';
        }, 50);

    }, 1000); 

    setTimeout(() => {
        nube1.style.transition = 'none'; 
        nube2.style.transition = 'none';
        
        nube1.style.animation = 'flotar 3s ease-in-out infinite';
        nube2.style.animation = 'flotar-invertido 3.5s ease-in-out infinite 0.5s';

        divTitulo1.textContent = ""; 
        let indice = 0;
        
        function escribirLetraPorLetra() {
            if (indice < TextoTitulo1.length) {
                divTitulo1.textContent += TextoTitulo1[indice];
                indice++;
                setTimeout(escribirLetraPorLetra, 100); 
                
            } else {
                parte1Terminada = true;
                divTitulo1.style.cursor = 'pointer'; 
            }
        }
        escribirLetraPorLetra();
        
    }, 3200); 
}


function siguienteParte() {
    if (parte1Terminada) {
        divTitulo1.style.pointerEvents = 'none';
        divTitulo1.style.opacity = '0';
        
        contenedorTipoFlor.style.opacity = '1';
        contenedorTipoFlor.style.pointerEvents = 'auto'; 
        setTimeout(iniciarSegundoMensaje, 1000);
    }
}

function iniciarSegundoMensaje() {
    const TextoTitulo2 = "¿Qué tipo de flor te gustaría ver?";
    let indice2 = 0;
    
    tipoFlorTexto.textContent = ""; 
    
    function escribirLetraPorLetra2() {
        if (indice2 < TextoTitulo2.length) {
            tipoFlorTexto.textContent += TextoTitulo2[indice2];
            indice2++;
            setTimeout(escribirLetraPorLetra2, 50); 
        } else {
            opcionesFlores.style.opacity = '1';
            opcionesFlores.style.pointerEvents = 'auto';
            
            btnConfirmar.style.opacity = '1';
            btnConfirmar.style.pointerEvents = 'auto';
        }
    }
    
    escribirLetraPorLetra2();
}

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        tarjetas.forEach(t => t.classList.remove('seleccionada'));
        
        tarjeta.classList.add('seleccionada');
        florSeleccionada = tarjeta.getAttribute('data-flor');
    });
});

btnConfirmar.addEventListener('click', () => {
    if (florSeleccionada === "camelia") {
        window.location.href = './DibujarCamelia/lienzo.html';
    } 
    else if(florSeleccionada === "girasol") {
        window.location.href = './DibujarGirasol/lienzo.html';
    }
    else if(florSeleccionada === "margarita") {
        window.location.href = './DibujarMargarita/lienzo.html';
    }
    else if(florSeleccionada === "orquidea") {
        window.location.href = './DibujarOrquidea/lienzo.html';
    }
    else if(florSeleccionada === "dalia") {
        window.location.href = './DibujarDalia/lienzo.html';
    }
    else if(florSeleccionada === "tulipan") {
        window.location.href = './DibujarTulipan/lienzo.html';
    }
    else {
        alert("Debes elegir una flor, preciosa");
    }
});


divNubes.addEventListener('click', iniciarAnimacion);
divTitulo1.addEventListener('click', siguienteParte);

