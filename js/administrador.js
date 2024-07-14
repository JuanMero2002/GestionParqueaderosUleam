// Función para validar el inicio de sesión
function validarInicioSesion() {
    var usuario = document.getElementById("correo").value.trim();
    var contrasena = document.getElementById("contrasena").value.trim();

    // Verificar si los datos ingresados son válidos
    if (usuario === "ADMIN123" && contrasena === "ADMIN123") {
        // Redireccionar a la página opcionesadmin.html
        window.location.href = "opcionesadmin.html";
        return false; // Evitar el envío del formulario
    } else {
        // Mostrar mensaje de datos no válidos
        var mensajeError = document.getElementById("mensaje");
        mensajeError.innerText = "Datos no válidos";
        return false; // Evitar el envío del formulario
    }
}
