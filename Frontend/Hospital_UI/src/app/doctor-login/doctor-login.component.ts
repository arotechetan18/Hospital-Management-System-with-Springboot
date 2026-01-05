import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DoctorAuthService } from '../doctor-auth.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.css'
})
export class DoctorLoginComponent {

  constructor(private router:Router,private doctorAuthService:DoctorAuthService){}

  username:string='';
  password:string='';

  inValidLogin=false;

  checkLogin(){
    if(this.doctorAuthService.authenticate(this.username,this.password  )){
 
      this.router.navigate(['doctordashboard'])
   this.inValidLogin=false;
    }else{
     this.inValidLogin=true;
      alert("Wrong Credentials")
      this.router.navigate(['home'])
      
    
    }
  }
}
