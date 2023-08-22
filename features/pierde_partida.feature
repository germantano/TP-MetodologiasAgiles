Feature: Verificar que el usuario haya perdido la partida

  Scenario: usuario pierde la partida
    Given el juego comienza con la palabra agilidad
    When usuario ingresa una letra incorrecta
    Then usuario pierde la partida, juego informa situación