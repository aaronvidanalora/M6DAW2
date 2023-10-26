const btnIntroPalabra = document.querySelector('#btnIntroPalabra');
btnIntroPalabra.addEventListener('click', mostramos);
//variables globales para las funciones
let palabra;
let casilla;
let fallos = 0;
let letrasAdivinadas = 0;
let juegoActivo = false; //variable para saber si se esta jugando

function mostramos() {
        const inputPalabra = document.querySelector('#inputPalabra').value; //saber la palabra
        document.querySelector('#juego').classList.remove("d-none"); //mostrar el div quitando el display none
        document.querySelector('#ventanaIntroPalabra').classList.add("d-none");// añado display none para ocultar el div
        palabra = inputPalabra.toUpperCase().trim(); //pongo mayusculas y espacios
        casilla = palabra.length;
        let meter = '';

        for (let i = 0; i < casilla; i++) {
            meter += `<span id="casilla${[i]}" class="casilla">_</span>`; //pintar tantas casillas como letras tenga la palabra
        }

        document.querySelector('#casillas').innerHTML = meter; 

        const introLetra = document.querySelector('#introLetra');
        introLetra.addEventListener('click', comparar);
        juegoActivo = true;  //se esta jugando
    }


function comparar() {
        const letra = document.querySelector('#letra').value;
        letraBien = letra.toUpperCase();
        const fallar = document.querySelector('#ahorcado');
        let acierto = 0;

        for (let i = 0; i < casilla; i++) {
            if (letraBien === palabra[i]) {
                let casillero = document.querySelector(`#casilla${i}`); //selecciono la casilla
                let casillaHTML = casillero.innerHTML;
                let casillaModificada = casillaHTML.replaceAll("_", letraBien); //reemplazo las _ por la letra adivinada
                casillero.innerHTML = casillaModificada;
                acierto = 1; //si se adivina acierto=1 para que no cuente como fallo
            }
        }

        if (acierto === 0) {
            fallos++;  //si falla se suma 1 al contador de fallos

            if (fallos <= 6) {
                const divImagen = document.querySelector(`#div${fallos}`); //muestro el div con la imagen segun el fallo que sea
                divImagen.classList.remove("d-none");
            }

            if (fallos === 6) {
                setTimeout(function () {
                    alert('Has perdido');
                }, 500);   //SetTimeOut hace que salga el alert 500 milisegundos mas tarde

                const ventanaPregunta = document.querySelector('#ventanaPregunta');
                ventanaPregunta.classList.remove("d-none");
                juegoActivo = false;
            }
        }

        letrasAdivinadas = 0;  //reestablezco letras adivinadas
        for (let i = 0; i < casilla; i++) {
            if (document.querySelector(`#casilla${i}`).innerHTML == palabra[i]) {
                letrasAdivinadas++;   //Cuento las letras adivinadas comparando
            }
        }

        if (letrasAdivinadas === casilla) {
            setTimeout(function () {
                alert('Has ganado');    //si se adivinan todas
            }, 500);

            const ventanaPregunta = document.querySelector('#ventanaPregunta');
            ventanaPregunta.classList.remove("d-none"); // sale el div de si quieres jugar otra vez
            juegoActivo = false;
        }
    }


const btnJugar = document.querySelector('#btnJugar');
btnJugar.addEventListener('click', jugarDeNuevo);

function jugarDeNuevo() {
    //reestablezco las variables
    fallos = 0;
    letrasAdivinadas = 0;
    juegoActivo = false;

    //ocultar el juego para que solo se vea el inicio

    document.querySelector('#juego').classList.add('d-none');
    document.querySelector('#ventanaIntroPalabra').classList.remove('d-none');
    ventanaPregunta.classList.add("d-none");

    let meter = '';
    for (let i = 0; i < casilla; i++) {
        meter += `<span id="casilla${[i]}" class="casilla">_</span>`; //vuelvo a hacer el for para pintar las casillas con las _
    } 
    document.querySelector('#casillas').innerHTML = meter;

    document.querySelector('#letra').value = '';

    //ocultar los div del ahorcado
    for (let i = 1; i <= 6; i++) {
        const divImagen = document.querySelector(`#div${i}`);
        divImagen.classList.add("d-none");
    }
}
