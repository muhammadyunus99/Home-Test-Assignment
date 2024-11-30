# MyRNDemoApp Automation

This repository contains the automation scripts for the MyRNDemoApp project.

## Table of Contents

- [Overview](#overview)
- [iOS Test Run Video](https://www.loom.com/share/27109aef53214eb0b23bfa84fb238df2?sid=daf543ba-f538-4a35-9d78-9cc07bb6ac5e)
- [Android Test Run Video](https://www.loom.com/share/dc6f4b0d51854780a9c6ff2bbaeff694?sid=8a2d343a-9ac2-41e0-a119-e51c7152c755)
- [Structure](#structure)
- [Running Tests](#running-tests)
  - [Android](#android)
  - [iOS](#ios)

## Overview

This project automates tests for the MyRNDemoApp using Appium, WebDriverIO, and JavaScript. It aims to streamline the testing process, ensuring the app functions correctly on both Android and iOS platforms.

## Running Tests

### Android

To run tests on an Android device, follow these steps:

1.  Ensure you have Java Development Kit (JDK) installed.
2.  Install Android Studio and set up an Android Virtual Device (AVD).
3.  Start the AVD or connect a physical device.
4.  Run the following command to start the Appium server:

        ```bash
        appium
        ```

5.  Execute the test scripts using:

        ```bash
        npm run test:android
        ```

6.  Generate a report using:

        ```bash
        npm run report
        ```

### iOS

To run tests on an iOS device, follow these steps:

1.  Ensure you have Xcode installed.
2.  Start the iOS simulator or connect a physical device.
3.  Run the following command to start the Appium server:

        ```bash
        appium
        ```

4.  Execute the test scripts using:

        ```bash
        npm run test:ios
        ```

5.  Generate a report using:

        ```bash
        npm run report
        ```

## Structure

The repository is organized as follows:

```
/myRNDemoapp-automation
│
├── /step-definitions
│   ├── login.steps.js
│
├── /features
│   ├── login.feature
│
├── /pages
│   ├── login
│   ├──├── login.page.js
│   ├──├── locators.js
│
├── /resources
│   ├── MyRNDemoApp.app
│   ├── Android-MyDemoAppRN.1.3.0.build-244.apk
│
├── /testData
│   ├ login.data.js
│
├── /helpers
│   ├ helpers.js
│
├── README.md
├── package.json
├── wdio.conf.js
└── .gitignore
```

### Directory and File Descriptions

- **step-definitions**: Contains Cucumber step definitions for behavior-driven development (BDD) testing.
- **features**: Contains the feature files written in Gherkin syntax, which define the behavior of the application in a human-readable format.
- **test data**: Includes various test data files used to validate different scenarios during the execution of test cases.
- **pages**: Consists of page object classes that represent the application's web pages, encapsulating the elements and actions that can be performed on those pages.
- **helpers**: Consists of utility functions and methods that assist in various tasks throughout the test scripts.
- **resources**: Holds the application resources and related files.
- **README.md**: The main documentation file for the project.
- **package.json**: Lists the project's dependencies and scripts.
- **wdio.conf.js**: Configuration file for WebDriverIO.
- **.gitignore**: Specifies files and directories to be ignored by Git.
