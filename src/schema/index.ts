import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import { GREETING } from './Queries/Greeting'
import { CREATE_COMPETITION, DELETE_COMPETITION, UPDATE_COMPETITION} from './Mutations/Competition'
import { GET_COMPETITION, GET_COMPETITIONS } from './Queries/Competition'

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        greeting: GREETING,
        getCompetitions: GET_COMPETITIONS,
        getCompetition: GET_COMPETITION
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createCompetition: CREATE_COMPETITION,
        deleteCompetition: DELETE_COMPETITION,
        updateCompetition: UPDATE_COMPETITION

    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})