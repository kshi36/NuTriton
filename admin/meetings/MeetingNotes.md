# Meeting Notes


# Standup 2/14/24

- CI/CD pipeline: use Github Actions (already integrated with Github)
    - Protect main branch, require pull requests to merge
    - Must pass tests (Actions) and have another person sign off on changes, etc.
- Roles ([sprint schedule](https://www.notion.so/Sprint-Roles-7865fc5ad41d4f799e93a5727eb6e240?pvs=21))
    - Scrum master: Tony
    - Product owner: Enzo
    - Devs: Kevin, Hitvarth
        - System/Architecture research: Dingxian, Dongyu
- Start on implementation based on prioritized tasks in Jira (by product owner)
    - In-person meeting with devs on Thursday Feb 15

# Meeting with Gagan 2/12/24

- User stories: generally good, could be more detailed
- CI/CD
    - Think about unit tests to implement
    - Can start with GitHub Actions, or custom tools - Jenkins, etc
    - Think about code coverage (for tests)
    - Static analysis - tool to analyze code for security vulnerabilities
        - Can also do linting (code guidelines)
- There will eventually be a security assignment
- For sprints, think about assigning SCRUM roles and keeping track of that

notes

-more description on user stories (better for demo) and on Jira

-what i means for a user story to be done

-CI/CD pipeline - unit testing, static testing?

-we can use GitHub Actions (for each new functionality/branch) - pass unit tests, code coverage

-next deliverable: security document

-look at threats that our app may face, how to mitigate them

-but don’t have to implement them, just explore them specific to our app

-start sprints, work on project implementation
