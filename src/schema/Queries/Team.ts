import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLString,
} from "graphql";
import { getManager } from "typeorm";
import { Player } from "../../Entities/Player";
import { Team } from "../../Entities/Team";
import { TeamPlayersType, TeamType } from "../typeDefs/Team";

export const GET_TEAMS = {
  type: new GraphQLList(TeamType),
  async resolve() {
    const result = await Team.find();
    return result;
  },
};

export const GET_TEAM_PLAYERS = {
  type: TeamPlayersType,
  args: {
    name: { type: GraphQLString },
    withPlayers: { type: GraphQLBoolean! },
  },
  async resolve(_: any, { name, withPlayers = false }: any) {
    const result = await getManager()
      .createQueryBuilder(Team, "team")
      .select([
        "team.idTeam as idteam",
        "team.name as name",
        "team.tla as tla",
        "team.shortName as shortname",
        "team.areaName as areaname",
        "team.email as email",
        "player.idPlayer as idplayer",
        "player.name as playername",
        "player.position as position",
        "player.dateOfBirth as dateofbirth",
        "player.countryOfBirth as countryofbirth",
        "player.nationality as nationality",
      ])
      .where("team.name = :name", { name: name })
      .innerJoin(Player, "player", "team.idTeam = player.idTeam")
      .getRawMany();
    if (result.length > 0) {
      const resultPretty = {
        idTeam: result[0].idteam,
        name: result[0].name,
        tla: result[0].tla,
        shortName: result[0].shortname,
        areaName: result[0].areaname,
        email: result[0].email,
        players: withPlayers
          ? result.map((player) => ({
              idPlayer: player.idplayer,
              name: player.playername,
              position: player.position,
              dateOfBirth: player.dateofbirth,
              countryOfBirth: player.countryofbirth,
              nationality: player.nationality,
            }))
          : [],
      };
      return resultPretty;
    } else {
      return null;
    }
  },
};
