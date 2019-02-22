Feature: Tech Test for ECS
    As a developer
    So that I can do the tech test, I will git clone someone repo and update it to work on ECS tech test


    Scenario: Checking the page is open and I can click the button
        Given I open the url "http://localhost:3000/"
        When  I doubleclick on the element "button[data-test-id='render-challenge']"
        Then  I expect that element "td[data-test-id='array-item-1-0']" is visible

    Scenario: create arrays
        Given I open the url "http://localhost:3000/"
        When  I doubleclick on the element "button[data-test-id='render-challenge']"
        Then  I expect that element "td[data-test-id='array-item-1-0']" is visible
        And   I can create an array from the row "1"
        And   I can create an array from the row "2"
        And   I can create an array from the row "3"

    Scenario: Do the hard maths stuff for each array and Submit the index to the form after the maths
        Given I open the url "http://localhost:3000/"
        When  I doubleclick on the element "button[data-test-id='render-challenge']"
        Then   I expect that element "td[data-test-id='array-item-1-0']" is visible
        And   Do maths on array "1"
        And   Do maths on array "2"
        And   Do maths on array "3"
        And   I set "Gary" to the inputfield "input[data-test-id='submit-4']"
#        And   I click on the button "#challenge button[tabindex='0']"
#        Then  I expect that a alertbox contains the text "Congratulations you have succeeded. Please submit your challenge"
#
