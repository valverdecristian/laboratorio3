// puedo tener dos funciones 'sumar' y no me lanza un error
var sumar = function sumar(a, b) {
    if(typeof a == "number") {
        return a.toString() + b;
    }
    return a + b;
}