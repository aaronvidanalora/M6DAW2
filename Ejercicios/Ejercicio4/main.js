const valorInicial = document.querySelector('#valorInicial');
const valorFinal = document.querySelector('#valorFinal');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');
let diezPalabras = document.querySelector('#diezPalabras')
diezPalabras.innerHTML = "";
boton.addEventListener('click', dosValores);

function dosValores() {
    const numeroInicial = parseInt(valorInicial.value);
    const numeroFinal = parseInt(valorFinal.value);

    const numeroAleatorio = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;

    resultado.innerHTML = `Número aleatorio entre ${numeroInicial} y ${numeroFinal}: ${numeroAleatorio}`;
}

const cambiarTexto = document.querySelector('#textoBuscar')
const minusculas = document.querySelector('#minusculas')
minusculas.addEventListener('click', minusculamos);

function minusculamos(){
    const inputTexto = document.querySelector('#texto')
    const texto = inputTexto.value
    const minusculas = texto.toLowerCase();
    inputTexto.value = minusculas
    cambiarTexto.innerHTML = minusculas
    
}

const mayusculas = document.querySelector('#mayusculas')
mayusculas.addEventListener('click', mayusculamos, contarPalabras);

function mayusculamos(){
    const inputTexto = document.querySelector('#texto')
    const texto = inputTexto.value
    const mayusculas = texto.toUpperCase();
    inputTexto.value = mayusculas
    resumir = mayusculas.split(" ")
    console.log(resumir)
    for( i = 0 ; i < 10 ; i++){
        diezPalabras.innerHTML += (resumir[i] + " ")
        console.log(resumir[i])
    }
    diezPalabras.innerHTML += " ..."
    
}

const contador = document.querySelector('#contador');
const contarBoton = document.querySelector('#contarBoton');
texto.addEventListener('input', contarPalabras);


function contarPalabras() {
    const inputTexto = document.querySelector('#texto');
    const texto = inputTexto.value;
    const palabras = texto.split(" "); 
    const cantidadPalabras = palabras.length;

    const contar = `El texto contiene <strong>${cantidadPalabras}</strong> palabras`;
    contador.innerHTML = contar;
    
    
}

const buscar = document.querySelector('#buscar')
buscar.addEventListener('click', buscando)

function buscando() {
        const palabraBuscada = document.querySelector('#buscador').value;
        const textoOriginal = document.querySelector('#texto').value;
        const textoMarcado = textoOriginal.replaceAll(palabraBuscada, `<span class="bg-primary text-light">${palabraBuscada}</span>`);
        document.querySelector('#textoBuscar').innerHTML = textoMarcado;
    }



const botonNombre = document.querySelector('#botonNombre')
const botonFecha = document.querySelector('#botonFecha')
botonNombre.addEventListener('click',cambiarNombre)
botonFecha.addEventListener('click',cambiarFecha)

function cambiarNombre(){
    const nombre = document.querySelector('#nombre').value
    console.log(nombre)
    const nombreCambiado = document.querySelector('#nombreCambiado')
    nombreCambiado.innerHTML = nombre.replaceAll(" ","-")
}

function cambiarFecha(){
    const fecha = document.querySelector('#fecha').value
    const fechaCambiada = document.querySelector('#fechaCambiada')
    fechaCambiada.innerHTML = fecha.replaceAll("/","-")
}


const generar = document.querySelector('#generar');
const pass = document.querySelector('#pass');
generar.addEventListener('click',generarContraseña);

function generarContraseña() {
            const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let contraseña = '';
            for (let i = 0; i < 10; i++) {
                const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
                contraseña += caracteres[indiceAleatorio];
                
                
            }
            console.log(contraseña)
            pass.value = contraseña;
  }

  const botonEmoticono = document.querySelector('#botonEmoticono')
  botonEmoticono.addEventListener('click',generarEmoticonos)
  const emoticono = document.querySelector('#emoticono')
  
  function generarEmoticonos() {
    const emoticonos = ['😀','😎','🤩','😍','🤯','👍','👌','👏','💪','💖','🎉','🌟','✌️'];
    let genera = '';
    const indiceAleatorio = Math.floor(Math.random() * emoticonos.length);
    genera += emoticonos[indiceAleatorio];
    console.log(genera);
    emoticono.innerHTML = genera;
}


    








    
    



