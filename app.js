// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de amigos.
let amigos = [];

//Permite que al usar la tecla enter ingrese el nombre a la lista.
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

//Función para agragar amigos a la lista.
function agregarAmigo () {
    let nuevoAmigo = document.querySelector('#amigo');
    let nombre = nuevoAmigo.value.trim()

    //Valida que el campo no esté vacío.
    if (nombre === '') {
        document.getElementById('amigo').placeholder = 'El campo está vacío, por favor ingresa un nombre válido';
        return;
    } else {
        if(!amigos.includes(nombre)) {
            //Acgtualiza la lista agregando los nuevos nombres.
            amigos.push(nombre);

            //Limpia el campo de entrada despues de ingresar los nombres.
            nuevoAmigo.value = ''; 
            document.getElementById('amigo').placeholder = 'Escribe un nombre';

            actualizaLista();
        } else {
            //Valida si un nombre ya ha sido ingresado antes.
            alert('El nombre ya existe. Ingresa otro nombre');
            nuevoAmigo.value = '';
        }
    }

    //Hace que el cursor se mantenga en input después de ingresar el nombre.
    nuevoAmigo.focus();
}

//Función que actualiza la lista de amigos que se muestra.
function actualizaLista (){
    //Selecciona la lista donde se muestran los amigos.
    let lista = document.getElementById('listaAmigos');

    //Limpia la lista existente para evitar que hayan duplicados.
    lista.innerHTML = '';

    //Recorre el arreglo y crea los elementos de la lista.
    for(let i = 0; i < amigos.length; i++) {
        let elemLi = document.createElement('li');
        elemLi.textContent = amigos[i];
        //Agrega un elemento lista por cada amigo.
        lista.appendChild(elemLi);
    }
}

//Función para sortear amigo.
function sortearAmigo () {
    //Validar que haya amigos disponibles para sortear.
    if (amigos.length === 0) {
        alert('Por favor, ingresa al menos dos nombres para iniciar el sorteo.');
        return;
    }

    //Generar amigo aleatorio
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let suertudo = amigos[amigoAleatorio];

    //Muestra el resultado.
    document.querySelector('#resultado').innerHTML = `El suertudo escogido es: ¡${suertudo}!`;

}