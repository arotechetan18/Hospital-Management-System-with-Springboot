import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

setUser(userType: string) {
  localStorage.setItem('userType', userType.toUpperCase());
  localStorage.setItem('isLoggedIn', 'true');
}


  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUserType(): string | null {
    return localStorage.getItem('userType');
  }

 logout() {
    localStorage.clear();        
    this.router.navigate(['/']); 
  }
}
