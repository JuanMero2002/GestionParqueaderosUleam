function borrarLocalStorageUsuarios() {
    if (confirm("¿Estás seguro de borrar todos los datos de usuarios registrados?")) {
        localStorage.removeItem("usuarios");
        alert("Los datos de usuarios han sido eliminados correctamente.");
    }
}

function validarDatosUsuario(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var nombresApellidos = document.getElementById("nombresApellidos").value.trim();
    var cedula = document.getElementById("cedula").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var mensaje = "";

    // Obtener los datos existentes en el local storage
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si la cédula de identidad ya está registrada
    var cedulaExiste = usuarios.some(usuario => usuario.cedula === cedula);
    if (cedulaExiste) {
        mensaje = "Cédula de Identidad ya registrada.";
        document.getElementById("mensaje").innerText = mensaje;
        return false;
    }

    // Verificar si el correo electrónico ya está registrado
    // Obtener los datos existentes en el local storage
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Validación de campos vacíos
    if (nombresApellidos === "" || cedula === "" || telefono === "" || correo === "" || direccion === "") {
        mensaje = "Por favor, completa todos los campos.";
    }
    // Validación de nombres y apellidos (no permitir números)
    else if (/\d/.test(nombresApellidos)) {
        mensaje = "El campo 'Nombres y Apellidos' no puede contener números.";
    }
    // Validación de cédula (debe tener 10 dígitos)
    else if (!(/^\d{10}$/.test(cedula))) {
        mensaje = "La cédula de identidad debe tener exactamente 10 dígitos.";
    }
    // Validación de teléfono (debe tener 10 dígitos)
    else if (!(/^\d{10}$/.test(telefono))) {
        mensaje = "El número de teléfono debe tener exactamente 10 dígitos. Solo números.";
    }
    // Validación de formato de correo electrónico
    else if (!/\S+@(gmail\.com|hotmail\.com|yahoo\.com)$/.test(correo)) {
        mensaje = "El correo electrónico debe tener formato '@gmail.com' '@hotmail.com' o '@yahoo.com'.";
    }
    // Validación de longitud de la dirección
    else if (direccion.length > 40) {
        mensaje = "La dirección residencial no puede exceder los 40 caracteres.";
    }

    // Si hay un mensaje de error, se muestra y se detiene el envío del formulario
    if (mensaje !== "") {
        document.getElementById("mensaje").innerText = mensaje;
        return false;
    }

    // Crear un objeto con los datos del usuario
    var usuario = {
        nombresApellidos: nombresApellidos,
        cedula: cedula,
        telefono: telefono,
        correo: correo,
        direccion: direccion
    };

    // Agregar el nuevo usuario al array de usuarios
    usuarios.push(usuario);

    // Guardar el array actualizado en el local storage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Redirigir a la página datosvehiculo.html
    window.location.href = "finregistro.html";
    return true;
}
