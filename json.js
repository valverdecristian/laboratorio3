/*
    JSON: JavaScript Object Notation
*/

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 24,
};

let json = JSON.stringify(persona); // convierte al objeto en string

let otraPersona = JSON.parse(json); // lo vuelvo a convertir a Object

console.log(typeof persona); // de tipo Object
console.log(typeof otraPersona); // de tipo Object
console.log(typeof json); // string

console.log(persona);
console.log(otraPersona);
console.log(json);