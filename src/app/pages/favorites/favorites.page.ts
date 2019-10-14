import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { FavoritesService } from '@services/favorites.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './favorites.html'
})
export class FavoritesPage {
  items: any[] = [];

  constructor(private toastCtrl: ToastController, private favorites: FavoritesService, private router: Router) {}

  ionViewWillEnter() {
    this.loadItems();
  }

  private loadItems() {
    this.items = this.favorites.getAll();
  }

  async remove(item) {
    this.favorites.deleteItem(item.guid);
    const alert = await this.toastCtrl.create({ message: 'Item removed from cart', duration: 3000 });
    alert.present();
    this.loadItems();
  }

  itemTapped(item) {
    this.router.navigateByUrl(`/product/${item.categoryId}/${item.guid}`);
  }
}
