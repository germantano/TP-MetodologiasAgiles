Feature: Verificar que el usuario haya ganado la partida

  Scenario: usuario gana la partida
    Given el juego comienza con la palabra "scrum"
    When usuario adivina la letra "s"
    and usuario adivina la letra "c"
    and usuario adivina la letra "r"
    and usuario adivina la letra "u"
    and usuario adivina la letra "m"
    Then el usuario recibe un mensaje tipo alerta "Felicitaciones! Haz ganado.."