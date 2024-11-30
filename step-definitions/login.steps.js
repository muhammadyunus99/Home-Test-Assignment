import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pages/login/login.page.js";
import LOGIN_USERS from "../testData/login.data.js";

Given("I launch the application", async () => {
  console.log("App launched successfully");
});

When("I click on the menu option", async () => {
  await LoginPage.clickMenuOption();
});

When("I click on the login option", async () => {
  await LoginPage.clickLoginOption();
});

When(
  "I enter username {string} and password {string}",
  async (userKey, password) => {
    const user = LOGIN_USERS[userKey];
    await LoginPage.login(user.username, password);
  }
);

When("I click on the login button", async () => {
  await LoginPage.submit();
});

Then(
  "I should see the Go Shopping button on the login screen and log out of the application",
  async () => {
    const goShoppingButtonPresent = await LoginPage.isGoShoppingButtonPresent();
    expect(goShoppingButtonPresent).toBe(true);

    await LoginPage.clickMenuOption();
    await LoginPage.clickLogoutOption();
    await LoginPage.clickConfirmLogoutBtn();
    await LoginPage.assertLogoutConfirmationMsg();
    await LoginPage.clickOkButton();
  }
);

Then("I should see an error message {string}", async (errorMessage) => {
  let actualErrorMsg;

  switch (errorMessage) {
    case "Username is required":
      actualErrorMsg = await LoginPage.getUsernameErrorMsg();
      break;
    case "Password is required":
      actualErrorMsg = await LoginPage.getPasswordErrorMsg();
      break;
    case "Provided credentials do not match any user in this service.":
      actualErrorMsg = await LoginPage.getNonMatchingErrorMsg();
      break;
    case "Sorry, this user has been locked out.":
      actualErrorMsg = await LoginPage.getLockedOutErrorMsg();
      break;
    default:
      throw new Error(`Unrecognized error message: ${errorMessage}`);
  }

  expect(actualErrorMsg).toContain(errorMessage);
});
