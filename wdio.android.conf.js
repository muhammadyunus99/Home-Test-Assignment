// https://www.loom.com/share/dc6f4b0d51854780a9c6ff2bbaeff694?sid=8a2d343a-9ac2-41e0-a119-e51c7152c755
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
        "C:\\Users\\mohamed\\Desktop\\myRNDemoapp-automation\\resources\\Android-MyDemoAppRN.1.3.0.build-244.apk",
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
