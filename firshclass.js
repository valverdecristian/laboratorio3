/*
    En JS las funciones son ciudadanos de 1ra clase
    - porque se las puede tratar como a cualquier valor
    - se pueden asignar a una variable
    - se pueden pasar como parametros a otras funciones
    - pueden ser retornadas por una funcion

*/

// Asignar una función a una variable
const sumar = function(a, b){
    return a+b;
};

// Pasar una función como parámetro a otra función
function ejecutora(callback, num1, num2) {
    console.log(callback(num1, num2));
}

ejecutora(sumar, 45, 35); // 80

// Retornar una función desde otra función
function crearSumador(valor){
    return function(numero){
        return numero + valor;
    }
}

const sumarCinco = crearSumador(5);

console.log(sumarCinco(7)); // 12

// Ejemplo de closure: la función recuerda el contexto en el que fue creada [lo que permite mantener un estado privado]
function funcionContadora(){
    let contador = 0;
    return function(){
        return contador++;
    }
}

const contador_clicks = funcionContadora();

// contador_clicks: recuerda el valor de contador cada vez que se llama
console.log(contador_clicks()); // 1
console.log(contador_clicks()); // 2
console.log(contador_clicks()); // 3
console.log(contador_clicks()); // 4