import { ChatService } from 'src/app/services/chat.service';
import { Component, OnInit } from '@angular/core';
import { SocketEvent } from '../../app.typings';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public socketEvents: SocketEvent[] = [];
  public userData = {};

  constructor(private chatService: ChatService, private location: Location) { }

  sendMessage(message: string) {
    this.chatService.sendMessage(message);
  }

  ngOnInit() {
    const state: any = this.location.getState();
    this.userData = state.userData;
    this.chatService.getMessages().subscribe(event => {
      this.socketEvents.push(event);
    });
  }
}
