document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const formData = new FormData(this);

    fetch('https://portafolio-web-backend-2.onrender.com/contact', { // Reemplaza con la URL de tu backend
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert('Formulario enviado correctamente');
        this.reset()
        
    })
    .catch(error => {
        alert('Error al enviar el formulario: ' + error.message);
    });
});
