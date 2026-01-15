import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {

  private apiUrl = 'http://localhost:8080/api/ai/chat';

  constructor(private http: HttpClient) {}
askAI(question: string) {
  return this.http.post<any>(
    'http://localhost:8080/api/ai/chat',
    { message: question }
  );
}

}
