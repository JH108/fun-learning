# fun-learning
Games that are both fun and educational


Steps to run our application
  1. npm install
  2. seed database by running [node seedDB/seed.js] from the root of the repo
  3. start the server with [nodemon server/server.js] or [node server/server.js] from the root of the repo
  4. go to localhost:1339, you should be redirected to the login page. You can also access the page by going ot localhost:1339/#/login

Functionality not yet added
  1. Authentication, an idea for authentication would be to use JWT. Something like Auth0 probably wouldn't work because of the amount of information a new user will need to put in.
  2. The ability to only display analytics for teachers.
  3. A way to verify that a user is an admin/teacher. (ties in with authentication)
  4. Give teachers the ability to add custom tests for the games. Each game sets the "tests" at the beginning of its level1 file, these can be replaced with a call to the database.

Notes on using Phaser
  1. Anytime you want to send or receive data from the database with Phaser you need to add a function to the prototype of the GameState you need to make the call in. This can be done in the controller for that game. You can find examples of this in game.js.
  2. When building the phaser game almost everything can be added as a property to the game itself, this makes it easy to access in any of your functions. An example being a games score, [this.game.score] as opposed to just [this.score]. This method removes having to worry about creating closures for your functions.
  3. If your game is appearing on pages where it shouldn't it is probably because the game canvas is being loaded at the wrong time. The easiest way to get around this problem is just to create a new controller for each game.
  4. Images need to be loaded in the Preload GameState or they may not be displayed correctly.

Notes on Router
  1. The router currently does not use a request-handler file, most of the code is in place to make the switch, we just didn't have enough time to test the changes.

Notes on Sanitize and $sanitize
  1. Sanitize is an express middleware for defending against xss attacks, it only works on primitive values from what I have found so if you need to sanitze an object you have to iterate over each key and generate a new object with the sanitized inputs.
  2. $Sanitize is a built in Angular method that sanitizes model inputs in your controller, I belive the same principles metioned above apply here.

Note on Current Stage of Authentication
  1. Currently we are just checking the password and username entered to see if they match a document in our database, we are not using any hashing algorithims to protect our users information.

General Notes
  1. All the images used by the games are located in the assets folder.
  2. All the game controllers are located in game.js.
  3. Some of the naming is inconsistent for game1, it could be either "game" or "game1". The naming for game2 and game3 is consistent.