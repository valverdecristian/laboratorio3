document.getElementById("btnGetPersonas").addEventListener("click", ()=>{
    getPersonas();
});

document.getElementById("btnGetPersona").addEventListener("click", ()=>{
    getPersona();
});

document.getElementById("btnPostPersona").addEventListener("click", ()=>{
    postPersona();
});

document.getElementById("btnDeletePersona").addEventListener("click", ()=>{
    deletePersona();
});

document.getElementById("btnUpdatePersona").addEventListener("click", ()=>{
    updatePersona();
});

const loader = document.querySelector("#loader");

const url = "http://localhost:3000/personas";


function getPersonas(){

    loader.classList.remove("oculto");

    fetch(url)
    .then((respuesta)=>{
        // if(respuesta.ok == true){
        //     return respuesta.json(); // capturo la promesa en otro then
        // }
        // else{
        //     // retorno una promesa rechazada, para que sea capturda
        //     return Promise.reject(respuesta);
        // }

        return respuesta.ok ? respuesta.json() : Promise.reject(respuesta);

        console.log(respuesta)
        // la respuesta OK significa que "hay datos"
    })
    .then((data)=> console.log(data))
    .catch((respuesta)=> console.error(`Error ${respuesta.status}: ${respuesta.statusText}`))
    .finally(()=> loader.classList.add("oculto"))
}

function getPersona(){
    
}

function postPersona(){
    
}

function deletePersona(){
    
}

function updatePersona(){
    
}