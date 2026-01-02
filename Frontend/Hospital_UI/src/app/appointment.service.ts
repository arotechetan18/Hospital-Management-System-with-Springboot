import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpclient:HttpClient) { }

    private baseUrl="http://localhost:8080/api/v2/appointments"
  
    getAllappointments():Observable<Appointment[]>{
      return this.httpclient.get<Appointment[]>(`${this.baseUrl}`)
    }

    createAppointment(appointment:Appointment):Observable<Appointment>{

      return this.httpclient.post<Appointment>(`${this.baseUrl}/insert`,appointment)
    }

    deleteAppointment(id:number):Observable<object>{
      return this.httpclient.delete(`${this.baseUrl}/${id}`)
    }
}

