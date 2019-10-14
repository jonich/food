import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Resolve } from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthService } from './auth.service';

@Injectable()
export class AuthResolver implements Resolve<any> {
  constructor(private authService: AuthService, public router: Router) {}

  resolve() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.authService.setUser(user);
          this.router.navigate(['/home']);
        }
        resolve(user);
      });
    });
  }
}
