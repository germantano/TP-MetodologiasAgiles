Feature: Verificar que el usuario haya perdido la partida

  Scenario: usuario pierde la partida
    Given el juego comienza con la palabra "auto"
    When usuario ingresa la letra incorrecta "e"
    and usuario ingresa la letra incorrecta "i"
    and usuario ingresa la letra incorrecta "q"
    and usuario ingresa la letra incorrecta "w"
    and usuario ingresa la letra incorrecta "r"
    and usuario ingresa la letra incorrecta "p"
    and usuario ingresa la letra incorrecta "l"
    Then el usuario recibe un mensaje tipo alerta "Perdiste"