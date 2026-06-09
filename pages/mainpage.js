const LoginPage = require("./loginpage");

class MainPage {
  get searchField() {
    return $('[data-test="search-query"]');
  }

  get searchButton() {
    return $('[data-test="search-submit"]');
  }

  get sortDropdown() {
    return $('[data-test="sort"]');
  }

  get productNames() {
    return $$('[data-test="product-name"]');
  }

  async searchProduct(productName) {
    await LoginPage.openUrl();
    await this.searchField.waitForDisplayed({ timeout: 10000 });
    await this.searchField.setValue(productName);
    await this.searchButton.click();
  }

  async sortProducts(sortOption) {
    await LoginPage.openUrl();
    await this.sortDropdown.waitForDisplayed({ timeout: 10000 });
    await this.sortDropdown.selectByVisibleText(sortOption);
  }
}

module.exports = new MainPage();
