Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I launch the application
    When I click on the menu option
    And I click on the login option
    When I enter username "STANDARD" and password "10203040"
    And I click on the login button
    Then I should see the Go Shopping button on the login screen and log out of the application


  Scenario: Login fails for locked user
    Given I launch the application
    When I click on the menu option
    And I click on the login option
    When I enter username "LOCKED" and password "10203040"
    And I click on the login button
    Then I should see an error message "Sorry, this user has been locked out."

  Scenario: Login fails with no credentials
    Given I launch the application
    When I click on the menu option
    And I click on the login option
    When I enter username "NO_USER_DETAILS" and password ""
    And I click on the login button
    Then I should see an error message "Username is required"

  Scenario: Login fails with no password
    Given I launch the application
    When I click on the menu option
    And I click on the login option
    When I enter username "NO_PASSWORD" and password ""
    And I click on the login button
    Then I should see an error message "Password is required"

  Scenario: Login fails with mismatched credentials
    Given I launch the application
    When I click on the menu option
    And I click on the login option
    When I enter username "NO_MATCH" and password "f-o-o"
    And I click on the login button
    Then I should see an error message "Provided credentials do not match any user in this service."