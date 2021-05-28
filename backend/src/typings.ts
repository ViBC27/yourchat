import { Socket } from 'socket.io';

export type SocketData = {
    nickname: string;
};

export type SocketEvent = {
    nickname: string;
    message: string;
    createdAt: Date;
    system: boolean;
};

export type SocketType = Socket & SocketData;
