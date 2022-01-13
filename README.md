# Melody Medley
![status: stable](https://img.shields.io/badge/stable-version%201.0-green)

![License: GNU General Publice License v3.0](https://img.shields.io/badge/license-GNU%20General%20Publice%20License%20v3.0-yellowgreen)

## Description
An MVC content management system for a playlist creator written in Express.js and Node.js. It utilizes asynchronous JavaScript functions and performs CRUD functions (Create, Read, Update, and Delete) on playlists. Users can view their own playlists as well as all songs, artists, genres, and playlists. The app uses the `MySQL2`, `Express`, `dotenv`, and `Sequelize` Node.js packages.

### User Story

```
AS a user
I WANT to view a list of artists
WHEN I click the artist name, their song, albums, and genre will populate on the page
THEN if the user is signed in, they will be able to add the song to their playlist
```

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Questions](#questions)

## Installation

To start using Melody Medley, first clone [the repo](https://github.com/jcnolan9/Project2_FullStackApp) to your server. Then run `npm i` to install all the dependent packages.

Next, open `connection.js` in the `connection` folder. Change the MySQL user and password to your own MySQL server credentials (or your own JawsDB connection string). Next, look in the "sql" folder. In MySQL, run the SQL statements in `schema.sql`. Then seed the database by running the command `node seeds/seed.js`.

## Usage

Open a terminal, navigate to the directory containing the `server.js` file, then run `node server` to start the app.

## License

This work is licensed under GNU General Publice License v3.0.

## Questions

Visit [the app's GitHub repo](https://github.com/jcnolan9/Project2_FullStackApp)

To reach the team with additional questions, reach out to the [project contributors](https://github.com/jcnolan9/Project2_FullStackApp/graphs/contributors).
