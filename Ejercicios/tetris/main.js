// console.log('hola');




const juegos = [
    {
        avatar: "img/account-avatar-profile-user-13-svgrepo-com.svg",
        nick: "Aaronvl31",
        puntos: "455",
        fecha:"31/12/2004",
    },

    {
        avatar: "img/account-avatar-profile-user-13-svgrepo-com.svg",
        nick: "OscarPajarraco",
        puntos: "2",
        fecha:"30/05/2004",
    },

    {
        avatar: "img/account-avatar-profile-user-13-svgrepo-com.svg",
        nick: "RaulicoBarcelona",
        puntos: "345",
        fecha:"04/12/2004",
    }

]

















function pintaRanking(){
    const ranking = document.querySelector('#ranking')
    ranking.innerHTML = `<h2 class="text-center text-light">Ranking</h2>
    <table class="table table-dark align-middle">
        <theader>
            <tr class="bg-dark">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </theader>
        <tbody>
            <tr>
                <td class="fs-2">1</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
            <tr>
                <td class="fs-2">2</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
            <tr>
                <td class="fs-2">3</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>`

    
    


}
function pintaTabla() {
    const partidas = document.querySelector('#partidas');
    let tablaHTML = `<h2 class="text-center text-light">Partidas</h2>
    <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            placeholder="Buscador"
            aria-label="Buscador"
            aria-describedby="button-addon2"
        />
        <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
        >
            <i class="bi bi-x-lg"></i>
        </button>
    </div>
    <table class="table table-dark">
        <thead>
            <tr>
                <th></th>
                <th>Nick <i class="bi bi-arrow-up-square"></i></th>
                <th>Puntuación <i class="bi bi-arrow-up-square"></i></th>
                <th>Fecha <i class="bi bi-arrow-up-square"></i></th>
            </tr>
        </thead>
        <tbody>`;

    juegos.forEach(element => {
        tablaHTML += `
            <tr>
                <td><img src="${element.avatar}" style= "width: 30px" alt=""></td>
                <td>${element.nick}</td>
                <td>${element.puntos}</td>
                <td>${element.fecha}</td>
            </tr>`;
    });

    
    tablaHTML += `
        </tbody>
        <tfoot></tfoot>
    </table>`;

    
    partidas.innerHTML = tablaHTML;
}




const datosEjemploPartida = {
    avatar:'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',
    nick: 'MANUEL' ,
    puntos: 100 ,
    fecha:'21 MAYO 2023' 
    }

function insertaNuevaPartida(datosEjemploPartida){
    console.log("Guardando partida")
    juegos.push(datosEjemploPartida)
    console.log(juegos)



}

function pintaDatos(partida){
  
    
    console.log('Datos de la partida:');
    console.log('Avatar:', partida.avatar);
    console.log('Nick:', partida.nick);
    console.log('Puntos:', partida.puntos);
    console.log('Fecha:', partida.fecha);
    const mensajeConfirm = `¿Deseas guardar la partida?
    Nick: ${partida.nick}
    Puntos: ${partida.puntos}
    Fecha: ${partida.fecha}`;
    const guardarPartida = confirm(mensajeConfirm);

    if (guardarPartida) {

        insertaNuevaPartida(datosEjemploPartida);
        pintaTabla();
        console.log('Partida guardada.');
    } 
}

console.log(pintaRanking);
console.log(pintaTabla);
pintaTabla();
pintaDatos(datosEjemploPartida);