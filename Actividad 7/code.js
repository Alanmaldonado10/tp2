document.addEventListener('DOMContentLoaded', () => {
    cargarUsuarios();
});

async function cargarUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await response.json();
        mostrarUsuarios(usuarios);
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
    }
}

function mostrarUsuarios(usuarios) {
    const contenedor = document.getElementById('usuarios');
    usuarios.forEach(usuario => {
        const usuarioDiv = document.createElement('div');
        usuarioDiv.classList.add('user');
        usuarioDiv.innerHTML = `
            <h2>${usuario.name}</h2>
            <p><strong>ID:</strong> ${usuario.id}</p>
            <p><strong>Nombre de usuario:</strong> ${usuario.username}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Sitio web:</strong> ${usuario.website}</p>
            <button onclick="verTareas(${usuario.id}, this)">Ver Tareas</button>
            <div class="tareas" id="tareas-${usuario.id}"></div>
        `;
        contenedor.appendChild(usuarioDiv);
    });
}

async function verTareas(userId, boton) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
        const tareas = await response.json();
        mostrarTareas(tareas, userId);
        boton.disabled = true;
    } catch (error) {
        console.error('Error al cargar tareas:', error);
    }
}

function mostrarTareas(tareas, userId) {
    const tareasDiv = document.getElementById(`tareas-${userId}`);
    tareasDiv.innerHTML = '';
    tareas.forEach(tarea => {
        const tareaDiv = document.createElement('div');
        tareaDiv.classList.add('tarea', tarea.completed ? 'completed' : 'not-completed');
        tareaDiv.textContent = tarea.title;
        tareasDiv.appendChild(tareaDiv);
    });
}
