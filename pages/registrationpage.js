const BasePage = require("./base.page");
const routes = require("../config/routes");

class RegistrationPage extends BasePage {
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

  get streetField() {
    return $('[data-test="street"]');
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

  async openRegistrationPage() {
    await this.open(routes.register);
    await this.firstNameField.waitForDisplayed();
  }

  async fillRequiredNameFields(firstName, lastName) {
    await this.firstNameField.setValue(firstName);
    await this.lastNameField.setValue(lastName);
  }

  async selectCountry(country) {
    await this.countryField.waitForDisplayed();
    await this.countryField.selectByVisibleText(country);
  }

  async submitRegistration() {
    await this.registerButton.scrollIntoView({
      block: "center",
    });

    await this.registerButton.waitForClickable({
      timeout: 10000,
    });

    await this.registerButton.click();
  }

  async registerSuccess(user) {
    await this.fillRequiredNameFields(user.firstName, user.lastName);

    await this.dateField.setValue(user.dateOfBirth);
    await this.selectCountry(user.country);
    await this.postalCodeField.setValue(user.postalCode);
    await this.houseField.setValue(user.houseNumber);

    await browser.waitUntil(
      async () => {
        const street = await this.streetField.getValue();
        return street.length > 0;
      },
      {
        timeout: 10000,
        timeoutMsg: "The address was not filled automatically",
      }
    );

    await this.phoneField.setValue(user.phone);
    await this.emailField.setValue(user.email);
    await this.passwordField.setValue(user.password);

    await this.submitRegistration();
  }

  async registerFail(user) {
    await this.fillRequiredNameFields(user.firstName, user.lastName);
    await this.submitRegistration();
  }
}

module.exports = new RegistrationPage();
