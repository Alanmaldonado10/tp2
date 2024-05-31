function calcularArea() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const baseMayor = parseFloat(document.getElementById('baseMayor').value);

    if (isNaN(base) || isNaN(altura) || isNaN(baseMayor)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const area = ((base + baseMayor) / 2) * altura;
    document.getElementById('resultado').textContent = `El área del terreno es: ${area.toFixed(2)} m²`;
}
