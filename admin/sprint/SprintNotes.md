# Sprint Notes

## Sprint 1 (2/14/24)

### Progress:

- Assigned roles for coming sprints, finalized meeting times
- Created Jira tasks with priorities
- Decided the CI/CD pipeline
- Made a brief view for architecture
- Created a project in React, and built preliminary UI for restaurant list page
- Researched about database options

### Plan for Next Sprint:

- Security assignment (by Friday 23)
- Finalize UI for restaurant list page [Jira](https://210t7.atlassian.net/browse/FIRST-1)
- Create the navigation bar with placeholder pages
- Finalize design of the database

## Sprint 2 (2/23/24)

### Progress
- Set up firebase database and linked to the project
- Built database I/O interface and script
- Set up authentication in firebase, with login, register with email and Google account
- Set up Github Actions for later CI/CD pipeline
- Added a few things to the list page

### Plan for Next Sprint
- Think about map interface & API
- Database filtering and customization
- Security settings
- Foods items within each restaurant on the list page

### Retrospective
- Will try to rotate sprint roles each week - refer to Notion for schedule and roles
- Use Jira for tasks
- In-person scheduling is hard - can do future sprints async if needed

## Sprint 3 (3/3/24)

### Progress
- Jest framework is set up to test front end of the project
- Added some tests for the login page using selenium
- login/register page is up
- Restaurant list page UI mostly done, will link to firebase
- Restaurant filter UI is in place
- The UI and html pages for the profile branch are finished; will link to .js scripts.

### Plan for Next Sprint
- Restaurant filter functionality: will need to link it to the data to enable filtering/sorting - Will likely wait until the list page and the database are more complete before implementing the functionality for filtering/sorting
- Still working on the database, we have a scraper set up to link restaurants with their food menu items. Need to modify the script to put it into the database properly - Likely need to input information such as longitude, latitude, and hours manually. (Easier) - Need to figure out if each restaurant can have a collection of the key IDs from the food collection to map from the restaurant to the food list. From my preliminary research (https://stackoverflow.com/questions/46568850/what-is-firebase-firestore-reference-data-type-good-for) firebase has a `reference` data type that can point to any other doc in the database but “each hop will result in another round trip to the server” so it probably is ineffective.

### Retrospective
- Couldn’t find a time last week to meet up, so worked async - see standup updates notes here (in Notion).
    - We can form smaller working groups for features - coordinate amongst ourselves within those groups
- Update Jira more frequently
- Structured roles haven’t been working for us - we will all work as developers and communicate any product changes and sprint coordination in our Discord, will discuss this next retrospective.

## Sprint 4 (3/6/24)

### Progress
- Firebase data format done, but we hit the daily cap so can’t test this data more today :(
- Login functionality done
- Profile functionality set up - in progress: profile security tutorial, some debugging
- Filtering and sorting functionality done but needs to be tested with Firebase data
- Started and shared presentation slides

### Plan for Next Sprint
- Shrink the dataset size to make development tractable within the Firebase free tier
- Test/debug sort/filter functionality
- Set up more thorough testing
- Clean up frontend UI components
- Prep for demo/presentation

### Retrospective
- Async work seems to be fairly productive for us, so we will use in-person work time to coordinate interdependencies, communicate technical details, and prep for group presentations
- The less-strict roles seems to be working for us (knock on wood), so will keep treating everyone as developers and using group time to coordinate product changes

## (Mini-)Sprint 5 (3/8/24)

### Progress
- Cleaned up list view UI
- Trimmed the dataset a bit
- Finished debugging functionality for filtering/sorting
- Finished log out functionality and logic for matching profile info with login info

TODO (async):
- Clean up overall UI
- Touch up on testing
- Add to presentation slides
- Merge meeting notes to GitHub

### Plan for Next Sprint
- Probably no time for another full sprint, work on tasks async and meet up to iron out merge conflicts and prep presentation

### Retrospective
- Can meet up again to coordinate final touches, but do individual work async
- Productivity seems to be working well, maybe due to looming deadline
- Will continue non-assigned roles - everyone’s a dev until the end




# Standup Meeting Updates
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

