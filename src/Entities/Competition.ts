import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Competitions extends BaseEntity {
    @PrimaryGeneratedColumn()
    idCompetition: number;
    @Column()
    name: string;
    @Column()
    code: string;
    @Column()
    areaName: string;
}