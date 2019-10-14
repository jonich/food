import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Cart } from './cart';
import { ChangeQuantityService } from './change-quantity.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './cart.html'
})
export class CartPage {
  cartItems: any[] = [];
  total: number = 0;

  constructor(
    public cart: Cart,
    private router: Router,
    private quantityService: ChangeQuantityService,
    private toastCtrl: ToastController
  ) {}

  ionViewWillEnter() {
    this.loadCart();
  }

  changeQuantity(item, slidingItem) {
    slidingItem.close();
    const newQuantity = this.quantityService.changeQuantity(item.quantity).then(newQty => {
      this.cart.updateQuantity(item, newQty);
      this.loadCart();
      this.toastCtrl.create({ message: 'Quantity changed', duration: 3000 });
    });
  }

  goToCheckout() {
    this.router.navigateByUrl('/checkout');
  }

  async remove(item) {
    this.cart.deleteItem(item);
    this.loadCart();
    const alert = await this.toastCtrl.create({ message: 'Item removed from cart', duration: 3000 });
    alert.present();
  }

  private loadCart() {
    this.cartItems = this.cart.getAll();

       console.log(this.cartItems);

    this.total = this.cart.totalAmount;
  }
}
