import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
  const expectedRole = route.data['role'].trim().toUpperCase();
  const userRole = this.authService.getUserType()?.trim().toUpperCase();

  if (userRole === expectedRole) return true;

  this.router.navigate(['/login']);
  return false;
}

}
