
import {FOOTBALL_URL, headers } from "../config";
import { Competition } from "../Entities/Competition";
import { getPlayerByTeam } from "./teamService";
import axios from "axios";

export async function getTeamsByLeagueCode(leagueCode: String) {
  return axios
    .get(`${FOOTBALL_URL}/competitions/${leagueCode}/teams`, { headers })
    .then(async (response) => {
      if (response.status == 200) {
        const { competition, teams } = response.data;
        const { id: idCompetition, name, code, area } = competition;
        const { name: areaName } = area;
        const params = { idCompetition, name, code, areaName };

        await Competition.save({ ...params });
        teams.map((team: any) => {
          const { id: idTeam } = team;
          getPlayerByTeam(idCompetition, idTeam);
        });
        return { success: true, message: "Competition migrated sucessfully" };
      } else{
        return { success: false, message: `Competition was not migrated` };
      }
    })
    .catch((error) => {
      return { success: false, message: `Error! ${error}` };
    });
}
