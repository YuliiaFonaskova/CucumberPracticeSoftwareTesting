Feature: User registration

  @registration @smoke
  Scenario: Successful registration
    Given the user opens the registration page
    When the user registers with valid data
    Then the user should be redirected to the login page

  @registration @regression
  Scenario: Unsuccessful registration
    Given the user opens the registration page
    When the user registers without required data
    Then the registration validation errors should be displayed