# GameSpot-API

A backend api mainly responsible for role based CRUD operations.

## What is GameSpot?

GameSpot is a video game rental service where users can perform role based CRUD operations and keep track of the available for rent or already rented out games.

- the frontend client codebase can be found [HERE](https://github.com/a-maystorov/gamespot-client)

## Technologies:

- JavaScript

- Node

- Express

- MongoDB

- Mongoose

- Testing:

  - Jest

- Dependencies:

  - joi and joi-objectid

  - lodash

  - moment

  - jsonwebtoken

  - winston

  - cors

  - bcrypt

## Tests:

- Over 97% of all the files have been tested with passing results.

![api-tests](https://user-images.githubusercontent.com/76817540/179432217-00f4a222-b0fa-4b6d-9055-c001f9edb416.jpeg)

  - Example of a passing test suite:
  
  ![customers-test-suite](https://user-images.githubusercontent.com/76817540/179432249-9f53b7e4-3c23-43f9-9c82-b6758691502d.jpeg)

## Installation

1. Download the ZIP files or clone the repo.

2. Navigate to the project root directory using your terminal and IDE of choice.

3. Run `npm install` to install all of the project dependencies.

4. Change mongodb connection string in the starup folder and seed.js file to your preference.

5. In the terminal run `node seed.js` to populate the database with some games and genres.

6. Run `node app.js` to start the server.

> :warning: **The frontend for this project has been build and if you would like to only do some basic testing I recommend visiting the hosted project**

- [Hosted project](https://gamespotz.netlify.app/games)

## Example of a collection in Compass:

![alt text](https://github.com/SirDev97/GameSpot-API/blob/main/assets/compass.jpeg?raw=true)
