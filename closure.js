const calculadora = (function (){
    function sumar(a, b) {
        if(typeof a == "number" && typeof b == "number") {
            return a + b;
        }
        return NaN
        // En JS esta bien tener mas de un return.
    }
    
    function restar(a, b) {
        if(typeof a == "number" && typeof b == "number") {
            return a - b;
        }
        return NaN
    }
    
    function multiplicar(a, b) {
        if(typeof a == "number" && typeof b == "number") {
            return a * b;
        }
        return NaN
    }
    
    function dividir(a, b) {
        // operador ternario
        return validarCero(b) ? NaN : a/b;
    }
    
    function validarCero(x){
        return x === 0;
    }

    return {
        sumar:sumar,
        restar:restar,
        multiplicar,
        dividir,
        // cuando el atributo y la funcion se llaman igual puedo usar una shorthand
        // sumar,
        // restar, etc...
    };
})();
// esto devuelve un objeto

// esto no lo vamos a usar, se usaba hasta el 2015

// nombre del objeto = nombre del modulo


// llamo a sumar(closure)
console.log(calculadora.sumar(2,5));