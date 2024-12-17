// Datos iniciales
let inventario = [];

// Captura el formulario y tabla
const formInventario = document.getElementById('form-inventario');
const tablaInventario = document.getElementById('tabla-inventario').querySelector('tbody');

// Evento para registrar un activo
formInventario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreActivo = document.getElementById('nombre-activo').value;
    const estadoActivo = document.getElementById('estado-activo').value;

    const nuevoActivo = {
        id: Date.now(),
        nombre: nombreActivo,
        estado: estadoActivo
    };

    inventario.push(nuevoActivo); // Agrega el nuevo activo al array
    actualizarTablaInventario(); // Actualiza la tabla
    formInventario.reset(); // Limpia el formulario
});

// Función para actualizar la tabla
function actualizarTablaInventario() {
    tablaInventario.innerHTML = ''; // Limpia la tabla
    inventario.forEach(activo => {
        const fila = `
            <tr>
                <td>${activo.id}</td>
                <td>${activo.nombre}</td>
                <td>${activo.estado}</td>
                <td>
                    <button onclick="darDeBajaActivo(${activo.id})">Dar de Baja</button>
                </td>
            </tr>
        `;
        tablaInventario.innerHTML += fila;
    });
}

// Función para dar de baja un activo
function darDeBajaActivo(id) {
    const activo = inventario.find(activo => activo.id === id);
    if (activo) activo.estado = 'Inactivo';
    actualizarTablaInventario();
}
