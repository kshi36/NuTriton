# Meeting Notes
(See Notion for more detailed notes, and Discord for more timely updates/needs)

## Meeting with Gagan (2/12/24)
- User stories: generally good, could be more detailed (better for demo) and on Jira
- CI/CD
    - Unit testing, static testing?
    - Think about unit tests to implement
    - Can start with GitHub Actions, or custom tools - Jenkins, etc
    - Think about code coverage (for tests)
    - Static analysis - tool to analyze code for security vulnerabilities
        - Can also do linting (code guidelines)
- There will eventually be a security assignment
    - look at threats that our app may face, how to mitigate tehm
    -but don’t have to implement them, just explore them specific to our app
- For sprints, think about assigning SCRUM roles and keeping track of that

## Standup 2/14/24
- CI/CD pipeline: use Github Actions (already integrated with Github)
    - Protect main branch, require pull requests to merge
    - Must pass tests (Actions) and have another person sign off on changes, etc.
- Roles for sprint ([sprint schedule](https://www.notion.so/Sprint-Roles-7865fc5ad41d4f799e93a5727eb6e240?pvs=21))
    - Scrum master: Tony
    - Product owner: Enzo
    - Devs: Kevin, Hitvarth
        - System/Architecture research: Dingxian, Dongyu
- Start on implementation based on prioritized tasks in Jira (by product owner)
    - In-person meeting with devs on Thursday Feb 15

## Standup (2/21/24)
- A couple people couldn’t make it (illness and midterm scheduling)
- Technologies chosen:
    - Firebase for database
    - React for JS
- Planning an in-person sprint on Friday (2/23); in the meantime, look up documentation for frameworks (will link documentation links in notion)

Standup meeting (2/26/24) (Async)
Updates
- login page and firebase ui for managing users is ready. Need to integrate the two.
- See Discord for other technical updates

## Meeting with Gagan (2/26/24)

Retrospectives from sprints
- Less organized/structured roles

Progress
- Sounds okay so far
- Backend - directly interfacing w/ Firebase
    - Think of testing framework, e.g. writing unit tests in backend
    - For frontend testing - think if using Jest or some other testing framework
    - Try to add testing while developing

## Standup meeting (2/28/24)
Updates and TODOs:
- Login page in progress
- Data CSV being finalized - will look into uploading to Firebase
- Data filtering/sorting will be addressed soon
- Implement testing during development
- Map API maybe deprioritized for the other tasks
- Update Jira^ for these tasks

## Standup meeting (3/1/24)
Updates and TODOs:
- Schedules don’t align to work together in synchronous sprint today - can put a poll for this weekend
- Login page being finalized, will push this weekend
- Data filtering/sorting in progress
- Restaurant list UI also in progress - will coordinate with task owner for data filtering for any potential merge conflicts
- Testing frameworks are being explored - will flesh out in the restaurant list page
- Standardized icons in progress

## Standup (3/4/24)
Updates
- Testing almost done for login (Selenium)
- Food dataset done in CSV, needs to be uploaded to Firebase
    - Restaurant data needs to coordinate with food data
    - Restaurant list and filter depends on data format
- Profile page UI set up
- Next meetings will probably be group sprints to finish up the project

## Meeting with Gagan (3/4/24)
Updates
- Login setup and test framework for functionality
- Jest framework - for frontend (design) tests?
- Database integration with frontend impending

Demos
- Next Wed/Fri in class
- Fairly quick - live demo, some technical overview/presentation, not too in-depth

