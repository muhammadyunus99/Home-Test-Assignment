import { getElement } from "../../helpers/helpers.js";
import { locators } from "./locators.js";

class LoginPage {
  // Getters for UI elements
  get menuOption() {
    return getElement(
      driver,
      locators.menuOption.android,
      locators.menuOption.ios
    );
  }

  get loginOption() {
    return getElement(driver, locators.loginOption);
  }

  get logoutOption() {
    return getElement(driver, locators.logoutOption);
  }

  get confirmLogoutBtn() {
    return getElement(
      driver,
      locators.confirmLogoutBtn.android,
      locators.confirmLogoutBtn.ios
    );
  }

  get logoutConfirmationMsg() {
    return getElement(
      driver,
      locators.logoutConfirmationMsg.android,
      locators.logoutConfirmationMsg.ios
    );
  }

  get okBtn() {
    return getElement(driver, locators.okBtn.android, locators.okBtn.ios);
  }

  get usernameField() {
    return getElement(driver, locators.usernameField);
  }

  get passwordField() {
    return getElement(driver, locators.passwordField);
  }

  get loginButton() {
    return getElement(driver, locators.loginButton);
  }

  get userNameErrorMessage() {
    return getElement(
      driver,
      locators.userNameErrorMessage.android,
      locators.userNameErrorMessage.ios
    );
  }

  get passwordErrorMessage() {
    return getElement(
      driver,
      locators.passwordErrorMessage.android,
      locators.passwordErrorMessage.ios
    );
  }

  get nonMatchingErrorMessage() {
    return getElement(
      driver,
      locators.nonMatchingErrorMessage.android,
      locators.nonMatchingErrorMessage.ios
    );
  }

  get lockedOutErrorMessage() {
    return getElement(
      driver,
      locators.lockedOutErrorMessage.android,
      locators.lockedOutErrorMessage.ios
    );
  }

  get goShoppingButton() {
    return getElement(driver, locators.goShoppingButton);
  }

  // Actions
  async clickMenuOption() {
    await this.menuOption.click();
  }

  async clickLoginOption() {
    await this.loginOption.click();
  }

  async login(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
  }

  async submit() {
    await this.loginButton.click();
  }

  // Methods to get error messages
  async getUsernameErrorMsg() {
    return await this.userNameErrorMessage.getText();
  }

  async getPasswordErrorMsg() {
    return await this.passwordErrorMessage.getText();
  }

  async getNonMatchingErrorMsg() {
    return await this.nonMatchingErrorMessage.getText();
  }

  async getLockedOutErrorMsg() {
    return await this.lockedOutErrorMessage.getText();
  }

  // Check if "Go Shopping" button is present after clicking the log in option again
  async isGoShoppingButtonPresent() {
    await this.clickMenuOption();
    await this.clickLoginOption();
    return await this.goShoppingButton.isDisplayed();
  }

  async clickLogoutOption() {
    await this.logoutOption.click();
  }

  async clickConfirmLogoutBtn() {
    await this.confirmLogoutBtn.click();
  }

  async clickOkButton() {
    await this.okBtn.click();
  }

  async assertLogoutConfirmationMsg() {
    const message = await this.logoutConfirmationMsg.getText();
    expect(message).toBe("You are successfully logged out.");
  }
}

export default new LoginPage();
