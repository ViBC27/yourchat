import { ChatService } from 'src/app/services/chat.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SocketEvent } from '../../app.typings';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public socketEvents: SocketEvent[] = [];
  public userMessageData: FormGroup;
  public moment = moment;
  public userData = {
    nickname: ''
  };

  constructor(private chatService: ChatService, private location: Location, private formBuilder: FormBuilder) {
    this.userMessageData = this.configureFormGroup();
  }

  configureFormGroup(): FormGroup {
    return this.formBuilder.group({
      message: ''
    });
  }

  sendMessage() {
    const { message } = this.userMessageData.value;
    const event: SocketEvent = {
      nickname: this.userData.nickname,
      createdAt: new Date(),
      system: false,
      message
    }

    this.socketEvents.push(event);
    this.chatService.sendMessage(message);
    this.userMessageData.controls['message'].setValue('');
  }

  ngOnInit() {
    const state: any = this.location.getState();
    this.userData = state.userData;
    this.chatService.sendNewUserMessage(this.userData.nickname);
    this.chatService.getMessages().subscribe(event => {
      this.socketEvents.push(event);
    });
  }
}
