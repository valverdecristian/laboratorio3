// clase 2 y 3

// para que se ejecute el codigo el script tiene que estar en la ultima linea del html
function saludar() {
    console.log("Hola desde el boton Saludar");
}

console.log("-- manera 1 --- 9 a 11 ------------------")
// const botonSaludar = document.getElementById("btnSaludo");

// botonSaludar.addEventListener("click", saludar);

// eventos que se lanzan cuando se termina de renderizar una pagina web
// * evento load
// * evento DOMContLoad

// tengo dos maneras de trabajar con estos elementos: metodos o properties

console.log("-- manera 2 --- 22 a 29 ------------------") // hace lo mismo que 1
// metodo: .addEventListener(manejador, callback[funcion])
// ademas tendremos el boton registrado
// window.addEventListener("DOMContentLoaded", function(){
    // todo lo de aca adentro se va a ejecutar de manera asincrona
    // cuando se lance el evento DOMContentLoaded se va a ejecutar esto
//     const botonSaludar = document.getElementById("btnSaludo");

//     botonSaludar.addEventListener("click", saludar);
// })

// la funcion 'saludar' la puedo escribir directamente adentro (linea 27)
// linea 25 no se suele hacer, directamente uso document.getElementById("btnSaludo").addEvent...

// en limpio deberia quedar asi:
window.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("btnSaludo").addEventListener("click", function () {
        console.log("Hola desde el nuevo addEvent...");
    });
})

// y con esto asi... puedo mandar el script en el head

/*
    atributo DEFER en Script es un atributo booleano, si esta presente es true
*/