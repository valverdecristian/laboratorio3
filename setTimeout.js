// sintaxis: setTimeout(funcion, tiempo en mm);

function saludar(){
    console.log("hola mundo desde el setTimeout");
}

setTimeout(saludar, 3000);

/*
    setTimeout es NO BLOQUEANTE
    - TAMBIEN SE PUEDE PASAR A LA FUNCION COMO ARGUMENTO DEL SETTIMEOUT

*/


// callback de forma expresada

setTimeout(function (){
    console.log("hola mundo: callback de forma expresada");
},5000);
// puedo transformar esto en una arrow function (si no la reutilizo)