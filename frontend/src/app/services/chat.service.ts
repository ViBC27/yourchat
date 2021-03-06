import io, { Socket } from 'socket.io-client';
import { SocketEvent } from '../app.typings';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private uri = 'http://localhost:3000';
  private socket: Socket;

  constructor() {
    this.socket = io(this.uri);
  }

  public sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  public sendNewUserMessage(nickname: string) {
    this.socket.emit('user', nickname);
  }

  public getMessages() {
    return new Observable<SocketEvent>(observer => {
      this.socket.on('welcome', (event: SocketEvent) => {
        observer.next(event);
      });

      this.socket.on('join', (event: SocketEvent) => {
        observer.next(event);
      });

      this.socket.on('message', (event: SocketEvent) => {
        observer.next(event);
      });

      this.socket.on('end', (event: SocketEvent) => {
        observer.next(event);
      });
    });
  }

}
