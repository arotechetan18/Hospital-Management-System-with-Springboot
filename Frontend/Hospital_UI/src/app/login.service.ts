import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8080/api/login"; 

  constructor(private httpClient: HttpClient) { }

  login(loginData: any) {
    return this.httpClient.post(`${this.baseUrl}`, loginData);
  }
}