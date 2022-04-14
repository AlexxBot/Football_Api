//idTeam, name, tla, shortName, areaName, email, idCompetition

import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Competition } from "./Competition";
import { Player } from "./Player";

@Entity()
export class Team extends BaseEntity {
  @PrimaryColumn()
  idTeam: number;
  @Column({nullable: true})
  name: string;
  @Column({nullable: true})
  tla: string;
  @Column({nullable: true})
  shortName: string;
  @Column({nullable: true})
  areaName: string;
  @Column({nullable: true})
  email: string;
  @ManyToOne(() => Competition, (competition) => competition.idCompetition)
  @JoinColumn()
  idCompetition: number;
  @OneToMany(() => Player, (player) => player.idPlayer, { eager: true })
  @JoinColumn()
  players: Player[];
}
