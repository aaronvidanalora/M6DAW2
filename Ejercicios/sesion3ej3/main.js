// console.log('Hola desde main.js')

//capturar el boton
const botonCrear = document.querySelector('#botonCrear')

//capturar evento click del botón y llamar a la función
botonCrear.addEventListener('click', crear)
const bd = [];
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
    nombreCompleto.innerHTML=`<span>${valorNombre} </span>`

    const apellidoCompleto = document.querySelector('#apellidoCompleto')
    apellidoCompleto.innerHTML=`<span> ${valorAp1} ${valorAp2}</span>`
    
    // Poner en el span el dni
    const dniCompleto = document.querySelector('#dniCompleto')
    dniCompleto.innerHTML=`<span>${valorDni}</span>`

    // Poner en el span la imagen
    
     const imagen = document.querySelector('#urlCompleto')
     imagen.setAttribute("src",valorUrl)

     //objeto y meto los value
     const jsonUsuario = {
      valorNombre,
      valorAp1,
      valorAp2,
      valorDni,
      valorUrl,
      
    }

    
//utilizo el push para meter el json en el array

    bd.push(jsonUsuario);
// hago el bucle metiendo los td
    let meterTabla = ``;
    bd.forEach((element, index) => {
      meterTabla += `<tr>
        <td>${index + 1}</td>
        <td><img width="30" src="${element.valorUrl}"></td>
        <td>${element.valorNombre}</td>
        <td>${element.valorAp1} ${element.valorAp2}</td>
        <td>${element.valorDni}</td>
      </tr>`;
    });
    //inserto el html en la tabla 
    document.querySelector('#meterFicha').innerHTML = meterTabla;
    

}