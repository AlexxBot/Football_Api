import { GraphQLInt, GraphQLString } from "graphql";
import { Team } from "../../Entities/Team";
import { TeamType } from "../typeDefs/Team";

export const CREATE_TEAM = {
    type: TeamType,
    args: {
        idTeam: { type: GraphQLInt},
        name: {type: GraphQLString},
        tla: {type: GraphQLString},
        shortName: {type: GraphQLString},
        areaName : {type: GraphQLString},
        email : {type: GraphQLString},
        idCompetition : {type: GraphQLInt},
    },
    async resolve(_: any, args: Team) {
        const result = await Team.insert(args)
        console.log('this is the team create result ', result)
        return {
            ...args, idTeam: result.identifiers[0].idTeam
        }
    }
}