// obtener una referencia al formulario:
document.forms[0].addEventListener("submit", (e)=>{

    e.preventDefault();

    console.log("Evento submit");
});