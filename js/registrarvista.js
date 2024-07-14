function validarRegistro(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var formatoCorreo = /\S+@\S+\.\S+/;

    if (nombre.trim() === "" || correo.trim() === "" || contrasena.trim() === "") {
        document.getElementById("mensaje").innerText = "Por favor, completa todos los campos.";
        return false;
    }

    if (!formatoCorreo.test(correo)) {
        document.getElementById("mensaje").innerText = "El correo ingresado no tiene un formato válido.";
        return false;
    }

    // Redirige a registroverificado.html si la validación es exitosa
    window.location.href = "registroverificado.html";
    return true;
}
