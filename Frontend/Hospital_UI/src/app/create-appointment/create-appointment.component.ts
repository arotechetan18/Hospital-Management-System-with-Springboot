import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {

  appointment:Appointment=new Appointment();

  constructor(private appointmentService:AppointmentService,private router:Router){}
saveAppointment(){
  console.log("Role:", localStorage.getItem('role'));

  this.appointmentService.createAppointment(this.appointment).subscribe({
    next: res => {
      console.log("Saved", res);
      this.router.navigate(['/appointmentlist']);
    },
    error: err => console.error(err)
  });
}


  onSubmit(){
    this.saveAppointment();

  }

  goToappointment(){
    this.router.navigate(['/appointmentlist'])
  }
}
