import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Competitions } from "../../Entities/Competition";
import { CompetitionType } from "../typeDefs/Competition";
import { MessageType } from "../typeDefs/Message";

export const CREATE_COMPETITION = {
  type: CompetitionType,
  args: {
    idCompetition: { type: GraphQLInt },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    areaName: { type: GraphQLString },
  },
  async resolve(_: any, args: Competitions) {
    const { idCompetition, name, code, areaName } = args;
    const result = await Competitions.insert({
      idCompetition: idCompetition,
      name: name,
      code,
      areaName,
    });
    //console.dir(result)
    return {
      ...args,
      idCompetition: result.identifiers[0].idCompetition,
    };
  },
};

export const DELETE_COMPETITION = {
  type: GraphQLBoolean,
  args: {
    idCompetition: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const result = await Competitions.delete({
      idCompetition: args.idCompetition,
    });
    return result.affected ?? 0 > 0 ? true : false;
  },
};

export const UPDATE_COMPETITION = {
  type: MessageType,
  args: {
    idCompetition: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    areaName: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    //console.log(args)
    const result = await Competitions.update(
      { idCompetition: args.idCompetition },
      { ...args }
    );
    console.log(result);
    const success = result.affected ?? 0 > 0 ? true : false;
    return {
      success: success,
      message: success
        ? "competition updated successfully"
        : "error updating data",
    };
  },
};
