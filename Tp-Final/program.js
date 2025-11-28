// CALCULAR DONACIÓN
const montoBase = document.getElementById("montoBase");
const tipoDonacion = document.getElementById("tipoDonacion");
const totalDonar = document.getElementById("totalDonar");

function calcularTotal() {
    let base = parseFloat(montoBase.value) || 0;
    let multiplicador = parseFloat(tipoDonacion.value);

    let total = base * multiplicador;
    totalDonar.textContent = "$" + total.toFixed(2);
}

montoBase.addEventListener("input", calcularTotal);
tipoDonacion.addEventListener("change", calcularTotal);

// ENVÍO DE FORMULARIO DE DONACIÓN
document.getElementById("btnEnviarDonacion").addEventListener("click", function() {
    const base = montoBase.value;
    const tipo = tipoDonacion.value;
    const total = totalDonar.textContent.replace("$", ""); // quitar $

    // Llenar formulario oculto
    document.getElementById("mailMontoBase").value = base;
    document.getElementById("mailTipoDonacion").value = tipo;
    document.getElementById("mailTotal").value = total;

    // Enviar por FormSubmit
    document.getElementById("formEnviarMail").submit();
});

// ENVÍO DE FORMULARIO DE VOLUNTARIADO
document.getElementById("btnEnviarVoluntario").addEventListener("click", function () {
    document.getElementById("mailVolNombre").value = document.getElementById("volNombre").value;
    document.getElementById("mailVolEmail").value = document.getElementById("volEmail").value;
    document.getElementById("mailVolTelefono").value = document.getElementById("volTelefono").value;
    document.getElementById("mailVolDisponibilidad").value = document.getElementById("volDisponibilidad").value;
    document.getElementById("mailVolMotivo").value = document.getElementById("volMotivo").value;

    document.getElementById("formVoluntarioMail").submit();
});

// DONACIÓN
document.getElementById("btnEnviarDonacion").addEventListener("click", function(event) {
    event.preventDefault();

    const base = montoBase.value;
    const tipo = tipoDonacion.value;
    const total = totalDonar.textContent.replace("$", "");

    // Llenar formulario oculto
    document.getElementById("mailMontoBase").value = base;
    document.getElementById("mailTipoDonacion").value = tipo;
    document.getElementById("mailTotal").value = total;

    // Enviar el formulario
    const form = document.getElementById("formEnviarMail");
    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    })
    .then(() => {
        // Cerrar modal de donación
        const modalEl = document.getElementById('donarModal');
        bootstrap.Modal.getInstance(modalEl).hide();

        // Mostrar modal de confirmación
        const confirmModal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
        confirmModal.show();
    })
    .catch(err => {
        alert("Error al enviar el formulario. Revisa la consola.");
        console.error(err);
    });
});

// VOLUNTARIADO
document.getElementById("btnEnviarVoluntario").addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("mailVolNombre").value = document.getElementById("volNombre").value;
    document.getElementById("mailVolEmail").value = document.getElementById("volEmail").value;
    document.getElementById("mailVolTelefono").value = document.getElementById("volTelefono").value;
    document.getElementById("mailVolDisponibilidad").value = document.getElementById("volDisponibilidad").value;
    document.getElementById("mailVolMotivo").value = document.getElementById("volMotivo").value;

    const form = document.getElementById("formVoluntarioMail");
    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    })
    .then(() => {
        const modalEl = document.getElementById('voluntarioModal');
        bootstrap.Modal.getInstance(modalEl).hide();

        const confirmModal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
        confirmModal.show();
    })
    .catch(err => {
        alert("Error al enviar el formulario. Revisa la consola.");
        console.error(err);
    });
});

// Botón del modal de confirmación para volver al inicio
document.getElementById("volverIndex").addEventListener("click", function() {
    window.location.href = "index.html";
});


//boton de modos
function toggleTheme() {
    const container = document.getElementById("theme-container");
    const icon = document.getElementById("toggle-icon");

    if (container.classList.contains("light")) {
        container.classList.remove("light");
        container.classList.add("dark");
        icon.src = "imagenes-index/luna.png";
    } else {
        container.classList.remove("dark");
        container.classList.add("light");
        icon.src = "imagenes-index/sol.png";
    }
}






