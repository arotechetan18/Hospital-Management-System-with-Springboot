import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthService {

  constructor() { }

  authenticate( username:string ,password:string){

  if(username=="chetan"&&password=="chetan12345"){
    sessionStorage.setItem('username',username);
    return true;

  }else{
    alert("wrong Credentials")
    return false;
  }
  }
}
