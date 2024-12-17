// Datos iniciales con un usuario predeterminado
let usuarios = [
    { id: 1, nombre: "Jhonnier Becerra", rol: "Administrador", estado: "Activo", username: "Jhonier034", password: "12345" }
];

// Captura el formulario y tabla
const formUsuarios = document.getElementById('form-usuarios');
const tablaUsuarios = document.getElementById('tabla-usuarios').querySelector('tbody');

// Evento para registrar un usuario
formUsuarios.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreUsuario = document.getElementById('nombre-usuario').value;
    const rolUsuario = document.getElementById('rol-usuario').value;
    const usernameUsuario = document.getElementById('username-usuario').value;
    const passwordUsuario = document.getElementById('password-usuario').value;

    const nuevoUsuario = {
        id: Date.now(),
        nombre: nombreUsuario,
        rol: rolUsuario,
        estado: "Activo",
        username: usernameUsuario,
        password: passwordUsuario
    };

    usuarios.push(nuevoUsuario); // Agrega el nuevo usuario al array
    actualizarTablaUsuarios(); // Actualiza la tabla
    formUsuarios.reset(); // Limpia el formulario
});

// Función para actualizar la tabla
function actualizarTablaUsuarios() {
    tablaUsuarios.innerHTML = ''; // Limpia la tabla
    usuarios.forEach(usuario => {
        const fila = `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.username}</td>
                <td>${usuario.rol}</td>
                <td>${usuario.estado}</td>
                <td>
                    <button onclick="cambiarEstadoUsuario(${usuario.id})">Cambiar Estado</button>
                </td>
            </tr>
        `;
        tablaUsuarios.innerHTML += fila;
    });
}

// Función para cambiar el estado de un usuario
function cambiarEstadoUsuario(id) {
    const usuario = usuarios.find(usuario => usuario.id === id);
    if (usuario) usuario.estado = usuario.estado === "Activo" ? "Inactivo" : "Activo";
    actualizarTablaUsuarios();
}

