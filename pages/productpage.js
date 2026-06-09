const LoginPage = require("./loginpage");
class ProductPage {
  get productTitle() {
    return $('[data-test="product-name"]');
  }

  get productDescription() {
    return $('[data-test="product-description"]');
  }

  get productPrice() {
    return $('[data-test="unit-price"]');
  }

  get favouriteButton() {
    return $('[data-test="add-to-favorites"]');
  }

  get confirmationMessage() {
    return $('[role="alert"]');
  }

  get addButton() {
    return $('[data-test="add-to-cart"]');
  }

  get toastMessage() {
    return $(".toast-success");
  }

  get cartQuantity() {
    return $('[data-test="cart-quantity"]');
  }

  async openProduct() {
    await LoginPage.openUrl();
    await this.productTitle.waitForDisplayed({ timeout: 10000 });
    await this.productTitle.click();
  }

  async addFavourite() {
    await this.productTitle.waitForDisplayed({ timeout: 10000 });
    await this.productTitle.click();
    await this.favouriteButton.waitForDisplayed({ timeout: 5000 });
    await this.favouriteButton.click();
  }

  async addToCart() {
    await this.productTitle.waitForDisplayed({ timeout: 10000 });
    await this.productTitle.click();
    await this.addButton.waitForDisplayed({ timeout: 5000 });
    await this.addButton.click();
  }
}

module.exports = new ProductPage();
