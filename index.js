// document hace referencia al arbol HTML
const formulario = document.forms[0];

// evento: los manejadores de eventos reciben un objeto 'e'
// las propiedades empiezan con on (de la otra forma va el nombre del evento [en este caso "submit"])
// formulario.onsubmit = function(e){

// }

// EL EQUIVALENTE AL EVENTO ES ESTE CODIGO:
formulario.addEventListener("submit", function(e){
    // el formulario es el que lanza el evento submit
    e.preventDefault();

    console.log(e.target); // emisor del evento
    // console.log(this): hace referencia a quien fue el emisor del evento.
    // si tuviera un arrow function el emisor del evento seria windows [porque no esta en el scope del formulario]
})