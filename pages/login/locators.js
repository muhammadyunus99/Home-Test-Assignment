export const locators = {
  menuOption: {
    android:
      'xpath://android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView',
    ios: "~tab bar option menu",
  },
  loginOption: "~menu item log in",
  logoutOption: "~menu item log out",
  confirmLogoutBtn: {
    android: 'xpath://android.widget.Button[@resource-id="android:id/button1"]',
    ios: 'xpath://XCUIElementTypeButton[@name="Log Out"]',
  },
  logoutConfirmationMsg: {
    android:
      'xpath://android.widget.TextView[@resource-id="android:id/alertTitle"]',
    ios: 'xpath://XCUIElementTypeStaticText[@name="You are successfully logged out."]',
  },
  okBtn: {
    android: 'xpath://android.widget.Button[@resource-id="android:id/button1"]',
    ios: "~OK",
  },
  usernameField: "~Username input field",
  passwordField: "~Password input field",
  loginButton: "~Login button",
  userNameErrorMessage: {
    android: 'xpath://android.widget.TextView[@text="Username is required"]',
    ios: "~Username-error-message",
  },
  passwordErrorMessage: {
    android: 'xpath://android.widget.TextView[@text="Password is required"]',
    ios: "~Password-error-message",
  },
  nonMatchingErrorMessage: {
    android:
      'xpath://android.widget.TextView[@text="Provided credentials do not match any user in this service."]',
    ios: "~generic-error-message",
  },
  lockedOutErrorMessage: {
    android:
      'xpath://android.widget.TextView[@text="Sorry, this user has been locked out."]',
    ios: "~generic-error-message",
  },
  goShoppingButton: "~Go Shopping button",
};
