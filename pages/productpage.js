const BasePage = require("./basepage");
const routes = require("../config/routes");

class ProductPage extends BasePage {
  get productNames() {
    return $$('[data-test="product-name"]');
  }

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

  get addToCartButton() {
    return $('[data-test="add-to-cart"]');
  }

  get confirmationMessage() {
    return $('[role="alert"]');
  }

  get cartQuantity() {
    return $('[data-test="cart-quantity"]');
  }

  async openFirstProduct() {
    await this.open(routes.home);

    const firstProduct = $('[data-test="product-name"]');

    await firstProduct.waitForDisplayed({
      timeout: 30000,
      timeoutMsg: "Products were not displayed on the home page",
    });

    await firstProduct.waitForClickable();
    await firstProduct.click();

    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();

        return currentUrl.includes("/product/");
      },
      {
        timeoutMsg: "Product page was not opened",
      }
    );

    await this.productTitle.waitForDisplayed({
      timeout: 20000,
      timeoutMsg: "Product details were not displayed",
    });
  }

  async addFavourite() {
    await this.favouriteButton.waitForClickable();
    await this.favouriteButton.click();
  }

  async addToCart() {
    await this.addToCartButton.waitForClickable();
    await this.addToCartButton.click();
  }

  async getConfirmationMessageText() {
    await this.confirmationMessage.waitForDisplayed();

    return this.confirmationMessage.getText();
  }

  async getProductTitle() {
    return this.productTitle.getText();
  }

  async getProductPrice() {
    return this.productPrice.getText();
  }

  async getProductDescription() {
    return this.productDescription.getText();
  }

  async getCartQuantity() {
    return this.cartQuantity.getText();
  }
}

module.exports = new ProductPage();
