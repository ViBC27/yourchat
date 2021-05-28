import { SocketType } from './typings';
import { createServer } from 'http';
import { Server } from 'socket.io'
import express from 'express';

const corsOptions = {
    origin: ['http://localhost:4200']
}

const app = express();
const server = createServer(app);
const port = process.env.PORT || 3000;
const socketServer = new Server(server, { cors: corsOptions });

server.listen(port, () => {
    console.log(`🚀  Socket Server ready at ${port}.`);
    server.on('close', () => console.log(`Socket Server is closed.`));
    server.on('error', error => console.error(`Socket Server error: ${error.message}.`));
});

socketServer.on('connection', (socket: SocketType) => {

    // TODO: Remove
    console.log('Conectado!');

    socket.on('user', nickname => {
        socket.nickname = nickname;

        socket.emit('Welcome', {
            message: `Welcome, ${socket.nickname}.`,
            nickname: socket.nickname,
            createdAt: new Date(),
            system: true,
        });

        socket.broadcast.emit('join', {
            message: `${socket.nickname} is on.`,
            nickname: socket.nickname,
            createdAt: new Date(),
            system: true,
        });
    });

    socket.on('message', message => {
        console.log(`${socket.nickname} > ${message}`);
        socket.broadcast.emit('message', {
            message: message.toString(),
            nickname: socket.nickname,
            createdAt: new Date(),
            system: false,
        });
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('end', {
            message: `${socket.nickname} is off.`,
            nickname: socket.nickname,
            createdAt: new Date(),
            system: true,
        });
    });
});