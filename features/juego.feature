Feature: Iniciar Partida
  Saber si el usuario va a jugar

  Scenario: El usuario va a jugar 
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"


