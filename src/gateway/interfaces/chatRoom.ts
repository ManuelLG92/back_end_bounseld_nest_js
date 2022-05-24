export interface ChatRoom {
  id: string;
  from: string;
  to?: string;
  startedAt?: Date;
  endedAt?: Date;
}
