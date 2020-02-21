# Lexical Library
## *Read All the Things!*

__Lexical Library is an app for tracking and storing your reading habits.__

### [Live App](https://lexical-library.bladeboles.now.sh/) 

This is the back-end documentation.  As such it does not include screenshots or explanations of the client side.  If you would like to check those out, visit the [Client README](https://github.com/BladeBoles/LL-client/tree/testing1)


---

### Current Features Include:

* CRUD items you are reading in "Currently Reading"
* CRUD items you have already read in "My Library"
* CRUD time-based reading goals for yourself.  The app calculates what you need to read each day to reach your goal!
* Simple user accounts to store your libraries


#### Upcoming Features

Lexical Library is a work in progress.  Here are some future features to expect:

* Items in "My Library" can be filtered and sorted by date completed and type of media
* Better time/date formatting, with the ability to choose units of time measure (minutes/hours/days/weeks)
* Stopwatch within each item that automatically updates your current progress
* Custom reading lists
* Share goals and reading lists with friends!


#### Tech Stack
* Front End:  React, HTML5 & CSS3 (vanilla), JavaScript (ES6+)
* Back End: Node, PostgreSQL, Express
* Testing/Misc: npm, Mocha, Chai, Jest, Enzyme, SuperTest
* Deployment: Zeit (front-end), Heroku (api & database)
