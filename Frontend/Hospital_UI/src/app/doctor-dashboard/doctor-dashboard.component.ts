import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent {

constructor(private patienService:PatientService){}

  patients:Patient[]=[];

  ngOnInit():void
  {
    this.getPatients();
  }

  getPatients(){

    this.patienService.getPatientList().subscribe(data=>{
      this.patients=data;
    })

  }
}
