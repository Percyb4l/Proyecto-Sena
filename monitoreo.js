// Datos iniciales
let puntosRed = [];

// Captura el formulario y tabla
const formMonitoreo = document.getElementById('form-monitoreo');
const tablaMonitoreo = document.getElementById('tabla-monitoreo').querySelector('tbody');

// Evento para asociar un punto de red
formMonitoreo.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita la recarga de la página

    const nombrePunto = document.getElementById('nombre-punto').value;
    const estadoPunto = document.getElementById('estado-punto').value;

    const nuevoPunto = {
        id: Date.now(),
        nombre: nombrePunto,
        estado: estadoPunto
    };

    puntosRed.push(nuevoPunto); // Agrega el nuevo punto al array
    actualizarTablaMonitoreo(); // Actualiza la tabla
    formMonitoreo.reset(); // Limpia el formulario
});

// Función para actualizar la tabla
function actualizarTablaMonitoreo() {
    tablaMonitoreo.innerHTML = ''; // Limpia la tabla
    puntosRed.forEach(punto => {
        const fila = `
            <tr>
                <td>${punto.id}</td>
                <td>${punto.nombre}</td>
                <td>${punto.estado}</td>
                <td>
                    <button onclick="eliminarPunto(${punto.id})">Eliminar</button>
                </td>
            </tr>
        `;
        tablaMonitoreo.innerHTML += fila;
    });
}

// Función para eliminar un punto
function eliminarPunto(id) {
    puntosRed = puntosRed.filter(punto => punto.id !== id);
    actualizarTablaMonitoreo();
}
