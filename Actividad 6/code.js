function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseInt(document.getElementById('altura').value);
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje');

    let errores = [];

    // Validaciones
    if (!nombre) {
        errores.push("El nombre no puede estar vacío.");
    }
    if (nombre.length > 50) {
        errores.push("El nombre no puede tener más de 50 caracteres.");
    }
    if (!apellido) {
        errores.push("El apellido no puede estar vacío.");
    }
    if (apellido.length > 50) {
        errores.push("El apellido no puede tener más de 50 caracteres.");
    }
    if (isNaN(edad) || edad < 0) {
        errores.push("La edad no puede ser negativa.");
    }
    if (edad < 18) {
        errores.push("Debe ser mayor de edad.");
    }
    if (isNaN(altura) || altura < 0 || altura > 230) {
        errores.push("La altura debe ser un valor entre 0 y 230 cm.");
    }
    if (!email) {
        errores.push("El correo electrónico no puede estar vacío.");
    }
    if (!email.includes('@')) {
        errores.push("El correo electrónico debe incluir '@'.");
    }

    // Mostrar mensaje
    if (errores.length > 0) {
        mensaje.style.color = 'red';
        mensaje.innerHTML = errores.join('<br>');
    } else {
        mensaje.style.color = 'green';
        mensaje.textContent = "Validación exitosa. Todos los datos son correctos.";
    }
}


