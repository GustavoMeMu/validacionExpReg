const contarCoincidencias = () => {
    const expresionRegularInput = document.getElementById('regex').value;
    const textoInput = document.getElementById('text').value;

    try {
        const expresionRegular = new RegExp(expresionRegularInput, 'g');
        const coincidencias = textoInput.match(expresionRegular);
        const cantidad = coincidencias ? coincidencias.length : 0;

        document.getElementById('result').textContent = `Resultado: ${cantidad} coincidencia${cantidad !== 1 ? 's' : ''}`;
    } catch (error) {
        document.getElementById('result').textContent = 'Expresión regular no válida';
    }
};