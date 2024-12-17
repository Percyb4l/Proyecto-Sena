// Validación de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita recargar la página

    console.log("Evento de inicio de sesión capturado"); // Depuración

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    console.log(`Usuario ingresado: ${username}, Contraseña ingresada: ${password}`); // Depuración

    // Verificar si la lista de usuarios existe
    if (!Array.isArray(usuarios)) {
        console.error("La variable 'usuarios' no está definida o no es un array.");
        return;
    }

    // Verificar si el usuario y contraseña coinciden
    const usuario = usuarios.find(user => user.username === username && user.password === password);

    if (usuario) {
        if (usuario.estado === "Inactivo") {
            alert("El usuario está inactivo. Contacte al administrador.");
        } else {
            alert(`Inicio de sesión exitoso. Bienvenido, ${usuario.nombre}`);
            window.location.href = "index.html"; // Redirige al índice principal
        }
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = "Usuario o contraseña incorrectos. Inténtelo de nuevo.";
        errorMessage.style.color = "red";
        console.error("Usuario o contraseña no coinciden."); // Depuración
    }
});






