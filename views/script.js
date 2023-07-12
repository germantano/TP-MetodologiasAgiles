
const inputField = document.getElementById('inputField');
const keys = document.getElementsByClassName('key');

    // Añadir el evento click a cada botón del teclado
    Array.from(keys).forEach(key => {
      key.addEventListener('click', () => {
        // Obtener el texto de la tecla presionada
        const letter = key.textContent;

        // Concatenar la letra presionada al valor actual del campo de entrada
        inputField.value += letter;

        // Desactivar el botón de la tecla presionada
        key.disabled = true;
      });
    });

  