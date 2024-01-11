function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcularVenta(){
    let venta1, venta2, venta3, venta4, venta5, venta6;

    venta1 = extraerNumeroDesdeElemento("Tienda1");
    venta2 = extraerNumeroDesdeElemento("Tienda2");
    venta3 = extraerNumeroDesdeElemento("Tienda3");
    venta4 = extraerNumeroDesdeElemento("Tienda4");
    venta5 = extraerNumeroDesdeElemento("Tienda5");
    venta6 = extraerNumeroDesdeElemento("Tienda6");

    let totalVentas = venta1+venta2+venta3+venta4+venta5+venta6;

    let mensajeSalida = "Total Ventas: "+totalVentas;
    let elementoSalida = document.getElementById("TotalSuma");
    elementoSalida.textContent = mensajeSalida
}