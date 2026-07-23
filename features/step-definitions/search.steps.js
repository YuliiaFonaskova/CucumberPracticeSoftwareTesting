const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const MainPage = require("../../pages/mainpage");
const { existingProduct } = require("../../test-data/products");

When("the user searches for an existing product", async () => {
  await MainPage.searchProduct(existingProduct.name);
});

Then("the matching product should be displayed", async () => {
  await browser.waitUntil(
    async () => {
      const products = await MainPage.productNames;
      return products.length > 0;
    },
    {
      timeout: 10000,
      timeoutMsg: "Search results were not displayed",
    }
  );

  const products = await MainPage.productNames;
  const firstProductName = await MainPage.getFirstProductName();

  expect(products.length).to.be.greaterThan(0);
  expect(firstProductName).to.include(existingProduct.name);
});
