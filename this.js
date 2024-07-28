var nombre = "Juan";

// function miFuncion(){
//     console.log(this.nombre);
//     // console.log(this);
// }

const persona = {
    nombre: "Jose",
    miFuncion: function(){
        console.log(this.nombre);
        // console.log(this);
    }
}

// miFuncion(); // Juan

persona.miFuncion(); // Jose

const metodo = persona.miFuncion();

persona.miFuncion();
// metodo();
// metodo.call(persona);


setTimeout(persona.miFuncion,3000); // Juan: el this de setTimeout es window o global
// para no lidiar con este this deberia usar una function en el setTimeout

// call es el mas importante para herencia
console.log("-- CALL ----------------------------")

function saludar(saludo, signo) {
    console.log(`${saludo}, ${this.nombre}${signo}`);
}

const persona2 = { nombre: 'Juan' };

saludar.call(persona2, 'Hola', '!');

console.log("-- APPLY ----------------------------")

saludar.apply(persona2, ['Hola', '!']);

