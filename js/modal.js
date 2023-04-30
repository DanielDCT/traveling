// Obtener todos los elementos con la clase "modal"
const modals = document.querySelectorAll(".modal");

// Obtener todos los botones que abren los modales
const btns = document.querySelectorAll("[id^='myBtn']");

// Obtener todos los botones que cierran los modales
const closeBtns = document.querySelectorAll("[class^='close']");


// Recorrer cada modal y agregar un listener de clic al modal
modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      // Si se hace clic en el modal, cerrarlo
        if (event.target === modal) {
        modal.style.display = "none";
        }
    });
});

// Para cada botón que abre un modal, agregar un evento click
btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
    modals[index].style.display = "block";
    });
});

// Para cada botón que cierra un modal, agregar un evento click
closeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
    modals[index].style.display = "none";
    });
});

