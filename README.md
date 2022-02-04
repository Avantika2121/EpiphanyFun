# Epiphany-Fun
EpiphanyFun app 

## Project Description
“Epiphany-Fun!” is a website that gives you ideas on what to do when you don’t know what to do. With Covid being around and not being able to socially meet-up we all are out of ideas of what to do to to kill boredom and keep the little ones busy. You can choose whether you want to know some indoor activities or outdoor ones. You can even post your own ideas for others to see!

## Deployed Site
https://epiphany-fun-frontend.herokuapp.com/

## Devlopment Process
The process for this project was based on Agile methodologies. We had daily stand-ups with our leader/instructor to discuss what we achieved the day before, the plan for today and any hurdles. I developed this project in 5 Sprints.


### User Stories and Backend development


#### Sprint 1
Developing the backend of this project components in Spring/Rest APIs to talk with front-end and communicate data. Data is created in PostgreSQL. Testing the user endpoints in postman. 


#### Sprint 2 

***Landing Page***

**A user should be able to:**

1. Navigate to "/" and splash page with the name of the website.
2. See the navigation bar with a link to home page and list of "activities" in drop-down menu.
3. To also see the drop-down menu for "post an activity" and check the weather

In the front-end development, testing back-end APIs to ensure the data is being received and posted successfully from front-end to the back-end database.

#### Sprint 3

***All Activities Page

**A user should be able to:**

1. View the All Activity page.
  * The site-wide navigation bar.
  * The list of all the activities in the database and any that are shared by user
  * An beautiful photo of family activity.

***Outdoor Activity page

**A user should be able to:**

1. View the Outdoor Activity page.
  * The site-wide navigation bar.
  * Post an outdoor activity and the activity should show up on the page and also on All Activities page.
  * The list of all the outdoor activities in the database and any that are posted by user.
  * An scenic photo of outdoor activity.

Testing to check the data is being accurately posted to back-end database when user submits a post.
 

#### Sprint 4


***Outdoor Activity page

**A user should be able to:**

1. View the Indoor Activity page.
  * The site-wide navigation bar.
  * Post an indoor activity and the activity should show up on the page and also on All Activities page.
  * The list of all the indoor activities in the database and any that are posted by user.
  * An beautiful photo of indoor activity.

Testing to check the data is being accurately posted to back-end database when user submits a post.

#### Sprint 5

1. Calling external weather Api for user to be able to check weather.
2. A final touch to CSS and overall look of the app.
3. Deployment of front-end and back-end on Heroku.


### ERD

![IMG_3718](https://user-images.githubusercontent.com/94148009/152540742-1e339478-86e1-4d32-895a-096dcd4f4d69.PNG)


**USER END POINTS**

|     Method    |   Endpoints                                   | Detail                           |
| ------------- | -----------------------------------           |--------------------------------- | 
|       POST    | api/category/{categoryName}/activity             | creates new activity outdoor or indoor based on category name                |
|       GET     | api/category/activity/             | returns JSON all activities           |
|       GET     | api/category/{categoryName}/activity    | returns JSON for activities of specific category name        |

****Technologies Used****
1. Java
2. Spring Framework (Data-Rest, Data-JPA)
3. Postman
4. PostgreSQL
5. Angular/TypeScript
6. HTML/CSS/Bootstrap
7. Git

**BONUS**

1) Deployed to Heroku

**Hurdles**

1. Debugging my posting data from front-end to make it work. I learnt a great deal how they work in full-Stack app.
2. Deploying to Heroku did take time to configure back-end and front-end for deployment while i was trying to fix errors. My googling skills came handy.



