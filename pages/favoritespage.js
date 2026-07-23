const BasePage = require("./base.page");

class FavoritesPage extends BasePage {
  get favoriteProductTitles() {
    return $$('[data-test="product-name"]');
  }

  async isProductDisplayed(productName) {
    await browser.waitUntil(
      async () => {
        const products = await this.favoriteProductTitles;

        for (const product of products) {
          const productTitle = await product.getText();

          if (productTitle.trim() === productName.trim()) {
            return true;
          }
        }

        return false;
      },
      {
        timeout: 20000,
        timeoutMsg: `Product "${productName}" was not displayed in favorites`,
      }
    );

    return true;
  }
}

module.exports = new FavoritesPage();
