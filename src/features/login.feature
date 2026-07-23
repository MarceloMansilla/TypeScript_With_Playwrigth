Feature: Login

  Background:
    Given the user navigates to the login page

  @login @smoke
  Scenario: Login with valid credentials
    When the user enters email "batmantest@gmail.com" and enters password "Bat@123456"
    And the user clicks the sign in button
    Then the user should see the homepage

  @regression
  Scenario Outline: Login attempts with various credentials
    When the user enters email "<email>" and enters password "<password>"
    And the user clicks the sign in button
    Then the result should be "<result>"
    Examples:
      | email            | password  | result        |
      | batman@gmail.com | wrongpass | error message |
      | wrong@gmail.com  | bat@123   | error message |
      | wrong@gmail.com  | wrongpass | error message |