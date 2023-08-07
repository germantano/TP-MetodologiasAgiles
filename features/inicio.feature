Feature: Verificar que el usuario ingresó a la página principal

  Scenario: Verificar la URL de la página principal
    Given que el usuario ha ingresado a la página principal
    When el usuario navega por la página principal
    Then la URL de la página principal debería ser "http://localhost:3000/"