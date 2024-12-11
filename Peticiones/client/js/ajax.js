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

    const xhr = new XMLHttpRequest();

    loader.classList.remove("oculto");



    // setear el el evento ready state change [que podemos hacerlo de las dos maneras. 1) propiedad onreadystatechange o 2)addEventListener]
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState ==4){
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            }
            else{
                console.error(`Error ${xhr.status}: ${xhr.statusText}`)
            }

            loader.classList.add("oculto");

        }

    }

    // open de la peticion: configura
    xhr.open("GET", url, true);

    // enviar [la peticion: en las peticiones get no debo colocar nada en el send]
    try {
        xhr.send();
    } catch (err) {
        console.error(err);
    }
    
}

function getPersona(){
    
}

function postPersona(){
    
}

function deletePersona(){
    
}

function updatePersona(){
    
}