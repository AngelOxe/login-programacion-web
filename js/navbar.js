// Esperar a que el contenido de la página esté cargado.
document.addEventListener("DOMContentLoaded", function () {

    // Buscar el contenedor donde se colocará el navbar.
    const contenedorNavbar =
        document.getElementById("navbar-container");


    /*
        Si todavía no existe el contenedor,
        simplemente no se ejecuta el navbar.

        El Compañero 2 agregará este contenedor
        dentro de index.html.
    */
    if (!contenedorNavbar) {
        return;
    }


    // Obtener el usuario que inició sesión.
    const usuario =
        sessionStorage.getItem("usuario");


    // Comprobar que existe una sesión activa.
    const sesionActiva =
        sessionStorage.getItem("sesionActiva");


    /*
        Si alguien intenta entrar directamente
        al sistema sin iniciar sesión, regresará
        automáticamente al login.
    */
    if (sesionActiva !== "true" || !usuario) {

        window.location.href = "login.html";

        return;
    }


    // Crear estructura HTML del navbar.
    contenedorNavbar.innerHTML = `
        <nav class="navbar-sistema">

            <div class="navbar-izquierda">

                <button
                    type="button"
                    id="btnSidebar"
                    class="btn-menu"
                    aria-label="Abrir o cerrar menú lateral"
                >
                    ☰
                </button>

                <span class="titulo-sistema">
                    Sistema
                </span>

            </div>


            <div class="navbar-usuario">

                <button
                    type="button"
                    id="btnUsuario"
                    class="btn-usuario"
                >
                    <span class="icono-usuario">
                        👤
                    </span>

                    <span id="nombreUsuario">
                        ${usuario}
                    </span>

                    <span class="flecha">
                        ▼
                    </span>
                </button>


                <div
                    id="menuUsuario"
                    class="menu-usuario"
                >

                    <button
                        type="button"
                        id="btnSalir"
                        class="btn-salir"
                    >
                        Salir del sistema
                    </button>

                </div>

            </div>

        </nav>
    `;


    // Obtener los elementos que acabamos de crear.
    const btnUsuario =
        document.getElementById("btnUsuario");

    const menuUsuario =
        document.getElementById("menuUsuario");

    const btnSalir =
        document.getElementById("btnSalir");


    // Mostrar u ocultar el menú del usuario.
    btnUsuario.addEventListener("click", function () {

        menuUsuario.classList.toggle("mostrar");

    });


    // Cerrar el menú si se hace clic fuera de él.
    document.addEventListener("click", function (evento) {

        if (
            !btnUsuario.contains(evento.target) &&
            !menuUsuario.contains(evento.target)
        ) {

            menuUsuario.classList.remove("mostrar");

        }

    });


    // Cerrar sesión.
    btnSalir.addEventListener("click", function () {

        // Eliminar información de la sesión.
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("sesionActiva");

        // Regresar al login.
        window.location.href = "login.html";

    });

});