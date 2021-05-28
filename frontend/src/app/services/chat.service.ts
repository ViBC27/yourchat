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

  public getMessages() {
    return new Observable<SocketEvent>(observer => {
      this.socket.on('message', (event: SocketEvent) => {
        observer.next(event);
      });
    });
  }
}
