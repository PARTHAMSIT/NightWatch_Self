Feature: End To End Google

Scenario: Searching Google

  Given I open Google`s search page
  Then the title is "Google"
  And the Google search form exists

Scenario: Searching Google again

  Given I open Google`s search page
  Then the title is "Google"
  And the Google search form exists

@New_Test
Scenario Outline: Opening AirBnB Page

Given I open AirBnB page
Then link is present and Enter "<Value>"

When user clicks on CHECK-IN field
Then select the proper start date

When user clicks on CHECKOUT field
Then select the proper End date

When user clicks on GUESTS field
And user clicks on plus icon to add Adult passenger
Then click on the search button

Examples:
|Value  |
|Kolkata|

@LineValidation
Scenario: Link Validation

Given I open AirBnB page
Then Validate the tile of Host a Home link

Given I open AirBnB page
Then Validate the tile of Host an experience link

Given I open AirBnB page
Then Validate the tile of Help link

When user clicks on Host a Home Line
Then Validate the tile of the page





