const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const ProductPage = require("../../pages/productpage");
const routes = require("../../config/routes");

When("the user opens the first available product", async () => {
  await ProductPage.openFirstProduct();
});

Then("the product details should be displayed", async () => {
  const currentUrl = await browser.getUrl();
  const title = await ProductPage.getProductTitle();
  const price = await ProductPage.getProductPrice();
  const description = await ProductPage.getProductDescription();

  expect(currentUrl).to.include(routes.product);
  expect(title).to.not.be.empty;
  expect(price).to.not.be.empty;
  expect(description).to.not.be.empty;
});
