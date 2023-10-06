// selecciono los botones
 const botonJugador1 = document.querySelector('#boton1');
 const botonJugador2 = document.querySelector('#boton2');
 const boton1Texto = document.querySelector('#boton1Texto');
 const boton2Texto = document.querySelector('#boton2Texto');
//evento click al boton que haga la funcion
 botonJugador1.addEventListener('click', () => moverJugador("1"));
 botonJugador2.addEventListener('click', () => moverJugador("2"));
//cojo el div
 const ficha1 = `<div id="ficha1" class="ficha jugador1"></div>`;
 const ficha2 = `<div id="ficha2" class="ficha jugador2"></div>`;
//inicializo en la posicion 1 pa que empiecen desde el principio
 let posicionJugador1 = 1;
 let posicionJugador2 = 1;

 function moverJugador(jugador) {
     
    //numero aleatorio
    let n = Math.random();
     n = n * 6;
     n = Math.ceil(n);

     // Pongo el numero debajo del jugador
     if (jugador === "1") {
         boton1Texto.innerHTML = `Jugador 1: ${n}`;
         let posicionAnterior = posicionJugador1;
         posicionJugador1 = posicionJugador1 + n;


         if (posicionJugador1 > 20) {
             let res = posicionJugador1 - 20;
             posicionJugador1 = 20 - res;
         }
         // Borra la ficha del jugador 2 si coincide con el 1
         if (posicionJugador1 === posicionJugador2) {
            
            document.querySelector(`#casillas2 #c${posicionJugador2}`).innerHTML=` `;
            document.querySelector(`#casillas2 #c1`).innerHTML=ficha2;
            posicionJugador2=1;
            
         }
         
         
         
         document.querySelector(`#casillas1 #c${posicionAnterior}`).innerHTML = "";
         document.querySelector(`#casillas1 #c${posicionJugador1}`).innerHTML = ficha1;




         if (posicionJugador1 >= 20) {
             console.log("Jugador 1 ha ganado");
             if (confirm("GANADOR! QUIERES JUGAR OTRA VEZ?")) {
                 document.querySelector(`#casillas1 #c${posicionJugador1}`).innerHTML = "";
                 document.querySelector(`#casillas2 #c${posicionJugador2}`).innerHTML = "";
                 document.querySelector("#casillas1 #c1").innerHTML = ficha1;
                 document.querySelector("#casillas2 #c1").innerHTML = ficha2;
                 posicionJugador1=1;
                 posicionJugador2=1;
             }
         }
     } else {
        // Pongo el numero debajo del jugador 2
         boton2Texto.innerHTML = `Jugador 2: ${n}`;
         let posicionAnterior2 = posicionJugador2;
         posicionJugador2 = posicionJugador2 + n;
         if (posicionJugador2 > 20) {
             let res2 = posicionJugador2-20;
             posicionJugador2 = 20-res2;
         }
         // Borra la ficha del jugador 1 si coincide con el 2
         if (posicionJugador2 === posicionJugador1) {
            document.querySelector(`#casillas1 #c${posicionJugador1}`).innerHTML=` `;
            document.querySelector(`#casillas1 #c1`).innerHTML=ficha1;
            posicionJugador1=1;
             
             
         }
         document.querySelector(`#casillas2 #c${posicionAnterior2}`).innerHTML = "";
         document.querySelector(`#casillas2 #c${posicionJugador2}`).innerHTML = ficha2;

         if (posicionJugador2 >= 20) {
             console.log("Jugador 2 ha ganado");
             if (confirm("GANADOR! QUIERES JUGAR OTRA VEZ?")) {
                 document.querySelector(`#casillas1 #c${posicionJugador1}`).innerHTML= "";
                 document.querySelector(`#casillas2 #c${posicionJugador2}`).innerHTML= "";
                 document.querySelector("#casillas1 #c1").innerHTML=ficha1;
                 document.querySelector("#casillas2 #c1").innerHTML=ficha2;
                 posicionJugador1=1;
                 posicionJugador2=1;
             }
         }
     }
 }