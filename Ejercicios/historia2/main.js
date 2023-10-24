
const botonNick = document.querySelector("#botonNick");
botonNick.addEventListener("click", modificaNick);

function modificaNick() {
    const inputNick = document.querySelector("#inputNick");
    const resultNick = document.querySelector("#resultNick");
  
    //trim elimina espacios en blanco
    const nick = inputNick.value.trim();

  
    // Si esta vacio sale el mensaje
    if (!nick) {
        alert('El nick no puede estar en blanco');
        resultNick.innerHTML = "";
    } else {
        // Reemplaza espacios en blanco por _ y convierte a mayúsculas
        const modificadoNick = nick.replace(/\s+/g, '_').toUpperCase();
        resultNick.innerHTML = modificadoNick;
    }
  }


const botonFecha = document.querySelector('#botonFecha')
botonFecha.addEventListener('click',modificaData)


function modificaData() {
    const inputFecha = document.querySelector("#inputFecha").value;
    
    // dos primeros numeros que son el año
    const anyo = inputFecha[0] + inputFecha[1];
    // dos siguientes numeros que son el mes
    const numeroMes = inputFecha[3] + inputFecha[4];
    //Array nombre meses
    const meses = [
        'enero', 'febrero', 'marzo', 'abril',
        'mayo', 'junio', 'julio', 'agosto',
        'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    //obtengo nombre que corresponde al numero del mes
    const mesFinal = meses[parseInt(numeroMes, 10) - 1];
    //Dia mes
    const dia = inputFecha[6] + inputFecha[7];
    //hora minutos segundos
    const hora = inputFecha[9] + inputFecha[10] + inputFecha[11] + inputFecha[12] + inputFecha[13] + inputFecha[14] + inputFecha[15] + inputFecha[16];
    //hago el formato que pide dia nombre mes año y hora
    const fechaFinal = `${dia} ${mesFinal} 20${anyo} - ${hora}`;

    //mostrar
    document.querySelector("#resultFecha").innerHTML = fechaFinal;
}



const botonFecha2 = document.querySelector('#botonFecha2');
botonFecha2.addEventListener('click', modificarFecha2);

function modificarFecha2() {
    const inputFecha2 = document.querySelector("#inputFecha2").value;

    // objeto date
    const fecha = new Date(inputFecha2);

    
    const anyo = fecha.getFullYear() % 100; // con el % 100 obtenemos los dos ultimos numeros del año
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 al mes ya que enero es 0
    const dia = fecha.getDate().toString().padStart(2, '0');
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    // Formatear la fecha en el formato deseado
    const fechaFinal = `${anyo}/${mes}/${dia}T${hora}:${minutos}:${segundos}`;

    // Mostrar el resultado en el elemento con ID "resultFecha2"
    document.querySelector("#resultFecha2").innerHTML = fechaFinal;
}

// 22/11/17T14:30:45
// 2023-10-17T03:24:00

const botonFechaDias = document.querySelector('#botonFechaDias');
botonFechaDias.addEventListener('click', diasRestantes);


function diasRestantes() {
    const inputFechaDias = document.querySelector('#inputFechaDias').value;
    //crear objeto date
    const inputDate = new Date(inputFechaDias);
  
    if (isNaN(inputDate)) {
        //mensaje si el formato no es bueno
      alert('El formato no es correcto');
    } else {
        //fecha actual
      const fechaActual = new Date();
      //restar tiempo en milisegundos
      const restaFecha = fechaActual - inputDate;
      //calcular redondeado hacia abajo
      const diasDiferencia = Math.floor(restaFecha / (1000 * 60 * 60 * 24));
      document.querySelector("#resultFechaDias").innerHTML = `Han pasado ${diasDiferencia} días.`;
    }
  }
  
  
//local storage

  const ls = {
    setDades: function (dades) {
      const dadesString = JSON.stringify(dades);
      localStorage.setItem('tetris_dades', dadesString);
      return true;
    },
    getDades: function () {
      const dadesString = localStorage.getItem('tetris_dades');
      if (dadesString) {
        return JSON.parse(dadesString);
      } else {
        return {};
      }
    }
  };
  
  // Ejemplo de datos
  const ejemploDades = {
    partidas: [
      {
        avatar: 'imagen1.png',
        nick: 'MANOLO',
        puntuacion: 124561,
        fecha: '23/12/05T12:12:00'
      },
      {
        avatar: 'imagen2.png',
        nick: 'PEDRA',
        puntuacion: 1561,
        fecha: '23/09/05T13:12:00'
      }
    ],
    ranking: [
      {
        avatar: 'imagen1.png',
        nick: 'MANOLO',
        puntuacion: 124561
      },
      {
        avatar: 'imagen2.png',
        nick: 'PEDRA',
        puntuacion: 1561
      }
    ]
  };
  
  // guardar en local storage
  ls.setDades(ejemploDades);
  
  // cojer los datos y sacar por consola
  const datosGuardados = ls.getDades();
  console.log(datosGuardados);
  

//ejercicio 5

function registraPartida(partida) {
    // Obtener las datos del localstorage
    const datos = ls.getDades();
  
    // Agregar la partida al array "partidas"
    datos.partidas.push(partida);
  
    // Guardar los datos actualizados en el localstorage
    ls.setDades(datos);
  }
  
  // Ejemplo de una partida
  const nuevaPartida = {
    avatar: 'imagen2.png',
    nick: 'EJERCICIO 5',
    puntuacion: 1561,
    fecha: '23/09/05T13:12:00'
  };
  
  // Llamar a la función para registrar la partida
  registraPartida(nuevaPartida);
  
  // Comprobar que el localstorage se ha actualizado correctamente
  console.log(ls.getDades());
  

  

