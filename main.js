let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contraseña = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return; // Detenemos la ejecución si no cumple con el mínimo
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contraseña.value = password;
    clasificarContrasena(password); // Clasifica la contraseña generada automáticamente
}

botonGenerar.addEventListener('click', generar);

function limpiar() {
    contraseña.value = '';
    cantidad.value = '';
    document.getElementById("tipo_contrasena").textContent = " ";
}

botonLimpiar.addEventListener('click', limpiar);

function clasificarContrasena(password) {
    const fuerte = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const media = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    const campo = document.getElementById("tipo_contrasena");

    if (fuerte.test(password)) {
        campo.textContent = "Contraseña fuerte";
    } else if (media.test(password)) {
        campo.textContent = "Contraseña media";
    } else {
        campo.textContent = "Contraseña débil";
    }
}

// Escucha el evento de escritura para clasificar contraseñas manualmente ingresadas
contraseña.addEventListener("input", function () {
    clasificarContrasena(contraseña.value);
});
