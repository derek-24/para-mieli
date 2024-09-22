function openModal(imageSrc, iframeSrc) {
    var modal = document.getElementById("modal");

    // Mostrar el modal con animación
    modal.classList.add("show");

    var modalImage = document.getElementById("modal-image");
    modal.style.display = "flex";
    modalImage.src = imageSrc;

    var modalIframe = document.getElementById("modal-iframe");
    var iframeSrc = 'https://open.spotify.com/embed/track/' + iframeSrc + '?utm_source=generator';
    modalIframe.src = iframeSrc;

    //Si imgSrc tiene el 9 en la cadena de texto, se cambia el tamaño del modal
    if (imageSrc == "imgs/eli/9.jpeg"
        || imageSrc == "imgs/eli/6.jpeg"
        || imageSrc == "imgs/eli/7.jpeg"
        || imageSrc == "imgs/eli/8.jpeg"
        || imageSrc == "imgs/eli/3.jpeg") {
        var modalImage = document.getElementById("modal-image");
        modalImage.style.objectFit = "cover";
    } else {
        var modalImage = document.getElementById("modal-image");
        modalImage.style.objectFit = "none";
    }
}

function closeModal() {
    var modal = document.getElementById("modal");

    // Ejecutar la animación de cierre agregando una clase
    modal.classList.add("closing");

    // Después de 500 ms (duración de la animación), remover el modal y ocultarlo
    setTimeout(function () {
        modal.classList.remove("show"); // Remover la clase que muestra el modal
        modal.classList.remove("closing"); // Remover la clase de cierre
        modal.style.display = "none"; // Finalmente, ocultar el modal
    }, 500); // Duración igual a la animación de cierre
}