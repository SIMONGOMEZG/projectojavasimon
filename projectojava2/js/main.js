import { sumar, restar, multiplicar, dividir } from './operations.js';
import { validarEntrada, manejarError } from './utils.js';

document.getElementById('startButton').addEventListener('click', procesarSimulacion);

function procesarSimulacion() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacion = document.getElementById('operation').value;

    try {
        if (!validarEntrada(numero1) || !validarEntrada(numero2)) {
            throw new Error("Por favor, ingresa números válidos.");
        }

        let resultado;

        switch(operacion) {
            case 'sumar':
                resultado = sumar(numero1, numero2);
                break;
            case 'restar':
                resultado = restar(numero1, numero2);
                break;
            case 'multiplicar':
                resultado = multiplicar(numero1, numero2);
                break;
            case 'dividir':
                resultado = dividir(numero1, numero2);
                break;
            default:
                throw new Error("Operación no válida.");
        }

        mostrarResultado(`El resultado es: ${resultado}`);
    } catch (error) {
        manejarError(error.message);
    }
}

function mostrarResultado(mensaje) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = mensaje;
}

