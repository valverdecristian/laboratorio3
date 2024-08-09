
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
function Persona(nombre, edad, genero, altura){
    // `this` se refiere al nuevo objeto
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    let _altura = altura; // se comporta como atributo privado

    // getter y setter [los uso como clousure]
    this.getAltura = function(){
        return _altura;
    }

    this.setAltura = function(value){
        _altura = value;
    }

    // Métodos [redefinido con el prototype]
    // this.saludar = function() {
    //     console.log("hola");
    // };

    // this.presentarse = function () {
    //     console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
    //     console.log(this);
    // };
}


// saludar y presentarse deberia colgarlos del prototype

Persona.prototype.saludar = function() {
    console.log("hola");
};

Persona.prototype.presentarse = function(){
    console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
    console.log(this);
};




// Crear una nueva instancia de Persona
const per1 = new Persona("Juan", 30, "m", 1.60);
const per2 = new Persona("Lucia", 34, "f", 1.70);

console.log(per1);
console.log(per2);

per1.presentarse();

// pido mostrar altura
console.log(per2._altura); // undefined
console.log(per2.getAltura()); // 1.70



/*
    Uso el _ al principio del atributo para indicar que deberia ser tratado como privado

    En la misma funcion contructora puedo darle valor por defecto a los parametros

    Si en la construccion del objeto no le paso un valor a algun parametro me va a devolver 'undefined'

    saludar y presentarse deberia colgarlos del prototype
*/

// on the fly [le construyo un nuevo atributo desde afuera]
// per2 guarda la direccion de memoria de Persona (this)
per2._altura = 3.21;

