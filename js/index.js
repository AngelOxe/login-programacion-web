document.addEventListener("DOMContentLoaded", function () {

    const btnSidebar = document.getElementById("btnSidebar");
    const sidebar = document.getElementById("sidebar");

    const btnUsuarios = document.getElementById("btnUsuarios");
    const submenuUsuarios = document.getElementById("submenuUsuarios");

    const flechaUsuarios = document.getElementById("flechaUsuarios");

    const contenidoPrincipal = document.getElementById("contenidoPrincipal");
    
    const btnCaptura = document.getElementById("btnCaptura");
    const seccionCaptura = document.getElementById("seccionCaptura");

    const btnEstudiante = document.getElementById("btnEstudiante");

    const seccionEstudiante = document.getElementById("seccionEstudiante");


    // Abrir y cerrar sidebar
    btnSidebar.addEventListener("click", function () {

        sidebar.classList.toggle("mostrar");

        contenidoPrincipal.classList.toggle(
            "sidebar-abierto"
        );

    });


    // Mostrar y ocultar submenu Usuarios
    btnUsuarios.addEventListener("click", function () {

        submenuUsuarios.classList.toggle("mostrar");


        if (submenuUsuarios.classList.contains("mostrar")) {

            flechaUsuarios.textContent = "▲";

        } else {

            flechaUsuarios.textContent = "▼";

        }

    });

    // Mostrar formulario de captura
    btnCaptura.addEventListener("click", function () {

    seccionCaptura.style.display = "block";

    seccionEstudiante.style.display = "none";

    });

    // Mostrar formulario de estudiante
    btnEstudiante.addEventListener("click", function () {

    seccionEstudiante.style.display = "block";

    seccionCaptura.style.display = "none";

     });

});

// Formulario de usuario
const formUsuario = document.getElementById("formUsuario");

const nombreUsuario = document.getElementById("nombreUsuario");
const correoUsuario = document.getElementById("correoUsuario");
const passwordUsuario = document.getElementById("passwordUsuario");

const errorNombre = document.getElementById("errorNombre");
const errorCorreoUsuario =
    document.getElementById("errorCorreoUsuario");
const errorPasswordUsuario =
    document.getElementById("errorPasswordUsuario");


formUsuario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = nombreUsuario.value.trim();
    const correo = correoUsuario.value.trim();
    const password = passwordUsuario.value;

    let formularioValido = true;


    // Limpiar errores
    errorNombre.textContent = "";
    errorCorreoUsuario.textContent = "";
    errorPasswordUsuario.textContent = "";

    nombreUsuario.classList.remove("is-invalid");
    correoUsuario.classList.remove("is-invalid");
    passwordUsuario.classList.remove("is-invalid");


    // Validar nombre
    if (nombre === "") {

        errorNombre.textContent =
            "El nombre es obligatorio.";

        nombreUsuario.classList.add("is-invalid");

        formularioValido = false;

    } else if (!soloLetras(nombre)) {

        errorNombre.textContent =
            "El nombre solamente debe contener letras.";

        nombreUsuario.classList.add("is-invalid");

        formularioValido = false;
    }


    // Validar correo
    if (correo === "") {

        errorCorreoUsuario.textContent =
            "El correo electrónico es obligatorio.";

        correoUsuario.classList.add("is-invalid");

        formularioValido = false;

    } else if (!validarCorreo(correo)) {

        errorCorreoUsuario.textContent =
            "Ingresa un correo electrónico válido.";

        correoUsuario.classList.add("is-invalid");

        formularioValido = false;
    }


    // Validar contraseña
    if (password === "") {

        errorPasswordUsuario.textContent =
            "La contraseña es obligatoria.";

        passwordUsuario.classList.add("is-invalid");

        formularioValido = false;

    } else if (!validarPassword(password)) {

        errorPasswordUsuario.textContent =
            "La contraseña debe tener mínimo 8 caracteres, " +
            "mayúscula, minúscula, número y carácter especial.";

        passwordUsuario.classList.add("is-invalid");

        formularioValido = false;
    }


    // Si todo es correcto
    if (formularioValido) {

        alert("Usuario registrado correctamente.");

        formUsuario.reset();

    }

});
nombreUsuario.addEventListener("input", function () {

    errorNombre.textContent = "";
    nombreUsuario.classList.remove("is-invalid");

});


correoUsuario.addEventListener("input", function () {

    errorCorreoUsuario.textContent = "";
    correoUsuario.classList.remove("is-invalid");

});


passwordUsuario.addEventListener("input", function () {

    errorPasswordUsuario.textContent = "";
    passwordUsuario.classList.remove("is-invalid");

});