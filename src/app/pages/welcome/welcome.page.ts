import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '@services/auth.service';
import { DataProvider } from '@services/data/base.data-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.scss']
})
export class WelcomePage {
  public items: any[];

  slideOpts = {
    initialSlide: 0,
    speed: 100,
    autoplay: 3000
  };

  constructor(data: DataProvider, private router: Router, private auth: AuthService) {
    data.getBusiness().then(business => {
      this.items = business.images;
      console.log(business);
    });
  }

  enterTheApp() {
    this.auth.signInWelcome();
    this.postSignIn();
  }

  loginWithFacebook() {
    this.auth.signInWithFacebook().then(() => this.postSignIn());
  }

  loginWithGoogle() {
    this.auth.signInWithGoogle().then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigateByUrl('/home');
  }
}
