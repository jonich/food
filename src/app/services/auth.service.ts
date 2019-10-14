import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { flatMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private user: firebase.User = null;
  private welcomeSignIn = null;
  private isUserEntered = null;

  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  setUser(user) {
    this.user = user;
  }

  auth(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      flatMap(auth => {
        if (!auth) {
          return of(false);
        }

        return of(true);
      })
    );
  }

  getName() {
    return this.user.displayName;
  }

  getEmail() {
    return this.user.email;
  }

  get authenticated(): boolean {
    return this.user !== null || this.welcomeSignIn;
  }

  get isEntered(): boolean {
    return this.isUserEntered;
  }

  get id(): string {
    return this.authenticated ? this.user.uid : '';
  }

  signIn(provider): Promise<any> {
    if (!(<any>window).cordova) {
      return this.afAuth.auth.signInWithPopup(provider).then(data => {
        this.router.navigateByUrl('/home');
      });
    } else {
      return this.afAuth.auth.signInWithRedirect(provider).then(() => {
        return this.afAuth.auth
          .getRedirectResult()
          .then(result => {
            if (result.credential) {
              // This gives you a Google Access Token.
              // const token = result.credential.accessToken;
            }
            const user = result.user;
            // This gives you a Google Access Token.
            // You can use it to access the Google API.
          })
          .catch(error => {
            // Handle Errors here.
            alert(error.message);
          });
      });
    }
  }

  signInWelcome() {
    this.isUserEntered = true;
    this.welcomeSignIn = true;
  }

  signInWithGoogle(): Promise<any> {
    this.isUserEntered = null;
    return this.signIn(new firebase.auth.GoogleAuthProvider());
  }

  signInWithFacebook(): Promise<any> {
    this.isUserEntered = null;
    return this.signIn(new firebase.auth.FacebookAuthProvider());
  }

  signOut(): Promise<any> {
    this.isUserEntered = null;
    this.welcomeSignIn = null;
    this.user = null;
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigateByUrl('/welcome');
    });
  }
}
