import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ChatService } from './services/chat.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  bootstrap: [AppComponent],
  providers: [ChatService],
  declarations: [AppComponent, HomeComponent, ChatComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule]
})
export class AppModule { }
