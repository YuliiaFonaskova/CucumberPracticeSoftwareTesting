Feature: Product functionality

  @product @smoke
  Scenario: Search for an existing product
    Given the user opens the home page
    When the user searches for an existing product
    Then the matching product should be displayed

  @product @regression
  Scenario: View product details
    Given the user opens the home page
    When the user opens the first available product
    Then the product details should be displayed

  @product @regression
  Scenario: Add product to favourites
    Given the user is logged in
    And the user opens the first available product
    When the user adds the product to favourites
    Then the product should be added to favourites successfully