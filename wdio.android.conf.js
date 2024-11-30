exports.config = {
  runner: "local",
  logLevel: "debug",
  specs: ["./features/*.feature"],
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Pixel 5",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      "appium:app":
        "\\your\\path\\to\\resources\\MyRNDemoApp.app\\resources\\Android-MyDemoAppRN.1.3.0.build-244.apk",
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
