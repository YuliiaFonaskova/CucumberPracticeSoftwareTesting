const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const MainPage = require("../../pages/mainpage");
const ProductPage = require("../../pages/productpage");
const FavoritesPage = require("../../pages/favoritespage");
const { existingProduct } = require("../../test-data/products");

let selectedProductName;

When("the user searches for an existing product", async () => {
  await MainPage.searchProduct(existingProduct.name);
});

Then("the matching product should be displayed", async () => {
  await MainPage.waitForSearchResults();

  const firstProductName = await MainPage.getFirstProductName();

  expect(firstProductName).to.include(existingProduct.name);
});

When("the user opens the first available product", async () => {
  await ProductPage.openFirstProduct();
});

Then("the product details should be displayed", async () => {
  const title = await ProductPage.getProductTitle();
  const price = await ProductPage.getProductPrice();
  const description = await ProductPage.getProductDescription();

  expect(title).to.not.be.empty;
  expect(price).to.not.be.empty;
  expect(description).to.not.be.empty;
});

When("the user adds the product to favourites", async () => {
  selectedProductName = await ProductPage.getProductTitle();

  await ProductPage.addFavourite();
});

Then("the product should be added to favourites successfully", async () => {
  await MainPage.openFavorites();

  const isProductDisplayed = await FavoritesPage.isProductDisplayed(selectedProductName);

  expect(isProductDisplayed).to.equal(true);
});
