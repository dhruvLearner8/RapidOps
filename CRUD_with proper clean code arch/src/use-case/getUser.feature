Feature: Get Particular User

    Scenario Outline: Try to get user with valid details,then it will throw error.
        Given User Details id:"<id>" to get  successfull user
        When Try to get user with valid data
        Then It will get user with details: "<getUserDetails>"
        And get user function call <getUserCallCount> while geting user successfully

        Examples:
            | id | getUserDetails       | getUserCallCount |
            | 1  | User get sucessfully | 1                |
