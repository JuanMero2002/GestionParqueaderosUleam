document.addEventListener('DOMContentLoaded', function() {
    mostrarUsuarios();
});

function mostrarUsuarios() {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    var contenedorTablas = document.getElementById("contenedorTablas");

    // Limpiar el contenedor antes de agregar las tablas
    contenedorTablas.innerHTML = "";

    // Construir una tabla por cada usuario registrado
    usuarios.forEach(function(usuario, index) {
        var tabla = document.createElement("table");
        tabla.innerHTML = `
            <table>
                <caption>Usuario ${index + 1}</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombres y Apellidos</th>
                        <th>Cédula de Identidad</th>
                        <th>Número de Teléfono</th>
                        <th>Correo Electrónico</th>
                        <th>Dirección Residencial</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${index + 1}</td>
                        <td>${usuario.nombresApellidos}</td>
                        <td>${usuario.cedula}</td>
                        <td>${usuario.telefono}</td>
                        <td>${usuario.correo}</td>
                        <td>${usuario.direccion}</td>
                    </tr>
                </tbody>
            </table>
        `;
        contenedorTablas.appendChild(tabla);
    });
}
