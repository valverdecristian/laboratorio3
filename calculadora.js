export function sumar(a, b) {
    if(typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    return NaN
    // En JS esta bien tener mas de un return.
}

// funcion declarada
export default function restar(a, b) {
    if(typeof a == "number" && typeof b == "number") {
        return a - b;
    }
    return NaN
}

// 
export let multiplicar = function (a, b) {
    if(typeof a == "number" && typeof b == "number") {
        return a * b;
    }
    return NaN
}

export function dividir(a, b) {
    // operador ternario
    return validarCero(b) ? NaN : a/b;
}

function validarCero(x){
    return x === 0;
}

// tambien puedo exportar de otra manera
// export {sumar, multiplicar, dividir};