
// asi es como veniamos trabajando hasta ahora.
// function Persona(nombre, edad, genero){
//     const obj = {};
//     obj.nombre = nombre;
//     obj.edad = edad;
//     obj.genero = genero;

//     obj.saludar = function() {
//         console.log("hola");
//     };

//     obj.presentarse = function () {
//         console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
//         console.log(this)
//     };

//     return obj;
// }

// funcion constructora
function Persona(nombre, edad, genero){
    // `this` se refiere al nuevo objeto
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;

    // Métodos
    this.saludar = function() {
        console.log("hola");
    };

    this.presentarse = function () {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
        console.log(this)
    };
}

// Crear una nueva instancia de Persona
const per1 = new Persona("Juan", 30, "m");
const per2 = new Persona("Lucia", 34, "f");

console.log(per1);
console.log(per2);

per1.presentarse();