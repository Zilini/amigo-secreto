// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres de amigo
let amigos = [];

function agregarAmigo () {
    //Captura el valor del campo de entrada.
    let amigoNuevo = document.getElementById('amigo').value;

    //Valida que le campo de entrada no esté vacío.
    if (amigoNuevo.trim() === '') {
        document.querySelector('#amigo').placeholder = 'Por favor, ingresa un nombre válido';
    } else {
        //Agrega a la lista el nombre ingresado.
        amigos.push(amigoNuevo);
        console.log(amigos);

        //Limpia el campo de entrada despues de agregar el nombre.
        document.querySelector('#amigo').value = '';    
        document.getElementById('amigo').placeholder = 'Escribe un nombre';
    }
}