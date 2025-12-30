import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpclient:HttpClient) { }

    private baseUrl="http://localhost:8080/api/v2"
  
    getAllappointments():Observable<Appointment[]>{
      return this.httpclient.get<Appointment[]>(`${this.baseUrl}`)
    }
}

