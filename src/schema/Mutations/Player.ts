import { GraphQLInt, GraphQLString } from "graphql";
import { Player } from "../../Entities/Player";
import { PlayerType } from "../typeDefs/Player";

export const CREATE_PLAYER = {
    type: PlayerType,
    args:{
        idPlayer: { type: GraphQLInt},
        name : { type: GraphQLString },
        position : { type: GraphQLString },
        dateOfBirth : { type: GraphQLString },
        countryOfBirth : { type: GraphQLString },
        nationality : { type: GraphQLString },
        idTeam: { type: GraphQLInt },

    },
    async resolve(_: any, args: Player) {
        const result = await Player.insert(args);
        return {
            ...args,
            idPlayer: result.identifiers[0].idPlayer
        }
    }
}