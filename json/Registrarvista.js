// Archivo: registrarvista.js

function validarRegistro(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const mensaje = document.getElementById('mensaje');

    // Validar que los campos no estén vacíos
    if (!nombre || !correo || !contrasena) {
        mensaje.textContent = "Todos los campos son obligatorios.";
        mensaje.style.color = "red";
        return false;
    }

    // Obtener la lista de usuarios del localStorage
    let listaUsuarios = localStorage.getItem('listaUsuarios');
    if (listaUsuarios) {
        listaUsuarios = JSON.parse(listaUsuarios);
    } else {
        listaUsuarios = [];
    }

    // Verificar si el correo ya está registrado
    const correoExistente = listaUsuarios.find(usuario => usuario.correo === correo);
    if (correoExistente) {
        mensaje.textContent = "Correo electrónico ya registrado.";
        mensaje.style.color = "red";
        return false;
    }

    // Crear un objeto con los datos
    const datosUsuario = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena
    };

    // Agregar el nuevo usuario a la lista
    listaUsuarios.push(datosUsuario);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

    // Mostrar un mensaje de éxito
    mensaje.textContent = "Registro exitoso.";
    mensaje.style.color = "green";

    // Resetear el formulario
    document.querySelector('.formulario').reset();

    return true;
}

function borrarLocalStorage() {
    localStorage.removeItem('listaUsuarios');
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = "Todos los datos han sido borrados.";
    mensaje.style.color = "blue";
}
