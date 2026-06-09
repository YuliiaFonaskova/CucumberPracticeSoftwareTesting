const LoginPage = require("../../pages/loginpage");
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
chai.should();

describe("User signs in successfully", () => {
  beforeEach(async () => {
    await LoginPage.cleanSession();
  });

  it("Should login with valid values", async () => {
    await LoginPage.loginSuccess();

    const url = await browser.getUrl();

    expect(url).to.include("/account");
  });
});

describe("User signs in unsuccessfully", () => {
  beforeEach(async () => {
    await LoginPage.cleanSession();
  });

  it("Should show authentication error message", async () => {
    await LoginPage.loginFail();

    const isDisplayed = await LoginPage.errorMessage.isDisplayed();
    assert.isTrue(isDisplayed);

    const errorText = await LoginPage.errorMessage.getText();
    expect(errorText).to.include("Invalid email or password");
  });
});
