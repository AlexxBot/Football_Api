import { GraphQLID, GraphQLList } from "graphql";
import { Competition } from "../../Entities/Competition";
import { CompetitionType } from "../typeDefs/Competition";

export const GET_COMPETITIONS = {
  type: new GraphQLList(CompetitionType),
  async resolve() {
    const result = await Competition.find();
    return result;
  },
};

export const GET_COMPETITION = {
  type: CompetitionType,
  args: {
    idCompetition: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    return await Competition.findOne({
      where: { idCompetition: args.idCompetition },
    });
  },
};


