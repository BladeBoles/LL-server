# Lexical Library
## *Read All the Things!*

__Lexical Library is an app for tracking and storing your reading habits.__

### [Live App](https://lexical-library.bladeboles.now.sh/) 

This is the back-end documentation.  As such it does not include screenshots or explanations of the client side.  If you would like to check those out, visit the [Client README](https://github.com/BladeBoles/LL-client/tree/testing1)


---

**Currently Reading/My Library**
----
  Returns entire database of items

* **URL**

  /currently-reading

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
      id: 1,
      media_name: "Frankenstein", 
      current_progress: 15, 
      finished: false, 
      media_type: "book", 
      date_started: "1999-05-22T00:00:00.000Z", 
      date_finished: null, 
      author: "Mary Shelley", 
      media_url: "", 
      notes: "Good ole book",
      library_owner: null
    }, ...`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not Found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**

  **Body** `{
      media_name: "Frankenstein", 
      current_progress: 15, 
      finished: false, 
      media_type: "book", 
      date_started: "1999-05-22T00:00:00.000Z", 
      date_finished: null, 
      author: "Mary Shelley", 
      media_url: "", 
      notes: "Good ole book",
    }`

    Note: only media_name, current_progress, finished, media_type, & date_started are required.  The rest may be null or empty strings.

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
      id: 1,
      media_name: "Frankenstein", 
      current_progress: 15, 
      finished: false, 
      media_type: "book", 
      date_started: "1999-05-22T00:00:00.000Z", 
      date_finished: null, 
      author: "Mary Shelley", 
      media_url: "", 
      notes: "Good ole book",
      library_owner: 1
    }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not Found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`


**Currently Reading/My Library Single Item**
----
  Deletes or patches a single item in the database

* **URL**

  /currently-reading/:currently_id

* **Method:**

  `DELETE`
  
*  **URL Params**

  currently_id must be an integer

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** 

    None
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not Found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Method:**

  `PATCH`
  
*  **URL Params**

  currently_id must be an integer

* **Data Params**

  `{
      media_name: "Frankenstein", 
      current_progress: 15, 
      finished: false, 
      media_type: "book", 
      date_started: "1999-05-22T00:00:00.000Z", 
      date_finished: null, 
      author: "Mary Shelley", 
      media_url: "", 
      notes: "Good ole book",
    }`

    Note:  A patch will be successful if any or all (or even zero) paramaters are changed.  

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** 
    None
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not Found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`


**New User Account Creation**
----
  Posts a new user to the profiles database

* **URL**

  /new-user

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**

  `{
    user_login: "fred", 
    user_password: "password", 
    weekly_hours: 10, 
    progress: 180, 
    days_left: 3
  }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 

    `{
    id: 1,
    user_login: "fred", 
    user_password: "password", 
    weekly_hours: 10, 
    progress: 180, 
    days_left: 3
  }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not Found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

**Retrieve and Fetch User Account**
----
  Retrieve or change user account info

* **URL**

  /login/:user_login

* **Method:**

  `POST`
  
*  **URL Params**

  user_login must be an integer (id)

* **Data Params**

  `{
    user_login: "fred", 
    user_password: "password"
  }`

  User and Password required

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

    `{
    id: 1,
    user_login: "fred", 
    user_password: "password", 
    weekly_hours: 10, 
    progress: 180, 
    days_left: 3
  }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not Found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Method:**

  `PATCH`
  
*  **URL Params**

  user_login must be an integer (id)

* **Data Params**

  `{
    weekly_hours: 10,
    progress: 150,
    days_left: 3
  }`

  Patch will be successful when any or all are changed (or zero)

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** 

    None
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not Found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
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
