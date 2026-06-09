const LoginPage = require("./loginpage");
class RegistrationPage {
  get registerLink() {
    return $('[data-test="register-link"]');
  }

  get firstNameField() {
    return $('[data-test="first-name"]');
  }

  get lastNameField() {
    return $('[data-test="last-name"]');
  }

  get dateField() {
    return $('[data-test="dob"]');
  }

  get countryField() {
    return $('[data-test="country"]');
  }

  get postalCodeField() {
    return $('[data-test="postal_code"]');
  }

  get houseField() {
    return $('[data-test="house_number"]');
  }

  get polandOption() {
    return $('//*[contains(text(), "Poland")]');
  }

  get phoneField() {
    return $('[data-test="phone"]');
  }

  get emailField() {
    return $('[data-test="email"]');
  }

  get passwordField() {
    return $('[data-test="password"]');
  }

  get registerButton() {
    return $('[data-test="register-submit"]');
  }

  get dateError() {
    return $('[data-test="dob-error"]');
  }

  get countryError() {
    return $('[data-test="country-error"]');
  }

  async registerSuccess() {
    await LoginPage.openUrl();
    await LoginPage.loginButton.waitForDisplayed();
    await LoginPage.loginButton.waitForClickable();
    await LoginPage.loginButton.click();

    await this.registerLink.click();
    await this.firstNameField.setValue("User");
    await this.lastNameField.setValue("User");
    await browser.pause(2000);
    await this.dateField.setValue("2000-01-01");
    await this.countryField.click();
    await this.polandOption.scrollIntoView();
    await this.polandOption.click();

    await this.postalCodeField.setValue("30-704");
    await this.houseField.setValue("24");
    await browser.pause(2000);
    await this.phoneField.setValue("123456789");

    const timestamp = Date.now();
    const email = `user${timestamp}@test.com`;
    const password = `Reg!${timestamp}`;

    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);

    await this.registerButton.click();
    await browser.pause(2000);
  }

  async registerFail() {
    await LoginPage.openUrl();
    await LoginPage.loginButton.waitForDisplayed();
    await LoginPage.loginButton.waitForClickable();
    await LoginPage.loginButton.click();

    await this.registerLink.click();
    await this.firstNameField.setValue("User");
    await this.lastNameField.setValue("User");

    await this.registerButton.click();
    await browser.pause(2000);
  }
}
module.exports = new RegistrationPage();
