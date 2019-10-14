import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.authenticated) {
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
