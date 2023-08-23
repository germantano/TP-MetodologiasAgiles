Feature: Verificar que el usuario haya perdido la partida

  Scenario: usuario pierde la partida
    Given el juego comienza con la palabra "auto"
    When usuario ingresa la letra incorrecta "e","i","q","w","r","p","l"
    Then el usuario recibe mensaje perdiste "Perdiste"