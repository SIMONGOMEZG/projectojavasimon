function calcularCostoTotal() {
    let product1 = parseFloat(document.getElementById('product1').value);
    let product2 = parseFloat(document.getElementById('product2').value);
    let costoTotal = product1 + product2;
    document.getElementById('costoTotal').textContent = `El costo total es: $${costoTotal.toFixed(2)}`;
}

function calcularPagosCuotas() {
    let monto = parseFloat(document.getElementById('monto').value);
    let cuotas = parseInt(document.getElementById('cuotas').value);
    let pagoCuota = monto / cuotas;
    document.getElementById('pagoCuota').textContent = `Cada cuota es de: $${pagoCuota.toFixed(2)}`;
}

function calcularValorFinal() {
    let precio = parseFloat(document.getElementById('precio').value);
    let impuesto = parseFloat(document.getElementById('impuesto').value) / 100;
    let descuento = parseFloat(document.getElementById('descuento').value) / 100;
    let valorFinal = precio + (precio * impuesto) - (precio * descuento);
    document.getElementById('valorFinal').textContent = `El valor final es: $${valorFinal.toFixed(2)}`;
}

function calcularTiempoEspera() {
    let turnos = parseInt(document.getElementById('turnos').value);
    let tiempo = parseFloat(document.getElementById('tiempo').value);
    let tiempoEspera = tiempo / turnos;
    document.getElementById('tiempoEspera').textContent = `El tiempo de espera promedio es: ${tiempoEspera.toFixed(2)} minutos`;
}

function calcularEdadPromedio() {
    let edad1 = parseInt(document.getElementById('edad1').value);
    let edad2 = parseInt(document.getElementById('edad2').value);
    let edad3 = parseInt(document.getElementById('edad3').value);
    let edadPromedio = (edad1 + edad2 + edad3) / 3;
    document.getElementById('edadPromedio').textContent = `La edad promedio es: ${edadPromedio.toFixed(2)} años`;
}

function calcularNotaFinal() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let notaFinal = (nota1 + nota2 + nota3) / 3;
    document.getElementById('notaFinal').textContent = `La nota final es: ${notaFinal.toFixed(2)}`;
}
