Feature: Delete User

    Scenario Outline: Try to delete user with valid details,then it will throw error.
        Given User Details id:"<id>" to create new successfull user
        When Try to delete user with valid data
        Then It will delete user with details: "<newUserDetails>"
        And delete user function call <deleteCallCount> while deleting user successfully

        Examples:
            | id | newUserDetails           | deleteCallCount |
            | 1  | User deleted sucessfully | 1               |
