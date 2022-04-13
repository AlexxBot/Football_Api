import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { PlayerByTeamType, PlayerType } from "./Player";

export const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: {
    idTeam: { type: GraphQLID },
    name: { type: GraphQLString },
    tla: { type: GraphQLString },
    shortName: { type: GraphQLString },
    areaName: { type: GraphQLString },
    email: { type: GraphQLString },
    idCompetition: { type: GraphQLInt },
  },
});

export const TeamPlayersType = new GraphQLObjectType({
  name: "TeamPlayers",
  fields: {
    idTeam: { type: GraphQLID },
    name: { type: GraphQLString },
    tla: { type: GraphQLString },
    shortName: { type: GraphQLString },
    areaName: { type: GraphQLString },
    email: { type: GraphQLString },
    players: {type: new GraphQLList(PlayerByTeamType)}
  },
});
