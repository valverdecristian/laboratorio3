

const persona = {
    nombre: "Juan",
    edad: 30,
    // funcion expresada [toman como this al objeto donde estan definidas]
    saludar: function(){
        console.log("hola");
        console.log(this);
    },
    // funcion declarada [toman como this al objeto donde estan definidas]
    presentarse(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
        console.log(this)
    },
    // arrow function
    despedir: ()=>{
        console.log("Chau");
        console.log(this);
    }
}

persona.saludar();
persona.presentarse();
persona.despedir();

// le puedo agregar atributos nuevos (por fuera)
persona.localidad = "Avellaneda";

console.log(persona);