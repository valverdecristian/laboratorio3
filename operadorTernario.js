// sintaxis: condition ? expressionIfTrue : expressionIfFalse;

function esParOImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Impar";
}

// Prueba
console.log(esParOImpar(10)); // Debería imprimir "Par"
console.log(esParOImpar(7));  // Debería imprimir "Impar"
