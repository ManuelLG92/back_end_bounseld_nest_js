import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Record } from '../../records/entity/records.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column('varchar', { length: 60 })
  name: string;

  @OneToMany(() => Record, (record) => record.user) records: Record[];
}
