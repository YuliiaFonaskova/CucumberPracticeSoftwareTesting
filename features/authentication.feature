Feature: User login

  @smoke @login
  Scenario: Successful login with valid credentials
    Given the user opens the login page
    When the user enters valid credentials
    Then the user should be logged in successfully

  @regression @login
  Scenario: Unsuccessful login with invalid credentials
    Given the user opens the login page
    When the user enters invalid credentials
    Then an authentication error message should be displayed