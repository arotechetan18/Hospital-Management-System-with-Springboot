import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit {

patients:Patient[]=[];

  constructor(private patientService:PatientService){}

  ngOnInit():void{
    this.getPatients();
  }

    getPatients(){
      this.patientService.getPatientList().subscribe(data=>{
     this.patients=data;
      })

    }
  
}
