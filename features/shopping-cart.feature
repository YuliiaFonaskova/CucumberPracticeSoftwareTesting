Feature: Shopping cart

  @cart @smoke
  Scenario: Add product to cart
    Given the user opens the home page
    When the user adds a product to the cart
    Then a cart confirmation message should be displayed

  @cart @regression
  Scenario: Cart counter is updated after adding a product
    Given the user opens the home page
    When the user adds a product to the cart
    Then the cart counter should display 1