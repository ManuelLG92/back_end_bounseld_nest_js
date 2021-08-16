import { User } from '../../users/entity/user.entity';
export declare class Record {
    id: number;
    socketId: string;
    openAt: Date;
    closedAt: Date;
    userId: number;
    user: User;
}
