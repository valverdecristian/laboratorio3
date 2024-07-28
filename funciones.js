// FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS

// Funcion declarada:
function saludar (){
    console.log("Hello 1");
}

saludar(); // Hello 1


// tambien podria hacer esto
// la funcion esta guardada en la variable y esa variable la invoco luego
// Funcion expresada [literal de funciones]:
const saludar2 = function (){
    console.log("Hello 2");
}

saludar2(); // Hello 2


// encierro la funcion: esto es un LITERAL DE FUNCION
(function (){
    console.log("Hello literal");
})();
// esto se conoce como IIFF: Immediately invoke function expression