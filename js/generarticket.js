function generarTicket(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores seleccionados por el usuario
    var dia = document.getElementById("dia").value;
    var horaEntrada = document.getElementById("horaEntrada").value;
    var horaSalida = document.getElementById("horaSalida").value;
    var espacio = document.getElementById("espacio").value;

    // Validar que los campos no estén vacíos
    if (!dia || !horaEntrada || !horaSalida || !espacio) {
        alert("Por favor complete todos los campos.");
        return;
    }

    // Validar que la hora de salida sea mayor que la hora de entrada
    if (horaSalida <= horaEntrada) {
        alert("La hora de salida debe ser mayor que la hora de entrada.");
        return;
    }

    // Crear el ticket
    var ticket = {
        dia: dia,
        horaEntrada: horaEntrada,
        horaSalida: horaSalida,
        espacio: espacio
    };

    // Mostrar el ticket en el párrafo con id "ticket"
    document.getElementById("ticket").innerText = `Ticket generado:\nDía: ${dia}\nHora de Entrada: ${horaEntrada}\nHora de Salida: ${horaSalida}\nEspacio: ${espacio}`;

    // Guardar el ticket en el local storage
    var tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(ticket);
    localStorage.setItem("tickets", JSON.stringify(tickets));
}

function imprimirTicket() {
    var { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    // Obtener los valores seleccionados por el usuario
    var dia = document.getElementById("dia").value;
    var horaEntrada = document.getElementById("horaEntrada").value;
    var horaSalida = document.getElementById("horaSalida").value;
    var espacio = document.getElementById("espacio").value;

        // Eliminar el espacio seleccionado de la lista de opciones
        var selectEspacio = document.getElementById("espacio");
        selectEspacio.remove(selectEspacio.selectedIndex);

    // Crear el contenido del ticket
    var ticket = "Ticket generado:\n\n" +
                 "Día: " + dia + "\n" +
                 "Hora de Entrada: " + horaEntrada + "\n" +
                 "Hora de Salida: " + horaSalida + "\n" +
                 "Espacio: " + espacio;

    // Agregar el contenido al PDF
    doc.text(ticket, 10, 10);

    // Descargar el PDF
    doc.save('ticket.pdf');
}
