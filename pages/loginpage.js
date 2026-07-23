const BasePage = require("./basepage");
const routes = require("../config/routes");

class LoginPage extends BasePage {
  get emailField() {
    return $('[data-test="email"]');
  }

  get passwordField() {
    return $('[data-test="password"]');
  }

  get submitButton() {
    return $('[data-test="login-submit"]');
  }

  get errorMessage() {
    return $('[data-test="login-error"]');
  }

  async openLoginPage() {
    await this.open(routes.login);
    await this.emailField.waitForDisplayed();
  }

  async login(email, password) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);

    await this.submitButton.waitForClickable();
    await this.submitButton.click();
  }

  async waitForSuccessfulLogin() {
    await browser.waitUntil(
      async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes(routes.account);
      },
      {
        timeout: 20000,
        timeoutMsg: "The user was not logged in successfully",
      }
    );
  }

  async getErrorMessage() {
    await this.errorMessage.waitForDisplayed();
    return this.errorMessage.getText();
  }
}

module.exports = new LoginPage();
