Feature: Verificar que el usuario haya perdido la partida

  Scenario: usuario pierde la partida
    Given contador de intentos restantes igual 1
    When usuario ingresa una letra incorrecta
    Then usuario pierde la partida, juego informa situación