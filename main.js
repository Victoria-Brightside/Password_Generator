let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contraseña = document.getElementById('contrasena');

function generar (){

    let numeroDigitado = parseInt (cantidad.value);

    if (numeroDigitado <8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");

    }
}

function limpiar(){
    contraseña.value = '';
    cantidad.value = '';
}

botonLimpiar.addEventListener('click', limpiar);