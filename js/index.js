document.addEventListener("DOMContentLoaded", function () {

    const btnSidebar = document.getElementById("btnSidebar");
    const sidebar = document.getElementById("sidebar");

    const btnUsuarios = document.getElementById("btnUsuarios");
    const submenuUsuarios = document.getElementById("submenuUsuarios");

    const flechaUsuarios = document.getElementById("flechaUsuarios");

    const contenidoPrincipal =
        document.getElementById("contenidoPrincipal");


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

});