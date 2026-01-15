import { Component } from '@angular/core';
import { AiChatService } from '../ai-chat.service';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
    styleUrls: ['./ai-chat.component.css'] 
})
export class AiChatComponent {

  question = '';
  response = '';
  loading = false;

  constructor(private aiService: AiChatService) {}

  send() {
    if (!this.question.trim()) return;

    this.loading = true;
    this.response = '';

    this.aiService.askAI(this.question).subscribe({
   next: (res: any) => {
    // Keep only 10 lines
    const lines = res.reply.split('\n').slice(0, 10).join('\n');
    this.response = lines;
    this.loading = false;
},

      error: () => {
        this.response = 'Error while contacting AI';
        this.loading = false;
      }
    });
  }
}
