
function agregarTarea(){

    tiempoTerminado = setTimeout(tiempoCumplido,10000);
    intervaloDeTiempo = setInterval(ticTac,1000)

    document.getElementById("reloj").textContent = 10;
    let textoRemplazo = document.getElementById("textoaReemplazar");
    let tareaIndicada = document.getElementById("tareaDigitada").value;
    tareaIndicada = tareaIndicada.toUpperCase();

    let elementoUl = document.createElement("ul");
    let elementoLi = document.createElement("li");

    elementoLi.textContent = tareaIndicada;
    elementoUl.appendChild(elementoLi);
    
    textoRemplazo.appendChild(elementoUl)
    limpiarCampos();

}



function ticTac(){
    let tiempo = document.getElementById("reloj").textContent;
    document.getElementById("reloj").textContent = tiempo -1;
}

function tiempoCumplido(){
    clearInterval(intervaloDeTiempo);
    document.getElementById("reloj").textContent = 0;
    document.getElementById("audio").play();
}

function terminarFormulario(){
    clearTimeout(tiempoTerminado);
    clearInterval(intervaloDeTiempo);

}
function limpiarCampos() {
    document.getElementById("tareaDigitada").value = "";
}
