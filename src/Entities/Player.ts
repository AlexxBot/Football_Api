//id, name, position, dataOfBirth, contryOfBirth, nationality, idteam

import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Team } from "./Team";

@Entity()
export class Player extends BaseEntity {
  @PrimaryColumn()
  idPlayer: number;
  @Column({nullable: true})
  name: string;
  @Column({nullable: true})
  position: string;
  @Column({nullable: true})
  dateOfBirth: Date;
  @Column({nullable: true})
  countryOfBirth: string;
  @Column({nullable: true})
  nationality: string;

  @ManyToOne(() => Team, (team) => team.idTeam)
  idTeam: number;
}
