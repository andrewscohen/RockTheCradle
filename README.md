## Welcome!

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/andrewscohen/RockTheCradle">
    <img src="https://user-images.githubusercontent.com/67562159/105742635-c5a1ed00-5f09-11eb-9b0e-1f0e91adb7f0.png" width=350px height=350px/>
  </a>

  <h3 align="center">Good Builds</h3>

  <p align="center">
    <a href="https://github.com/andrewscohen/RockTheCradle/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rockthecradle.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/andrewscohen/RockTheCradle/issues">Report Bug</a>
    ·
    <a href="https://github.com/andrewscohen/RockTheCradle/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Rock the Cradle is a clone of [Rent the Runway](https://www.renttherunway.com/) where users are able to rent high end fashion items without the need to invest in purchasing them outright. Rock the Cradle takes this concept and refocuses the target audience to be families with newbords and young children. In addition to clothing, Rock the Cradle will offer rentals of high dollar items associated with young children (cribs, rockers, strollers, etc).

### Built With
- PostgreSQL
- Express.js
- Pug.js
- JavaScript
- CSS
- Bcryptjs
- Express-session
- Express-validator
- Node.js

<!-- GETTING STARTED -->
## Installation

To run this application locally, you'll need to:

1. `git clone` this repo
2. `cd` into the local repo
3. `npm install` to install the dependencies
4. Create a `.env` file based on the `.env.example` file included in the repo with your own values
5. Create a user on your local machine with the username and password specified in your `.env` file in PostgreSQL
6. Run `npx dotenv sequelize db:create` to create the database
7. If the sequelize module is not found, try running `npx dotenv sequelize-cli db:create` and replace sequelize with sequelize-cli for the rest of these commands
8. Run `npx dotenv sequelize db:migrate` to run the migrations
9. Run `npx dotenv sequelize db:seed:all` to seed the database
10. Finally, start the development server with `npm start`. The scripts in the package.json should do the work. You'll see the local address you can use show up in the terminal.

<!-- USAGE EXAMPLES -->
## Usage

<!-- ROADMAP -->
## Roadmap

Checkout The Planning Docs At The [Wiki](https://github.com/andrewscohen/RockTheCradle/wiki) Section

---
