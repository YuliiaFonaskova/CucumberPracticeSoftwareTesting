const BasePage = require("./base.page");
const routes = require("../config/routes");

class MainPage extends BasePage {
  get searchField() {
    return $('[data-test="search-query"]');
  }

  get searchButton() {
    return $('[data-test="search-submit"]');
  }



  get productNames() {
    return $$('[data-test="product-name"]');
  }

  

  async openHomePage() {
    await this.open(routes.home);
  }

  async searchProduct(productName) {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(productName);
    await this.searchButton.click();
  }

  
  async getFirstProductName() {
    const products = await this.productNames;

    return products[0].getText();
  }

  
}

module.exports = new MainPage();
