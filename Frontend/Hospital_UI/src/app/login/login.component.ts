import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'; 
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
  loginData = {
    username: '',
    password: ''
  };

  constructor(
  private loginService: LoginService,
  private router: Router,
  private authService: AuthService
) {}

onLogin() {
  this.loginService.login(this.loginData).subscribe(
    (response: any) => {
      const role = response.userType?.trim().toUpperCase(); 
      this.authService.setUser(role);                    
      localStorage.setItem('username', response.username);

      if (role === 'ADMIN') {
        this.router.navigate(['/admin']);
      } else if (role === 'DOCTOR') {
        this.router.navigate(['/doctordashboard']);
      }
    },
    error => {
      alert("Invalid Username or Password!");
    }
  );
}


}
