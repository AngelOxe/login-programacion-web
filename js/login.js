// Obtener elementos del formulario.
const formLogin = document.getElementById("formLogin");
const inputCorreo = document.getElementById("correo");
const inputPassword = document.getElementById("password");

const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");


// Escuchar el envío del formulario.
formLogin.addEventListener("submit", function (evento) {

    // Evita que el formulario recargue la página.
    evento.preventDefault();

    // Obtener los valores escritos por el usuario.
    const correo = inputCorreo.value.trim();
    const password = inputPassword.value;

    // Variable para saber si todo está correcto.
    let formularioValido = true;


    // Limpiar mensajes de error anteriores.
    errorCorreo.textContent = "";
    errorPassword.textContent = "";

    inputCorreo.classList.remove("is-invalid");
    inputPassword.classList.remove("is-invalid");


    // Validar que el correo no esté vacío.
    if (correo === "") {

        errorCorreo.textContent =
            "El correo electrónico es obligatorio.";

        inputCorreo.classList.add("is-invalid");

        formularioValido = false;

    }
    // Validar formato del correo usando utileria.js.
    else if (!validarCorreo(correo)) {

        errorCorreo.textContent =
            "Ingresa un correo electrónico válido.";

        inputCorreo.classList.add("is-invalid");

        formularioValido = false;
    }


    // Validar que la contraseña no esté vacía.
    if (password === "") {

        errorPassword.textContent =
            "La contraseña es obligatoria.";

        inputPassword.classList.add("is-invalid");

        formularioValido = false;

    }
    // Validar contraseña usando utileria.js.
    else if (!validarPassword(password)) {

        errorPassword.textContent =
            "La contraseña debe tener mínimo 8 caracteres, " +
            "mayúscula, minúscula, número y carácter especial.";

        inputPassword.classList.add("is-invalid");

        formularioValido = false;
    }


    // Si todas las validaciones son correctas.
    if (formularioValido) {

        // Guardar el correo como usuario de la sesión.
        sessionStorage.setItem("usuario", correo);

        // Simular que existe una sesión activa.
        sessionStorage.setItem("sesionActiva", "true");

        // Redirigir al sistema.
        window.location.href = "index.html";
    }

});


// Quitar el error del correo cuando el usuario escriba.
inputCorreo.addEventListener("input", function () {

    errorCorreo.textContent = "";
    inputCorreo.classList.remove("is-invalid");

});


// Quitar el error de contraseña cuando el usuario escriba.
inputPassword.addEventListener("input", function () {

    errorPassword.textContent = "";
    inputPassword.classList.remove("is-invalid");

});