const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

const LoginPage = require("../../pages/loginpage");
const { validUser, invalidUser } = require("../../test-data/users");
const { authenticationError } = require("../../test-data/messages");
const routes = require("../../config/routes");

Given("the user opens the login page", async () => {
  await LoginPage.openLoginPage();
});

When("the user enters valid credentials", async () => {
  await LoginPage.login(validUser.email, validUser.password);
});

When("the user enters invalid credentials", async () => {
  await LoginPage.login(invalidUser.email, invalidUser.password);
});

Then("the user should be logged in successfully", async () => {
  await LoginPage.waitForSuccessfulLogin();

  const currentUrl = await browser.getUrl();

  expect(currentUrl).to.include(routes.account);
});

Then("an authentication error message should be displayed", async () => {
  const errorMessage = await LoginPage.getErrorMessage();

  expect(errorMessage).to.equal(authenticationError);
});
