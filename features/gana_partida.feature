Feature: Verificar que el usuario haya ganado la partida

  Scenario: usuario gana la partida
    Given última letra para adivinar la palabra
    When usuario selecciona la última letra correcta
    Then usuario gana la partida, juego informa situación