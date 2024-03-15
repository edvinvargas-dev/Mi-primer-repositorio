function extraerElemento(elemento){
    let textoElemento = document.getElementById(elemento).value;
    let miElemento = Number(textoElemento);

    return miElemento;
}
function calcularVenta(){
    let Ventas = [];

    Ventas[0] = extraerElemento("Tienda1");
    Ventas[1] = extraerElemento("Tienda2");
    Ventas[2] = extraerElemento("Tienda3");
    Ventas[3] = extraerElemento("Tienda4");
    Ventas[4] = extraerElemento("Tienda5");
    Ventas[5] = extraerElemento("Tienda6");

    let TotalVenta = sumarVentas(Ventas);
    let VentaMayor = ObtenerVentaMayor(Ventas);
    let VentaMenor = ObtenerVentaMenor(Ventas);

    let parrafoSalida = document.getElementById("TotalSuma");
    let resultado = "Total de Venta: "+TotalVenta+" / Venta Mayor: "+VentaMayor+" / Venta Menor: "+VentaMenor;
    parrafoSalida.textContent = resultado
}

function sumarVentas(array){
    let TotalSumaVenta = array[0];

    for(let venta of array){
        TotalSumaVenta = TotalSumaVenta+venta;
    }return TotalSumaVenta
}

function ObtenerVentaMayor(array){
    let Maximo = array[0];

    for(let venta of array){
        if(venta > Maximo){
            Maximo = venta;
        }
    }return Maximo
}
function ObtenerVentaMenor(array){
    let Minimo = array[0];

    for(let venta of array){
        if(venta < Minimo){
            Minimo = venta;
        }
    }return Minimo
}
function Reiniciar(){
    location.reload()
}