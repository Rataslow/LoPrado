function ir() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const poblador = document.getElementById('poblador').value;

    fetch('bd/usuarios_db.txt')
        .then(response => response.text())
        .then(data => {
            const users = data.split('\n'); // Dividir el archivo en líneas
            let userFound = false;

            // Verificar los datos del formulario con los usuarios de la base de datos
            for (let user of users) {
                const userData = user.split(',');
                const usuario = userData[0];
                const pass = userData[1];
                const pobladorDB = userData[2];
                const nombre = userData[3];
                const rut = userData[4];
                const email = userData[5];
                const direccion = userData[6];
                const comuna = userData[7];
                const edad = userData[8];

                if (login === usuario && password === pass && poblador === pobladorDB) {
                    // Guardar los datos del usuario en sessionStorage
                    sessionStorage.setItem('nombre', nombre);
                    sessionStorage.setItem('rut', rut);
                    sessionStorage.setItem('email', email);
                    sessionStorage.setItem('direccion', direccion);
                    sessionStorage.setItem('comuna', comuna);
                    sessionStorage.setItem('edad', edad);

                    userFound = true;
                    break;
                }
            }

            // Si el usuario es encontrado, redirige, si no muestra alerta
            if (userFound) {
                alert("¡Bienvenido! Ingresando a realizar una denuncia.");
                window.location = "Denuncia.html";  // Redirigir a la página de denuncia
            } else {
                alert("Datos incorrectos. Por favor, ingrese los datos correctamente.");
            }
        })
        .catch(error => console.error('Error al leer el archivo de usuarios:', error));
}
