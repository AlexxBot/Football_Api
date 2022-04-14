import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import { CREATE_COMPETITION, DELETE_COMPETITION, IMPORT_LEAGUE, UPDATE_COMPETITION} from './Mutations/Competition'
import { GET_COMPETITION, GET_COMPETITIONS} from './Queries/Competition'
import { GET_TEAMS, GET_TEAM_PLAYERS } from './Queries/Team'
import { CREATE_TEAM } from './Mutations/Team'
import { CREATE_PLAYER } from './Mutations/Player'
import { GET_PLAYERS, GET_PLAYERS_BY_COMPETITION_TEAM } from './Queries/Player'

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        /* getCompetitions: GET_COMPETITIONS,
        getCompetition: GET_COMPETITION,
        getTeams: GET_TEAMS,
        getPlayer: GET_PLAYERS, */
        //those are the 2 queries requested in the challenge
        players: GET_PLAYERS_BY_COMPETITION_TEAM,
        team: GET_TEAM_PLAYERS
        

    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        /*createCompetition: CREATE_COMPETITION,
        deleteCompetition: DELETE_COMPETITION,
        updateCompetition: UPDATE_COMPETITION,

        createTeam: CREATE_TEAM,
        createPlayer: CREATE_PLAYER,*/

        //it is the mutation requested in the challenge 
        importLeague: IMPORT_LEAGUE

    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})