// Valida que un correo electrónico tenga un formato correcto.
function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}


// Valida que un texto contenga únicamente letras y espacios.
function soloLetras(texto) {
    const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
    return expresion.test(texto);
}


// Valida que un número tenga exactamente la longitud indicada.
function validarLongitud(numero, maxLongitud) {
    const valor = String(numero).trim();

    return /^\d+$/.test(valor) && valor.length === maxLongitud;
}


// Calcula la edad a partir de una fecha de nacimiento.
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento + "T00:00:00");

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    const diferenciaMes = hoy.getMonth() - nacimiento.getMonth();

    if (
        diferenciaMes < 0 ||
        (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--;
    }

    return edad;
}


// Determina si una persona tiene 18 años o más.
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}


// Valida que una contraseña:
// - tenga mínimo 8 caracteres
// - incluya una mayúscula
// - incluya una minúscula
// - incluya un número
// - incluya un carácter especial
function validarPassword(password) {
    const expresion =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?])[A-Za-z\d!@#$%^&*()_\-+=<>?]{8,}$/;

    return expresion.test(password);
}