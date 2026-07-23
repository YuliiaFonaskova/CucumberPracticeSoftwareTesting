const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const RegistrationPage = require("../../pages/registrationpage");
const { registrationUser } = require("../../test-data/users");
const routes = require("../../config/routes");

Given("the user opens the registration page", async () => {
  await RegistrationPage.openRegistrationPage();
});

When("the user registers with valid data", async () => {
  await RegistrationPage.registerSuccess(registrationUser);
});

Then("the user should be redirected to the login page", async () => {
  await browser.waitUntil(
    async () => {
      const currentUrl = await browser.getUrl();
      return currentUrl.includes(routes.login);
    },
    {
      timeout: 20000,
      timeoutMsg: "The user was not redirected to the login page",
    }
  );

  const currentUrl = await browser.getUrl();

  expect(currentUrl).to.include(routes.login);
});

When("the user registers without required data", async () => {
  await RegistrationPage.registerFail(registrationUser);
});

Then("the registration validation errors should be displayed", async () => {
  await RegistrationPage.dateError.waitForDisplayed({
    timeout: 10000,
  });

  await RegistrationPage.countryError.waitForDisplayed({
    timeout: 10000,
  });

  expect(await RegistrationPage.dateError.isDisplayed()).to.equal(true);
  expect(await RegistrationPage.countryError.isDisplayed()).to.equal(true);
});
