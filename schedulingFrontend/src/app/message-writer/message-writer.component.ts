import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-writer',
  templateUrl: './message-writer.component.html',
  styleUrls: ['./message-writer.component.css']
})
export class MessageWriterComponent implements OnInit {
	// message: string;
	// messages: string[] = [];
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  	// this.messages = this.messageService.messages;
  }

}
