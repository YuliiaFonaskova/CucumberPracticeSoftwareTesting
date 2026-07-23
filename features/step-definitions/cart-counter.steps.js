const { Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const ProductPage = require("../../pages/productpage");

Then("the cart counter should display 1", async () => {
  const cartQuantity = await ProductPage.getCartQuantity();

  expect(cartQuantity).to.equal("1");
});
