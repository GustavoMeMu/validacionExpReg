const contarCoincidencias = () => {
    try {
        const cantidad = (document.getElementById('text').value.match(new RegExp(document.getElementById('regex').value, 'g')) || []).length;
        document.getElementById('result').textContent = `Resultado: ${cantidad} coincidencia${cantidad !== 1 ? 's' : ''}`;
    } catch {
        document.getElementById('result').textContent = 'Expresión regular no válida';
    }
};