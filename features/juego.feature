Feature: Verificar que el usuario ingresó al juego

  Scenario: Verificar la URL de la página principal
    Given que el usuario ha ingresado al juego
    When el usuario juega al juego
    Then la URL del juego debería ser "https://app-ahorcado.onrender.com/game.html"