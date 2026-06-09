class LoginPage {
  get loginButton() {
    return $('[data-test="nav-sign-in"]');
  }

  get emailField() {
    return $('[data-test="email"]');
  }

  get passwordField() {
    return $('[data-test="password"]');
  }

  get btnSubmit() {
    return $('[data-test="login-submit"]');
  }

  get errorMessage() {
    return $('[data-test="login-error"]');
  }

  async openUrl() {
    await browser.url("/");
  }

  async loginSuccess() {
    await this.openUrl();
    await this.loginButton.waitForDisplayed();
    await this.loginButton.waitForClickable();
    await this.loginButton.click();
    await this.emailField.waitForDisplayed();
    await this.emailField.setValue("customer@practicesoftwaretesting.com");
    await this.passwordField.setValue("welcome01");
    await this.btnSubmit.click();
    await browser.pause(2000);
  }

  async loginFail() {
    await this.openUrl();
    await this.loginButton.waitForDisplayed();
    await this.loginButton.waitForClickable();
    await this.loginButton.click();
    await this.emailField.waitForDisplayed();
    await this.emailField.setValue("fail@practicesoftwaretesting.com");
    await this.passwordField.setValue("fail0123");
    await this.btnSubmit.click();
    await browser.pause(2000);
  }

  async cleanSession() {
    await browser.reloadSession();
    await browser.url("/");
    await browser.execute(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
    await browser.deleteCookies();
  }
}

module.exports = new LoginPage();
