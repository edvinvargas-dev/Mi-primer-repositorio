let menu = document.getElementById('miMenu');
let boton = document.getElementById('miBoton');

boton.addEventListener("click", function(){
    menu.style.display = "block";
})

boton.addEventListener("mouseout", function(){
    menu.style.display = "none";
})


