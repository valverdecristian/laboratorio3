/*
    OBJETOS:
    - objeto literal
    - objeto a traves del constructor
    - objeto a traves de Object.create()
*/

// objeto literal ---------------------------------
const obj1 = {};

const objLiteral = {
    // el objeto crea un scope
    numero:3,
    cadena:"hola",
    booleano: false,
    array: [3, "hola", true, 1], //puede contener elementos de diferentes tipos de datos
    otroObjeto: {},
};

// acceder a un atributo: operador punto o nomenclatura de corchetes
console.log(objLiteral.array);
console.log(objLiteral["array"]);

let atributo = "cadena";
console.log(objLiteral[atributo]); // salida: "hola"

console.log("-- recorrer un objeto --------------")
const entradas = Object.entries(objLiteral); // devuelve un array de arrays: [Array(2), Array(2), etc]
const valores = Object.values(objLiteral); // devuelve un array de valores
const claves = Object.keys(objLiteral); // devuelve un array de claves

for(let i=0; i< entradas.length; i++){
    // posicion 0 clave, posicion 1 valor.
    console.log(`${entradas[i][0]} : ${entradas[i][1]}`); // entre las llaves podemos colocar codigo de js (ternarios)
}

console.log("-- recorriendo el objeto con un for ---------------")
// otra manera de reccorer este objeto
for(let i=0; i< entradas.length; i++){
    let [clave, valor] = entradas[i];
    console.log(`${clave} : ${valor}`);
}

console.log("-- FOR IN ----------------------------")
for (const i in claves) {
    console.log(`${claves[i]}: ${objLiteral[claves[i]]}`);
}
// i: solo devuelve el indice en un array
// i: en un objeto, devolveria la clave

console.log("-- FOR OF ----------------------------")
for (const x of claves) { // Object.keys(objeto): devuelve un array de claves
    console.log(x);
}
// x: devuelve el valor de cada iteracion en un array
// x: en un objeto, devuelve un error porque no puede trabajar sobre objetos

console.log("-- FOR EACH ----------------------------")
claves.forEach((clave)=>{
    console.log(clave);
})
// foreach le pasa el elemento al callback


// con constructor ---------------------------------
const obj2 = new Object(); // crea un objeto vacio

// Crea un objeto que envuelve el valor primitivo 5 como un objeto Number.
const obj4 = new Object(5); // Salida: number {5}


// con Object.create(); ---------------------------------
const obj3 = Object.create({}); // Crea un objeto que hereda de un objeto vacío. Podemos verlo como una clase estática.


console.log(obj1); // Salida: {}
console.log(obj2); // Salida: {}
console.log(obj3); // Salida: {}