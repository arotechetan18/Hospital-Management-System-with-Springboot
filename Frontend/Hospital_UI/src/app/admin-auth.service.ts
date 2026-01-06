import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor() { }

  authenticate(username2:string,password2:string){
    if(username2=='chetan'&&password2=='chetan1234'){
      sessionStorage.setItem('username2',username2);

      return true
    }
    else{
    return  false

    }
  }

  isUserLogIn(){
    console.log("user log in zaala ahe")

 let user= sessionStorage.getItem('username2');

 return !(user==null);
  }

  logout(){
    sessionStorage.removeItem('username2');
  }
}
