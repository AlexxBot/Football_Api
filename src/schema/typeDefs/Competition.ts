import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from "graphql";

export const CompetitionType = new GraphQLObjectType({
  name: "Competition",
  fields: {
    idCompetition: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    areaName: { type: GraphQLString },
  },
});
