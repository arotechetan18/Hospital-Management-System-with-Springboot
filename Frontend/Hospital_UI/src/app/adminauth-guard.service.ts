import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuardService implements CanActivate{

  constructor(private adminAuthservice:AdminAuthService,private router:Router) { }

  canActivate(){
    
    if(this.adminAuthservice.isUserLogIn()){
      return true;

    }else{
this.router.navigate(['adminlogin']);
return false;
    }
  }
}
