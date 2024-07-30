console.log("-- clase 2 ---------------");
// sintaxis: setTimeout(funcion, tiempo en mm);

// el interprete cuando ejecuto este archivo reserva memoria (dinamica) para esta funcion.
function saludar(){
    console.log("hola mundo");
}

// para ejecutar: saludar guarda la direccion de memoria de la funcion saludar
saludar();

// funcion auto-invocada: encerrada en parentesis
(function despedir(){
    console.log("chau mundo");
})();

// le asigno la funcion saludar (tambien es un puntero a la funcion)
var pepe = saludar;
pepe(); // seria igual a saludar();

// es lo mismo que hice hace rato. FUNCION NOMBRADA
function x(pepe){
    console.log("paso una funcion como argumento");
    pepe();
}

// le estamos delegando a la funcion x la llamada a la funcion saludar
x(saludar); // es como si fuera: pepe = saludar;


// FUNCION EXPRESADA
var jaimito = function(){
    console.log("esto es una funcion expresada");
}

jaimito();

// const vec = [3, 4, 7, 9, 1, 29, 94, 75];

// let [x, y, z, ...k] = vec;
// // ...k esta parte guarda todo el resto del array en esa variable
// // ...k [parametro rest]

// console.log(x, y, z, k); // salida: 3 4 7 [9, 1, 29, 94, 75]