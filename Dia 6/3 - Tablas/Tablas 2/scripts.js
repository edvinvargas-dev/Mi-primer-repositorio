function calculartabla(){
    
    //Obtener numero y tabla
    let ObtenerNumero = document.getElementById("digitarNumero").value;
    let numeroObtenido = Number(ObtenerNumero);
    let mostrarTabla = document.getElementById("mostrarTabla");
//Dejar appenchild vacio siempre
while(mostrarTabla.firstChild){
    mostrarTabla.removeChild(mostrarTabla.firstChild);
}
    for(x=1;x<=10;x++){
        //obtener resultado
        let resultado = numeroObtenido*x;
        //armar string
        let TextoaMostrar = resultado+" por "+x+" es igual a "+resultado;

        //construir tabla
        let itemlist= document.createElement("li");
        itemlist.innerText = TextoaMostrar;
        mostrarTabla.appendChild(itemlist)
    }

}
function reiniciar(){
    location.reload()
}