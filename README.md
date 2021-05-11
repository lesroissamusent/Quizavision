# QUIZAVISION
![Image]()


[Try the App!](https://quizavision.netlify.app/)

## Table of contents: 
* [Brief](#brief)
* [Requirements](#requirements)
* [Timeframe](#timeframe)
* [Technologies Used](#technologies-used)
* [API Used](#api-used)
* [Process](#process)
  * [Planning](#planning)
  * [Quiz Logic](#quiz-logic)
  * [Styling](#styling)
  * [Challenges](#challenges)
  * [Wins](#wins)
* [Future Features](#future-features)
* [Key Learnings](#key-learnings)
* [Collaborators](#collaborators)

## Brief:
Our brief was to create an app of any kind which consumed a public API. This was a pair-coding challenge (hackathon) and needed to to be completed within two days. 

## Requirements: 
1. Consume a public API
2. Have several components
3. Include wireframes
4. Be deployed online

## Timeframe:
48 Hours

## Technologies Used:
React.js - hooks

JSX

Javascript (ES6)

HTML5

Axios

Insomnia REST Client

Yarn

react-router-dom

Bulma CSS Framework

SCSS

## API Used:
Open Trivia Database: https://opentdb.com/api_config.php

## Process
### Planning
Due to the timeframe of the project we were aware that we couldn't plan anything too elaborate and chose to create a quiz app which we hoped could be achieved at a high standard in two days. As this was our first experience working with API's of any kind, the bulk of the planning time was taken up by finding the right API with a fun topic and user firendly endpoints.

Our original plan included having 4 or more categories for the user to choose from, but this changed once we started playing around with the data and realised how detailed each category was. 

**WireFrame and Plan for Sign-off (Including MVP and Bonus Features)**

### Quiz Logic

**Creating a grid**


**Moving the frog**


### Styling
* For this project we used Bulma (our first experience with CSS a framework) to give us some broad strokes ie: buttons, containers but wanted to add our own touches and not create an overly bulma looking app.
* We wanted to give the app a pub quiz vibe, to emulate the feel of a Friday night out with friends and drinks, this 

### Challenges
* Randomised correct/incorrect answers - the difficulty here was that the incorrect answers came bundled together but the correct answer was separate and needed to be drilled into separately. As such, we struggled to put all four answers together and write a randomisation function that did not leave the correct answer always at the beginning or end of the stack. 
* Counter - so that the player could keep track of their right answers. 
* Hide next question button until current question has been answer. We took some time to decide between a ‘next question’ button and automatically moving to the next question once an answer had been answered. This was partially contingent on the counter working and we ultimately decided that a ‘next question’ button would be cleaner.

### Wins
* Working as a team, having the support of a second person and being able to sidestep easy mistakes due to the benefit of a second pair of eyes.

## Future Features
Some features we could have implemented with more time:
* Timer - to set a limit for how long the player has to answer each question. This was on our wireframe but we didn't end up having enough time to implement it.  
* More categories - this is a relatively easy addition but would have required too much extra work on the CSS, and ultimately didn't seem necessary due to the amount of data within each category. 
* Authentication - by adding auth we could have given the user the ability to create a profile page, keep track of scores and share highscores with other users. 

## Key Learnings
* Got familiar with APIs and the different approaches needed based on their data structures. 
* Pair coding and having the input of a second person. Getting used to blending different approaches and the benefits of having a partner to work through problems with. 
* React.js

## Collaborators
Hannah Tinacci - [GitHub](https://github.com/hannahtinacci)

