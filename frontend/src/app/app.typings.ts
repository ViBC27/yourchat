import { Socket } from 'socket.io';

export type SocketEvent = {
    nickname: string;
    message: string;
    createdAt: Date;
    system: boolean;
};
