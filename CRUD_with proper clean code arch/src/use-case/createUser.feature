Feature: Create New User

    Scenario Outline: Try to create new user with invalid details,then it will throw error.
        Given User Details name:"<name>",email:"<email>" to create new user
        When Try to create new user
        Then It will throw error:"<message>" while cretating user
        And create user function call <userCallCount> while creating user

        Examples:
            | name  | email | userCallCount | message                         |
            |       |       | 0             | '"name" is required'            |
            | savan |       | 0             | '"email" is required'           |
            | savan | savan | 0             | '"email" must be a valid email' |


    Scenario Outline: Try to create new user with valid details,then it will throw error.
        Given User Details name:"<name>",email:"<email>" to create new successfull user
        When Try to create new user with valid data
        Then It will create new user with details: "<newUserDetails>"
        And create user function call <userCallCount> while creating user successfully

        Examples:
            | name  | email          | newUserDetails           | userCallCount |
            | savan | savan@gmai.com | User created sucessfully | 1             |
