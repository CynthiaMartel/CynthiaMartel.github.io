document.getElementById("btn-masinfo").addEventListener("click", function() {
    var infoAdicional = document.getElementById("mas-info-adicional");

    // Comprobamos si el contenedor está oculto o visible
    if (infoAdicional.style.display === "none") {
        infoAdicional.style.display = "block"; // Muestra la información adicional
    } else {
        infoAdicional.style.display = "none"; // Oculta la información adicional
    }
});