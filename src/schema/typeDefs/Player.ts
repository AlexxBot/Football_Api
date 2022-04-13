import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { MessageType } from "./Message";

export const PlayerType = new GraphQLObjectType({
  name: "Player",
  fields: {
    idPlayer: { type: GraphQLID },
    name: { type: GraphQLString },
    position: { type: GraphQLString },
    dateOfBirth: { type: GraphQLString },
    countryOfBirth: { type: GraphQLString },
    nationality: { type: GraphQLString },
    idTeam: { type: GraphQLInt },
  },
});

export const PlayerByTeamType = new GraphQLObjectType({
  name: "PlayerByTeam",
  fields: {
    idPlayer: { type: GraphQLID },
    name: { type: GraphQLString },
    position: { type: GraphQLString },
    dateOfBirth: { type: GraphQLString },
    countryOfBirth: { type: GraphQLString },
    nationality: { type: GraphQLString },
  },
});

export const PlayersResponse = new GraphQLObjectType({
  name: "PlayersResponse",
  fields: {
    response: { type: MessageType },
    players: { type: new GraphQLList(PlayerByTeamType) },
  },
});
