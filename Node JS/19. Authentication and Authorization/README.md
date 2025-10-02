# Authentication and Authorization:

## What is Authentication?

<img src="authentication.png" height='350px'/>

1. Authentication is the **process of verifying the identity** of a **user** or **system accessing an application**.

2. It ensures that **only authorized users can access protected resources** and **features**.

3. Authentication is **crucial for security**, **protecting data**, and **providing personalized experiences** in web applications.


## What is Authorization?

1. Authorization is the **process of determining what actions a user is permitted to perform** within an application.

2. It ensures that **users can access only the resources** and **funcationalities they have permission for**.

3. Authorization **enhances security by restricting access to sensitive data** and **operation**, complementing the authentication process.


## Authentication VS Authorization

<img src="Authentication_vs_Authorization.png" height="350px" style="background-color: white"/>

---

| Aspect          | Authentication                                      | Authorization                                           |
|-----------------|-----------------------------------------------------|---------------------------------------------------------|
| **Definition**  | Verifies the identity of a user or system           | Determines what resources a user can access             |
| **Purpose**     | Ensures users are who they claim to be              | Grants or denies permissions to resources and actions   |
| **Process**     | Validates credentials like usernames and passwords  | Checks user privileges and access levels                |
| **Occurs When** | At the start of a session or when accessing secured areas | After authentication, during resource access     |
| **User Interaction** | Requires user input (e.g., logging in)        | Usually transparent unless access is denied             |
| **Managed By**  | Handled by both frontend and backend systems        | Mainly enforced by backend servers                      |
| **Example**     | User logs into an account with a password           | User accesses settings page only if they have rights    |


## Signup UI (Project):

1. Define a **signup button in navigation bar** along with sign-in. It should point to a link **/signup**.

2. Define a **auth/signup.ejs** file that has the following fields and submits **POST request to /signup**:
    a. **firstName** and **lastName**,
    b. **email**,
    c. **password** and **confirmPassword**,
    d. **userType** with possible values "***guest***" and "***host***",
    e. **Terms and conditions** checkbox.

3. Define **routes in authRouter** and **behaviour in authController**.

4. **Fix the UI of the app** to look pretty.