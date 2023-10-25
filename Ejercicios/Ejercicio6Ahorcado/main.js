const btnIntroPalabra = document.querySelector('#btnIntroPalabra');
btnIntroPalabra.addEventListener('click', mostramos);
let palabra;
let casilla;
let fallos = 0; // Inicializamos el contador de fallos en 0
let letrasAdivinadas = 0; // Inicializamos el contador de letras adivinadas en 0

function mostramos() {
    const inputPalabra = document.querySelector('#inputPalabra').value;
    document.querySelector('#juego').classList.remove("d-none");
    document.querySelector('#ventanaIntroPalabra').classList.add("d-none");
    palabra = inputPalabra.toUpperCase().trim(); // Usa la variable global en lugar de declarar una nueva
    casilla = palabra.length;
    let meter = '';

    for (let i = 0; i < casilla; i++) {
        meter += `<span id="casilla${[i]}" class="casilla">_</span>`;
    }

    document.querySelector('#casillas').innerHTML = meter;

    const introLetra = document.querySelector('#introLetra');
    introLetra.addEventListener('click', comparar);

    function comparar() {
        const letra = document.querySelector('#letra').value;
        letraBien = letra.toUpperCase();
        const fallar = document.querySelector('#ahorcado');
        let acierto = 0; // Inicializamos acierto a 0

        for (let i = 0; i < casilla; i++) {
            if (letraBien === palabra[i]) {
                let casillero = document.querySelector(`#casilla${i}`);
                let casillaHTML = casillero.innerHTML;
                let casillaModificada = casillaHTML.replaceAll("_", letraBien); //se reemplaza la _ por la letra adivinada
                casillero.innerHTML = casillaModificada;
                acierto = 1; // si acertamos acierto=1 sirve para no contar fallo cuando acertemos
                letrasAdivinadas++; // contador adivinadas
            }
        }

        if (acierto === 0) {
            fallos++; // si no hay acierto se suma un fallo al contador

            if (fallos <= 6) {
                const divImagen = document.querySelector(`#div${fallos}`); // he puesto como id de los div = div1,div2 y los cojo con la imagen dentro del html
                divImagen.classList.remove("d-none"); //quito el display none para mostrar la imagen
            }

            if (fallos === 6) {  // cuando llegamos a los 6 fallos se acaba el juego
                 setTimeout(function() { 
                    alert('Has perdido');
                }, 500);
                    // de internet sirve para que haga lo que tienes dentro del setTimeout en el tiempo que pone abajo este caso 500
            }
        }

        // Comprobamos si se han adivinado todas las letras
        if (letrasAdivinadas === casilla) {
            setTimeout(function() {
                alert('Has ganado!');
            }, 500);
         

        }
    }
}



