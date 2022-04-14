import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { resolve } from "path";
import { Competition } from "../../Entities/Competition";
import { getTeamsByLeagueCode } from "../../Services/competitionService";
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
  async resolve(_: any, args: Competition) {
    const { idCompetition, name, code, areaName } = args;
    const result = await Competition.insert({
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

export const IMPORT_LEAGUE = {
  type: MessageType,
  args : { 
    leagueCode: {type: GraphQLString }
  },
  async resolve(_: any, args: any){
    //console.log('leagueCode: ', args.leagueCode)
    const result = await getTeamsByLeagueCode(args.leagueCode)
    return result
  }
}

export const DELETE_COMPETITION = {
  type: GraphQLBoolean,
  args: {
    idCompetition: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const result = await Competition.delete({
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
    const result = await Competition.update(
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
