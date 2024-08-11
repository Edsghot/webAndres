function descargarCV() {
    var link = document.createElement('a');
    link.href = 'assets/mi-cv.pdf';
    link.download = 'mi-cv.pdf';
    link.click();
}

function mostrarMensaje() {
    // Cambiar el display del div a 'block' para mostrarlo
    document.getElementById('mensaje-enviado').style.display = 'block';
}