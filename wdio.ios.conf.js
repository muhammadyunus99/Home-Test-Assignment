exports.config = {
  runner: "local",
  logLevel: "debug",
  specs: ["./features/*.feature"],
  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone 16",
      "appium:platformVersion": "18.1",
      "appium:automationName": "XCUITest",
      "appium:app":
        "/Users/mohamed.mohamed6/Desktop/mydemoapp-automation/resources/MyRNDemoApp.app",
    },
  ],
  framework: "cucumber",
  cucumberOpts: {
    require: ["./step-definitions/*.steps.js"],
    timeout: 60000, // 60 seconds
  },
  reporters: ["spec", ["allure", { outputDir: "allure-results" }]],
  services: ["appium"],
  outputDir: "./reports",
};
