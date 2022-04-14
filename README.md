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

1.- Need to install pgadmin or another database manager to run postgress

2.- Change the environment variables depending on your local server configuration

3.- Create a database call football, which is named in the db.ts file inside src/ folder

4.- Execute npm i then run npm run dev or npm run build and npm start

5.- Open http://localhost:3000/graphql on web browser