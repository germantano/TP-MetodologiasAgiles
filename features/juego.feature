Feature: Is it game initiated?
  para saber si está jugando

  Scenario: No está jugando
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"


