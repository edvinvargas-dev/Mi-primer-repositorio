let campo = document.getElementById("miCampo");

function validarNumero(event){
    if(event.keyCode < 48 || event.keyCode >57){
        event.preventDefault();
    };
};

campo.addEventListener("keydown",validarNumero);

campo.addEventListener("keyup",function(event){
    console.log("muestra la lista de caracteres ingresados: "+event.target.value);
});

campo.addEventListener("keypress", function(event){
    console.log("Muestra el caracter presionado: "+ event.key);
})