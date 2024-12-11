function calcular(funcion, num1, num2) {
    return funcion(num1, num2);
}

function sumar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

console.log(calcular(sumar, 5, 3)); // 8
console.log(calcular(multiplicar, 5, 3)); // 15
