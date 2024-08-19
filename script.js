const tamVentana = document.getElementById("tamañoVentana");

tamVentana.innerHTML =
    `Tamaño de Ventana:
    Ancho: ${window.innerWidth}px.
    Altura: ${window.innerHeight}px.`

window.addEventListener("resize", () => {
    console.log("cambio")
    tamVentana.innerHTML =
        `Tamaño de Ventana:
        Ancho: ${window.innerWidth}px.
        Altura: ${window.innerHeight}px.`;
});