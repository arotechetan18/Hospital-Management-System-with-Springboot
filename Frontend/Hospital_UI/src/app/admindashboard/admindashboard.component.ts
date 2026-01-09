import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit {

patients:Patient[]=[];

  constructor(private patientService:PatientService,private router:Router,private authService:AuthService){}

  ngOnInit():void{
    this.getPatients();
  }

    getPatients(){
      this.patientService.getPatientList().subscribe(data=>{
     this.patients=data;
      })
    }

    delete(id:number){
      this.patientService.delete(id).subscribe(data=>{
        console.log(data);
      this.getPatients();
      })

    }

   
  logout() {
    this.authService.logout();
  }
  
}
