import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit{


  appointments:Appointment[]=[];

  
  ngOnInit():void{
    this.getAppointments();
  }

  constructor(private appoinmentService:AppointmentService){}

  getAppointments(){
    this.appoinmentService.getAllappointments().subscribe(data=>
      this.appointments=data
    )
  }

  delete(id:number){
    this.appoinmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
  }

}
