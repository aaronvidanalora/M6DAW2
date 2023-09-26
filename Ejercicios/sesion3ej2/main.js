// console.log('Hola desde main.js')

//capturar el boton
const botonCrear = document.querySelector('#botonCrear')

//capturar evento click del botón y llamar a la función
botonCrear.addEventListener('click', crear)

//funcion crear
function crear(event){
    event.preventDefault()
    
    //capturo input1:nombre
    const nombre = document.querySelector('#nombre')
    //capturar valor
    const valorNombre = nombre.value
    console.log(valorNombre)

    //hago lo mismo con el resto de inputs
    //apellido1
    const ap1 = document.querySelector('#ap1')
    //capturar valor
    const valorAp1 = ap1.value
    console.log(valorAp1)

    //apellido2
    const ap2 = document.querySelector('#ap2')
    //capturar valor
    const valorAp2 = ap2.value
    console.log(valorAp2)

    //dni
    const dni = document.querySelector('#dni')
    //capturar valor
    const valorDni = dni.value
    console.log(valorDni)

    //url
    const url = document.querySelector('#url')
    //capturar valor
    const valorUrl = url.value
    console.log(valorUrl)

    
    // Poner en el span el nombre completo
    const nombreCompleto = document.querySelector('#nombreCompleto')
    nombreCompleto.innerHTML=`<span>${valorNombre} ${valorAp1} ${valorAp2}</span>`
    
    // Poner en el span el dni
    const dniCompleto = document.querySelector('#dniCompleto')
    dniCompleto.innerHTML=`<span>${valorDni}</span>`

    // Poner en el span la imagen
    
     const imagen = document.querySelector('#divImg')
     imagen.innerHTML = `<img src="${valorUrl}" alt=cara>`
     



    //   `${valorNombre} ${valorAp1} ${valorAp1}`

}