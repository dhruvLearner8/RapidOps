Feature: Update user

    Scenario Outline: Try to update user with invalid details,then it will throw error.
        Given User Details id:"<id>",updateUserData:"<updateUserData>" to update user
        When Try to update user
        Then It will throw error:"<message>" while update user
        And update user function call <updateUserCallCount> while update user

        Examples:
            | id | updateUserData | updateUserCallCount | message                          |
            | 1  | '{}'           | 0                   | '"value" must be of type object' |


    Scenario Outline: Try to update user with valid details,then it will throw error.
        Given User Details id:"<id>",updateUserData:"<updateUserData>" to update user successfull
        When Try to update user with valid data
        Then It will throw error:"<message>" while update valid user
        And update user function call <updateUserCallCount> while updating user successfully

        Examples:
            | id | updateUserData                               | updateUserCallCount | message                  |
            | 5  | '{"name":"savan","email":"savan@gmail.com"}' | 1                   | User updated sucessfully |
