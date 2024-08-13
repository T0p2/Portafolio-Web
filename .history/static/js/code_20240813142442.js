document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const formData = new FormData(this);

    fetch('https://my-backend.onrender.com/contact', { // Reemplaza con la URL de tu backend
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert('Formulario enviado correctamente');
    })
    .catch(error => {
        alert('Error al enviar el formulario: ' + error.message);
    });
});
