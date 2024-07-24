function saludar() {
    alert("Hola soy un alerta");
}

const modal = document.getElementsByTagName("dialog")[0];

// para cerrar el dialog
document.getElementById("btnCerrar").addEventListener("click", 
    ()=>{
        modal.close()
    }
)

document.getElementById("btnOpen").addEventListener("click", 
    ()=>{
        modal.open = true;
    }
)