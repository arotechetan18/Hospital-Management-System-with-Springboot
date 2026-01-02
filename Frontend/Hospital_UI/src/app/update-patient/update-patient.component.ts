import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent implements OnInit {

  id:number=0
  constructor(private route:ActivatedRoute,private patientService:PatientService,private router:Router){

  }

ngOnInit():void{
  this.id=this.route.snapshot.params['id'];
this.patientService.getPatientById(this.id).subscribe(data=>{
  this.patient=data
})
}



  patient:Patient=new Patient();

  onSubmit(){

    this.patientService.updatePatient(this.id,this.patient).subscribe(data=>{

      console.log(data);
      this.goToDoctorDashboard();
    });
  }
  
  goToDoctorDashboard(){

    this.router.navigate([`doctordashboard`])
  }

}
