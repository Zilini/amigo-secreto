// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de amigos.
let amigos = [];

//Función para agragar amigos a la lista.
function agregarAmigo () {
    let nuevoAmigo = document.querySelector('#amigo');
    let nombre = nuevoAmigo.value.trim()

    if (nombre === '') {
        document.getElementById('amigo').placeholder = 'Por favor, ingrese un nombre válido';
        return;
    }

    amigos.push(nombre);
    nuevoAmigo.value = ''; 
    document.getElementById('amigo').placeholder = 'Escribe un nombre';
}