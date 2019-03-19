import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
	messages: string[] = [];

  add(message: any) {
  	if (message) {
  		this.messages.push(String(message));
  	}
  }

  clear() {
    this.messages.length = 0;
  }
}
