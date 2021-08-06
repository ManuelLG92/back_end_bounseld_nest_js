import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  socketId: string;

  @IsNotEmpty()
  @Column('varchar', { length: 60 })
  connections: string;

  @Column('int')
  userId: number;

  // @ManyToOne(() => User, (user) => user.records) user: User;

  @CreateDateColumn({ type: 'timestamp' })
  openAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  closedAt: Date;
}
