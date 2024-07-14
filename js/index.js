function validarInicioSesion() {
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var formatoCorreo = /\S+@gmail\.com$/;

    if (correo.trim() === "" || contrasena.trim() === "") {
        document.getElementById("mensaje").innerText = "Por favor, completa todos los campos.";
        return false;
    }

    //if (!formatoCorreo.test(correo)) {
        //document.getElementById("mensaje").innerText = "El correo ingresado no tiene el formato correcto ('@gmail.com').";
        //return false;
    //}

    // Obtener los usuarios del local storage
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el correo está registrado
    var correoRegistrado = usuarios.some(usuario => usuario.correo === correo);

    if (!correoRegistrado) {
        document.getElementById("mensaje").innerText = "El correo electrónico ingresado no está registrado.";
        return false;
    }

    // Redireccionar a opcionesusuario.html si el correo está registrado
    window.location.href = 'opcionesusuario.html';

    return false; // Evitar que el formulario se envíe
}
