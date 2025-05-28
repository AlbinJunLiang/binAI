
const menuButton = document.getElementById("menu-button");
const sidePanel = document.getElementById("side-panel");
const menuIcon = document.getElementById("menu-icon");

menuButton.addEventListener("click", () => {
    const isOpen = sidePanel.classList.toggle("open");
    sidePanel.setAttribute("aria-hidden", !isOpen);

    // Cambiar icono según estado
    menuIcon.textContent = isOpen ? "close" : "menu_open";

    // Cambiar color del icono
    menuIcon.style.color = isOpen ? "black" : "white";

    // Accesibilidad
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );
});


