import { Component } from '@angular/core';
import { AdminAuthService } from '../admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  username:string="";
  password:string="";
  inValidLogin=false;

  constructor(private adminAuthservice:AdminAuthService,private router:Router){}

  checkLogin(){
    if(this.adminAuthservice.authenticate(this.username,this.password)){
this.router.navigate(['admin']);
this.inValidLogin=false;

    }else{
      this.inValidLogin=true;
      alert("wrong credentials...")
      this.router.navigate(['home'])
    }
  }
}
