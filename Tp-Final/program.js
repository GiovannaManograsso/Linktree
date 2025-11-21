//Donar
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

// ENVIAR DATOS POR MAIL
const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
    let base = parseFloat(montoBase.value) || 0;
    let tipo = tipoDonacion.options[tipoDonacion.selectedIndex].text;
    let total = (base * parseFloat(tipoDonacion.value)).toFixed(2);

    // Pasar datos al formulario oculto
    document.getElementById("mailMontoBase").value = base;
    document.getElementById("mailTipoDonacion").value = tipo;
    document.getElementById("mailTotal").value = total;

    // Enviar
    document.getElementById("formEnviarMail").submit();
});

//Voluntario
document.getElementById("btnEnviarVoluntario").addEventListener("click", function () {
    
    // Tomar los valores del formulario
    document.getElementById("mailVolNombre").value = document.getElementById("volNombre").value;
    document.getElementById("mailVolEmail").value = document.getElementById("volEmail").value;
    document.getElementById("mailVolTelefono").value = document.getElementById("volTelefono").value;
    document.getElementById("mailVolDisponibilidad").value = document.getElementById("volDisponibilidad").value;
    document.getElementById("mailVolMotivo").value = document.getElementById("volMotivo").value;

    // Enviar formulario
    document.getElementById("formVoluntarioMail").submit();
});

