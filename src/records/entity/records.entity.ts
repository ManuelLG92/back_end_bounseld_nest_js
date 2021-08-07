import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entity/user.entity';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column('varchar', { length: 255 })
  socketId: string;

  @CreateDateColumn({ type: 'timestamp' })
  openAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  closedAt: Date;

  @Column('int')
  userId: number;

  @ManyToOne(() => User, (user) => user.records)
  user: User;
}
