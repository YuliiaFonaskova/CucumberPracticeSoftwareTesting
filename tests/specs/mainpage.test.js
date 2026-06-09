const LoginPage = require("../../pages/loginpage");
const Mainpage = require("../../pages/mainpage");

const chai = require("chai");
const expect = chai.expect;
chai.should();

describe("User searches for an exact product", () => {
  beforeEach(async () => {
    await LoginPage.cleanSession();
  });

  it("Should display the matching product", async () => {
    await Mainpage.searchProduct("Combination Pliers");

    await browser.pause(2000);

    const products = await Mainpage.productNames;
    expect(products.length).to.be.greaterThan(0);

    const firstProduct = await products[0].getText();
    expect(firstProduct).to.include("Combination Pliers");
  });
});

describe("User sorts products", () => {
  beforeEach(async () => {
    await LoginPage.cleanSession();
  });

  it("Should display products sorted by name A-Z", async () => {
    await Mainpage.sortProducts("Name (A - Z)");
    await browser.pause(2000);

    const products = await Mainpage.productNames;
    const firstName = await products[0].getText();
    const lastName = await products[products.length - 1].getText();

    expect(firstName < lastName).to.be.true;
  });
});
