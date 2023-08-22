Feature: Verificar que el usuario haya ganado la partida

  Scenario: usuario gana la partida
    Given el juego comienza con la palabra scrum
    When usuario adivina una letra correcta
    Then usuario gana la partida, juego informa situación