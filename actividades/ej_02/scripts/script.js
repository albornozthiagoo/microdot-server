function led_toggle(led){
    fetch(`/led/toggle/${led}`);
}

// Solo agregamos listeners a los botones de LED individuales
document.addEventListener('DOMContentLoaded', function () {
    // Botones de LED individuales (asumiendo tienen clase "led-button")
    document.querySelectorAll(".led-button").forEach(button => {
        button.addEventListener("click", (e) => {
            led_toggle(e.target.dataset.ledId); // Mejor usar data-led-id
        });
    });

    // Actualiza solo el preview cuando se mueve el slider
    document.getElementById('redRange').addEventListener('input', updateRGBPreview);
    document.getElementById('greenRange').addEventListener('input', updateRGBPreview);
    document.getElementById('blueRange').addEventListener('input', updateRGBPreview);

    // Si tienes botón de aplicar color global, agrega el listener aquí:
    const applyBtn = document.getElementById('apply-global-rgb');
    if (applyBtn) {
        applyBtn.addEventListener('click', controlRGB);
    }

    updateRGBPreview();
});

function controlRGB() {
    const r = document.getElementById('redRange').value;
    const g = document.getElementById('greenRange').value;
    const b = document.getElementById('blueRange').value;
    fetch(`/rgbled/global/${r}/${g}/${b}`);
}

function updateRGBPreview() {
    const r = document.getElementById('redRange').value;
    const g = document.getElementById('greenRange').value;
    const b = document.getElementById('blueRange').value;
    document.getElementById('redValue').innerText = r;
    document.getElementById('greenValue').innerText = g;
    document.getElementById('blueValue').innerText = b;
    // ¡El valor debe ir en backticks!
    document.getElementById('rgb-global-preview').style.background = `rgb(${r},${g},${b})`;
}
