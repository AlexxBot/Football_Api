import {
  BaseEntity,
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  JoinColumn,
} from "typeorm";
import { Team } from "./Team";

@Entity()
export class Competition extends BaseEntity {
  @PrimaryColumn()
  idCompetition: number;
  @Column({nullable: true})
  name: string;
  @Column({nullable: true})
  code: string;
  @Column({nullable: true})
  areaName: string;

  @OneToMany(() => Team, (team) => team.idCompetition)
  @JoinColumn()
  teams: Team[];
 
}
