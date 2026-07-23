const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const ProductPage = require("../../pages/productpage");

When("the user adds a product to the cart", async () => {
  await ProductPage.openFirstProduct();
  await ProductPage.addToCart();
});

Then("a cart confirmation message should be displayed", async () => {
  const message = await ProductPage.getConfirmationMessageText();

  expect(message).to.not.be.empty;
});

Then("the cart counter should display 1", async () => {
  const cartQuantity = await ProductPage.getCartQuantity();

  expect(cartQuantity).to.equal("1");
});
