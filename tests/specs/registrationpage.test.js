const LoginPage = require("../../pages/loginpage");

const chai = require("chai");
const Registrationpage = require("../../pages/registrationpage");

const assert = chai.assert;
const expect = chai.expect;
chai.should();

describe("User signs up successfully", () => {
  beforeEach(async () => {
    await LoginPage.cleanSession();
  });

  it("Should redirect to login page after successful registration", async () => {
    await Registrationpage.registerSuccess();

    const url = await browser.getUrl();

    expect(url).to.include("/auth/login");
  });
});

describe("User signs up unsuccessfully", () => {
  beforeEach(async () => {
    await LoginPage.cleanSession();
  });

  it("Should show validation error messages", async () => {
    await Registrationpage.registerFail();
    const countryError = await Registrationpage.countryError.isDisplayed();

    countryError.should.be.true;

    const dateError = await Registrationpage.dateError.isDisplayed();

    dateError.should.be.true;
  });
});
