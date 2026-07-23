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

  get userMenu() {
    return $('[data-test="nav-menu"]');
  }

  get favoritesMenuItem() {
    return $('[data-test="nav-my-favorites"]');
  }

  async openHomePage() {
    await this.open(routes.home);
  }

  async searchProduct(productName) {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(productName);
    await this.searchButton.click();
  }

  async waitForSearchResults() {
    await browser.waitUntil(
      async () => {
        const products = await this.productNames;

        return products.length > 0;
      },
      {
        timeoutMsg: "Search results were not displayed",
      }
    );
  }

  async getFirstProductName() {
    const products = await this.productNames;

    return products[0].getText();
  }

  async openFavorites() {
    await this.userMenu.waitForClickable();
    await this.userMenu.click();

    await this.favoritesMenuItem.waitForClickable();
    await this.favoritesMenuItem.click();

    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();

        return currentUrl.includes("/account/favorites");
      },
      {
        timeoutMsg: "Favorites page was not opened",
      }
    );
  }
}

module.exports = new MainPage();
