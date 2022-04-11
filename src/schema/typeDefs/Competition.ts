import {GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'

export const CompetitionType = new GraphQLObjectType({
    name: 'Competitions',
    fields: {
        idCompetition: {type: GraphQLID},
        name: {type: GraphQLString},
        code: {type: GraphQLString},
        areaName: {type: GraphQLString}
    }
})