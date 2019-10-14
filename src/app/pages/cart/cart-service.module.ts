import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Cart } from './cart';
import { ChangeQuantityService } from './change-quantity.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule, CommonModule],
  providers: [Cart, ChangeQuantityService]
})
export class CartServiceModule {
  static forRoot() {
    return {
      ngModule: CartServiceModule,
      providers: [Cart, ChangeQuantityService]
    };
  }
}
