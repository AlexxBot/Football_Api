import { resolve } from "path";
import { json } from "stream/consumers";
import { Player } from "../Entities/Player";

export async function importPlayer(
  player: any,
  idTeam: number
): Promise<String> {
  await Player.save({ ...player, idTeam });
  return "player added";
}
