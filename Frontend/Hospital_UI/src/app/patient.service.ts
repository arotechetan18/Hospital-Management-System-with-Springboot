import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = "http://localhost:8080/api/v1/patients";

  constructor(private httpClient: HttpClient) { }

  // GET all patients
  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.baseUrl);
  }

  // CREATE patient
  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(this.baseUrl, patient);
  }

  // DELETE patient
  delete(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  // GET patient by ID
  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  // UPDATE patient
  updatePatient(id: number, patient: Patient): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, patient);
  }

}
