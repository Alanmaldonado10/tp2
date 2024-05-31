document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var peso = parseFloat(document.getElementById('peso').value);
    var estatura = parseFloat(document.getElementById('estatura').value);

    if (peso <= 0 || estatura <= 0) {
        alert('Por favor, introduce un peso y una estatura válidos.');
        return;
    }

    var imc = peso / (estatura * estatura);

    var mensaje;
    if (imc < 18.5) {
        mensaje = 'Bajo peso';
    } else if (imc < 25) {
        mensaje = 'Normal';
    } else if (imc < 30) {
        mensaje = 'Sobrepeso';
    } else {
        mensaje = 'Obesidad';
    }

    document.getElementById('resultado').innerHTML = 'Tu IMC es: ' + imc.toFixed(2) + ' - ' + mensaje;
});
