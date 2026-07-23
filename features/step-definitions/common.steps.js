const { Given } = require("@wdio/cucumber-framework");

const MainPage = require("../../pages/mainpage");
const LoginPage = require("../../pages/loginpage");
const { validUser } = require("../../test-data/users");

Given("the user opens the home page", async () => {
  await MainPage.openHomePage();
});

Given("the user is logged in", async () => {
  await LoginPage.openLoginPage();
  await LoginPage.login(validUser.email, validUser.password);
  await LoginPage.waitForSuccessfulLogin();
});
