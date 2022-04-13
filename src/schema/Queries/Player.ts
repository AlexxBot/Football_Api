import { GraphQLList, GraphQLString } from "graphql";
import { getManager } from "typeorm";
import { Competition } from "../../Entities/Competition";
import { Player } from "../../Entities/Player";
import { Team } from "../../Entities/Team";
import {
  PlayerByTeamType,
  PlayersResponse,
  PlayerType,
} from "../typeDefs/Player";

export const GET_PLAYERS = {
  type: new GraphQLList(PlayerType),
  async resolve() {
    const result = await Player.find();
    return result;
  },
};

export const GET_PLAYERS_BY_COMPETITION_TEAM = {
  type: /* new GraphQLList(PlayerByTeamType) */ PlayersResponse,
  args: {
    leagueCode: { type: GraphQLString },
    teamName: { type: GraphQLString! },
  },
  async resolve(_: any, { leagueCode, teamName }: any) {
    const competition = await Competition.findOne({
      where: {
        code: leagueCode,
      },
    });
    if (competition) {
      const result = await getManager()
        .createQueryBuilder(Team, "team")
        .select([
          "player.idPlayer as idplayer",
          "player.name as playername",
          "player.position as position",
          "player.dateOfBirth as dateofbirth",
          "player.countryOfBirth as countryofbirth",
          "player.nationality as nationality",
        ])
        .where("team.idCompetition = :idCompetition", {
          idCompetition: competition.idCompetition,
        })
        .innerJoin(Player, "player", "team.idTeam = player.idTeam");

      if (teamName) {
        result.where("team.name = :name", { name: teamName });
      }
      const players = await result.getRawMany();
      const resultPretty = players.map((player) => ({
        idPlayer: player.idplayer,
        name: player.playername,
        position: player.position,
        dateOfBirth: player.dateofbirth,
        countryOfBirth: player.countryofbirth,
        nationality: player.nationality,
      }));
      return { response: { success: true, message: "" }, players: resultPretty };
    } else {
      return {
        response: {
          success: false,
          message: `Competition with leagueCode ${leagueCode} doesnt exist`,
        },
        players: [],
      };
    }
  },
};
