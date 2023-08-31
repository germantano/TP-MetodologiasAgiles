Feature: Verificar que el usuario haya perdido la partida

  Scenario: usuario pierde la partida
    Given el jugador erra
    When usuario ingresa la letra incorrecta
    Then el usuario recibe mensaje perdiste