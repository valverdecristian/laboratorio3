// FUNCIONES DECLARADAS Y FUNCIONES EXPRESADAS

// EL HOISTING AFECTA A TODAS LAS FUNCIONES


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


// arrow function
// es una funcion anonima (expresada)
// ningun arrow function generan scope
function sumar (a, b){
    return a+b;
}

let sumar = (a,b)=>a+b; // sin llaves es un return implicito