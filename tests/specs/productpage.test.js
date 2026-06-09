const LoginPage = require("../../pages/loginpage");
const ProductPage = require("../../pages/productpage");

const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
chai.should();

describe("User views product details", () => {
  beforeEach(async () => {
    await LoginPage.cleanSession();
  });

  it("Should display product details page with product information", async () => {
    await ProductPage.openProduct();

    const url = await browser.getUrl();
    expect(url).to.include("/product/");

    await ProductPage.productTitle.waitForDisplayed();
    const title = await ProductPage.productTitle.getText();
    expect(title).to.not.be.empty;

    await ProductPage.productPrice.waitForDisplayed();
    const price = await ProductPage.productPrice.getText();
    expect(price).to.not.be.empty;

    await ProductPage.productDescription.waitForDisplayed();
    const description = await ProductPage.productDescription.getText();
    expect(description).to.not.be.empty;
  });
});

describe("User adds product to favourites", () => {
  beforeEach(async () => {
    await LoginPage.cleanSession();
  });

  it("Should see a confirmation message", async () => {
    await LoginPage.loginSuccess();
    await ProductPage.openProduct();
    await ProductPage.addFavourite();

    await ProductPage.confirmationMessage.waitForDisplayed({ timeout: 5000 });
    const confMessage = await ProductPage.confirmationMessage.isDisplayed();
    expect(confMessage).to.be.true;
  });
});

describe("User adds a product to the shopping cart", () => {
  beforeEach(async () => {
    await LoginPage.cleanSession();
  });

  it("Should show confirmation message", async () => {
    await ProductPage.openProduct();
    await ProductPage.addToCart();

    await ProductPage.toastMessage.waitForDisplayed({ timeout: 5000 });
    const text = await ProductPage.toastMessage.getText();
    expect(text).to.include("Product added to shopping cart");
  });

  it("Should update the cart counter after adding a product", async () => {
    await ProductPage.openProduct();
    await ProductPage.addToCart();

    await ProductPage.cartQuantity.waitForDisplayed({ timeout: 5000 });
    const cartCount = await ProductPage.cartQuantity.getText();
    expect(Number(cartCount)).to.equal(1);
  });
});
