

function Animal(tipo, edad, sexo){
    this.tipo = tipo;
    this.edad = edad;
    this.sexo = sexo;
}

Animal.prototype.sonar = function(sonido){
    console.log("Hago" + sonido);
}

Animal.prototype.presentarse = function(){
    return `Soy un animal de tipo ${this.tipo} y tengo ${this.edad} años y soy ${this.sexo}`;
};


function Mascota (nombre, tipo, edad, sexo, vacuna = false){ // vacuna
    // mascota hereda de Animal
    Animal.call(this, tipo, edad, sexo);

    this.nombre = nombre;
    this.vacuna = vacuna;

    // vacuna: si no me pasan vacuna, su valor por defecto seria false
}

// ESTAS TRES LINEAS DADAS POR CHATGPT [sin necesidad de usarlas por ahora]
// Establecer la herencia de prototipos correctamente
// Mascota.prototype = Object.create(Animal.prototype);
// Mascota.prototype.constructor = Mascota;

Mascota.prototype.jugar = function(){
    console.log("mascota mimosa");
}

Mascota.prototype.presentarse = function(){
    // Llamar al método presentarse de Animal
    const mensaje = Animal.prototype.presentarse.call(this);
    return mensaje.replace("un animal", "una mascota");
}

// para unir el prototipo de Animal a Mascota
Object.setPrototypeOf(Mascota.prototype, Animal.prototype);

const perro = new Animal("perro", 3, "macho");
const mascota = new Mascota("manuelita", "tortuga", 56, "hembra", true);
console.log(perro);
console.log(mascota);

console.log(perro.presentarse());
console.log(mascota.presentarse());

/*
    NO EXISTE COMO TAL LOS METODOS ESTATICOS en JS
*/