import axios from "axios";
import { FOOTBALL_URL } from "../config";
import { Team } from "../Entities/Team";
import { importPlayer } from "./playerService";

export async function getPlayerByTeam(idCompetition: number, idTeam: number) {
  return axios
    .get(`${FOOTBALL_URL}/teams/${idTeam}`)
    .then(async (response) => {
      if (response.status == 200) {
        const {
          id: idTeam,
          name,
          tla,
          shortName,
          area,
          email,
          squad,
        } = response.data;
        const { name: areaName } = area;
        const params = {
          idTeam,
          name,
          tla,
          shortName,
          areaName,
          email,
          idCompetition,
        };
        await Team.save({ ...params });
        squad.map((player: any) => {
          const {
            id: idPlayer,
            name,
            position,
            dateOfBirth,
            countryOfBirth,
            nationality,
          } = player;
          importPlayer(
            {
              idPlayer,
              name,
              position,
              dateOfBirth,
              countryOfBirth,
              nationality,
            },
            idTeam
          );
        });
        return { success: true, message: "Competition migrated sucessfully" };
      } else {
        return { success: false, message: "team was not migrated" };
      }
    })
    .catch((error) => {
      return { success: false, message: `Error! ${error}` };
    });
}
