import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent implements OnInit {

constructor(private patienService:PatientService,private router:Router){}

  patients:Patient[]=[];

  id:number=0
  ngOnInit():void
  {
    this.getPatients();
  }

  getPatients(){

    this.patienService.getPatientList().subscribe(data=>{
      this.patients=data;
    })

  }

  update(id?:number){

    this.router.navigate(['update-patient',id])
  }

deletePatient(id: number) {
  this.patienService.delete(id).subscribe(() => {
    this.getPatients();
  });
}

view(id:number){

  this.router.navigate(['view-patient',id])
}


}
