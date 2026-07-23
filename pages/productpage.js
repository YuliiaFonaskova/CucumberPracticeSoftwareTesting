const BasePage = require("./base.page");
const routes = require("../config/routes");

class ProductPage extends BasePage {
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

  get addToCartButton() {
    return $('[data-test="add-to-cart"]');
  }

  get cartQuantity() {
    return $('[data-test="cart-quantity"]');
  }

  async openFirstProduct() {
    await this.open(routes.home);

    await browser.waitUntil(
      async () => {
        const products = await browser.$$('[data-test="product-name"]');
        return products.length > 0;
      },
      {
        timeout: 20000,
        timeoutMsg: "Products were not displayed on the home page",
      },
    );

    const products = await browser.$$('[data-test="product-name"]');

    await products[0].waitForClickable({
      timeout: 10000,
    });

    await products[0].click();

    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes(routes.product);
      },
      {
        timeout: 10000,
        timeoutMsg: "Product page was not opened",
      },
    );

    await this.productTitle.waitForDisplayed({
      timeout: 10000,
    });
  }

  async addFavourite() {
    await this.favouriteButton.waitForClickable({
      timeout: 10000,
    });

    await this.favouriteButton.click();
  }

  async addToCart() {
    await this.addToCartButton.waitForClickable({
      timeout: 10000,
    });

    await this.addToCartButton.click();
  }

  async getConfirmationMessageText() {
    await this.confirmationMessage.waitForDisplayed({
      timeout: 10000,
    });

    return this.confirmationMessage.getText();
  }

  async getProductTitle() {
    await this.productTitle.waitForDisplayed({
      timeout: 10000,
    });

    return this.productTitle.getText();
  }

  async getProductPrice() {
    await this.productPrice.waitForDisplayed({
      timeout: 10000,
    });

    return this.productPrice.getText();
  }

  async getProductDescription() {
    await this.productDescription.waitForDisplayed({
      timeout: 10000,
    });

    return this.productDescription.getText();
  }

  async getCartQuantity() {
    await this.cartQuantity.waitForDisplayed({
      timeout: 15000,
    });

    return this.cartQuantity.getText();
  }
}

module.exports = new ProductPage();