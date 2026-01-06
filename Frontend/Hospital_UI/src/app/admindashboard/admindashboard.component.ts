import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminAuthService } from '../admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit {

patients:Patient[]=[];

  constructor(private patientService:PatientService,private adminauthService:AdminAuthService,private router:Router){}

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

    logout(){
this.adminauthService.logout();
this.router.navigate(['home'])

    }
  
}
