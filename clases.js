class Animal{
    constructor(tipo, edad, sexo, patas = 2){
        this.tipo = tipo;
        this.edad = edad;
        this.sexo = sexo;
        this.patas = patas
    }

    // get y set se transforman en propiedades
    set Patas(value){
        this.patas = value;
    }

    get Patas(){
        return this.patas
    }

    sonar(sonido){
        console.log("hago" + sonido)
    }

    presentarse(){
        return `Soy un animal de tipo ${this.tipo} y tengo ${this.edad} años y soy ${this.sexo}`;
    };

    // con el static le estoy colgando este atributo
    static vivo = false;
}

// herencia
class Mascota extends Animal{
    constructor(nombre, tipo, edad, sexo, vacuna = false){
        super(tipo, edad, sexo)

        this.nombre = nombre;
        this.vacuna = vacuna;
    }

    jugar() {
        console.log("soy feliz jugando");
    }

    presentarse(){
        return (super.presentarse().replace("un animal", "una mascota"));
    }
}




const vaca = new Animal("Vaca", 5, "hembra");
console.log(vaca);
console.log(vaca.presentarse());
console.log(vaca.Patas); // es una propiedad
console.log(Animal.vivo); // false

const mascota = new Mascota("manuelita", "tortuga", 56, "hembra", true);

console.log(mascota);
console.log(mascota.presentarse());



/*
    Dependiendo como declaramos el metodo, es a donde se va a colgar.
    [no vamos a declarar metodos con 'function', pero es para ver donde se cuelga ese metodo, que seria en la instancia Animal y no en prototype de object]

    En la class cuando usamos 'extends' sabe que tiene que unir los prototypes de uno y del otro.
*/