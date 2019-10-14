import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataProvider } from '@services/data/base.data-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  genericPages;
  facebookPages;
  otherPages;
  newsPages;
  categories: any[];

  constructor(
    private menuCtrl: MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataProvider: DataProvider,
    private router: Router,
    public auth: AuthService
  ) {
    this.initializeApp();

    this.genericPages = [
      { title: 'Home', url: '/home', icon: 'home' },
      { title: 'Categories', url: '/categories', icon: 'apps' },
      { title: 'Favorites', url: '/favorites', icon: 'star' },
      { title: 'Cart', url: '/cart', icon: 'cart' }
    ];

    this.facebookPages = [
      { title: 'Events', url: '/events', icon: 'calendar' },
      { title: 'Albums', url: '/albums', icon: 'images' },
      { title: 'Posts', url: '/fb-posts', icon: 'book' }
    ];

    this.otherPages = [
      { title: 'Contact us', url: '/contact-us', icon: 'information-circle' }
    ];

    this.newsPages = [
      { title: 'Articles', url: '/articles', icon: 'paper' },
      { title: 'Wordpress', url: '/wp-posts', icon: 'logo-wordpress' },
      { title: 'Drupal', url: '/drupal-posts', icon: 'water' }
    ];

    this.loadCategories();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(url) {
    if (url) {
      this.router.navigateByUrl(url);
    }
    this.menuCtrl.close();
  }

  categoryTapped(item) {
    this.router.navigateByUrl('/products/' + item.guid);
    this.menuCtrl.close();
    return false;
  }

  get isSideMenuDisabled() {
    return this.router.url === '/welcome' || !this.auth.authenticated;
  }

  logOut() {
    this.auth.signOut();
  }

  private loadCategories() {
    this.dataProvider.getCategories().then(categories => {
      return (this.categories = categories);
    });
  }
}
