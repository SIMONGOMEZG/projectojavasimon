export function validarEntrada(numero) {
    return typeof numero === 'number' && !isNaN(numero);
}

export function manejarError(mensaje) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = mensaje;
    resultContainer.style.color = '#d32f2f';
}
