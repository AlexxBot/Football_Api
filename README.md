# Packages used in this proyect

## axios
To request the data from https://api.football-data.org/v2
## dotenv
To setup environment variables
## express
To create a server
## express-graphql
to combine express with graphql
## grapgh
to work with graphql tools
## pg
to work with postgres database
## typeorm
to work with relationship databases independently of the database manager and its queries
# Instruccions to run locally

1.- Need to install pgadmin or another database manager to work with postgres

2.- Change the environment variables depending on your local server configuration

3.- Create a database call football which is named in the db.ts file inside src/ folder

4.- Execute "npm i" then run "npm run dev" or "npm run build" and "npm start". the server console must be show the message "server listening on port : 3000" with no erros

5.- Open http://localhost:3000/graphql on web browser

# Mutation example
## importLeague
mutation{ importLeague(leagueCode: "CL"){ success, message } }

# Queries examples
## players

{players(leagueCode: "CL"){
  response{success, message},
  players{idPlayer ,name, position, dateOfBirth, countryOfBirth, nationality}
}}

## team

{
  team(name: "FC Bayern München", withPlayers: true){name, tla,shortName,email,areaName,players {
    idPlayer
    name
    position
    dateOfBirth
    countryOfBirth
    nationality
  }}
}


