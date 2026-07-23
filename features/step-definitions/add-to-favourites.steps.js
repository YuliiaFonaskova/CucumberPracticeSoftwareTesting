const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const ProductPage = require("../../pages/productpage");
const { favoriteAdded, favoriteAlreadyAdded } = require("../../test-data/messages");

When("the user adds the product to favourites", async () => {
  await ProductPage.addFavourite();
});

Then("the product should be added to favourites successfully", async () => {
  const message = await ProductPage.getConfirmationMessageText();

  expect([favoriteAdded, favoriteAlreadyAdded]).to.include(message);
});
