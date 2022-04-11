import { GraphQLBoolean, GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { ObjectID } from "typeorm";
import { resourceLimits } from "worker_threads";
import { Competitions } from "../../Entities/Competition";
import { CompetitionType } from "../typeDefs/Competition";

export const GET_COMPETITIONS = {
  type: new GraphQLList(CompetitionType),
  async resolve() {
    const result = await Competitions.find();
    return result;
  },
};

export const GET_COMPETITION = {
  type: CompetitionType,
  args: {
    idCompetition: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    //console.log(args)
    return await Competitions.findOne({
      where: { idCompetition: args.idCompetition },
    });
  },
};


