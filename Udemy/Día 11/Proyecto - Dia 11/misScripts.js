function cargarResumen(){
    fetch("Arch.json")
    .then(resp =>resp.json())
    .then(function(salida){
        document.getElementById("banco").textContent = salida.banco;
        document.getElementById("sucursal").textContent = salida.sucursal;
        document.getElementById("titular").textContent = salida.titular;
        document.getElementById("cuenta").textContent = salida.nro_cuenta;
        document.getElementById("usd").textContent = salida.saldo[0].moneda+" : "+salida.saldo[0].monto;
        document.getElementById("eur").textContent = salida.saldo[1].moneda+" . "+salida.saldo[1].monto;
        document.getElementById("cbu").textContent = salida.cbu;
        document.getElementById("abierto").textContent = salida.abierto;
    })
    .catch(function(error) {
        console.log(error)
    })
}