function borrarLocalStorage() {
    if (confirm("¿Estás seguro de borrar todos los datos de vehículos registrados?")) {
        localStorage.removeItem("vehiculos");
        alert("Los datos han sido eliminados correctamente.");
    }
}

function validarRegistro(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    var placa = document.getElementById("placa").value.trim();
    var marca = document.getElementById("marca").value.trim();
    var modelo = document.getElementById("modelo").value.trim();
    var ano = document.getElementById("ano").value.trim();
    var color = document.getElementById("color").value.trim();
    var mensaje = "";

    // Limpiar mensaje de error anterior
    document.getElementById("mensaje").innerText = "";

    // Validación de placa
    var formatoPlaca = /^[A-Za-z]{3}-\d{4}$/;
    if (!formatoPlaca.test(placa)) {
        mensaje = "El número de placa es inválido. Debe tener tres letras seguidas de un guión y cuatro números.";
    }

    // Validación de año (deben ser 4 dígitos)
    else if (!(/^\d{4}$/.test(ano))) {
        mensaje = "El año del vehículo debe tener exactamente 4 dígitos.";
    }

    // Validación de campos vacíos
    else if (placa === "" || marca === "" || modelo === "" || ano === "" || color === "") {
        mensaje = "Por favor, completa todos los campos.";
    }

    // Validación de placa duplicada en local storage
    else {
        var vehiculos = JSON.parse(localStorage.getItem("vehiculos")) || [];
        var placaRegistrada = vehiculos.find(function(vehiculo) {
            return vehiculo.placa === placa;
        });
        if (placaRegistrada) {
            mensaje = "Placa de vehículo ya registrada.";
        }
    }

    // Si hay un mensaje de error, se muestra y no se guarda en local storage
    if (mensaje !== "") {
        document.getElementById("mensaje").innerText = mensaje;
        return false;
    }

    // Crear un objeto con los datos del vehículo
    var vehiculo = {
        placa: placa,
        marca: marca,
        modelo: modelo,
        ano: ano,
        color: color
    };
    

    // Agregar el nuevo vehículo al array de vehículos
    vehiculos.push(vehiculo);

    // Guardar el array actualizado en el local storage
    localStorage.setItem("vehiculos", JSON.stringify(vehiculos));

    // Mostrar mensaje de éxito
    document.getElementById("mensaje").innerText = "Vehículo registrado correctamente.";

    // Limpiar campos del formulario después de guardar
    document.getElementById("placa").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("color").value = "";



    return true; // Permitir que el formulario se envíe

}
