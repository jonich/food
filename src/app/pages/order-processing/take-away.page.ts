import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { DataProvider } from '../../services/data/base.data-provider';
import { Cart } from '../cart/cart';
import { DeliveryDataCache } from './delivery-data-cache';
import { OrderProcessor } from './order-processor';
import { Router } from '@angular/router';

@Component({
  templateUrl: './take-away.html',
  styleUrls: ['./take-away.page.scss'],
  selector: 'take-away-page'
})
export class TakeAwayPage {
  map: any;
  business: any;

  constructor(
    data: DataProvider,
    private alertController: AlertController,
    private cart: Cart,
    private processor: OrderProcessor,
    private router: Router,
    private deliveryDataCache: DeliveryDataCache,
    private toastr: ToastController
  ) {
    data.getBusiness().then(business => {
      this.map = business.map;
      this.business = business;
    });
  }

  submit() {
    let cart = this.cart.getAll();
    let restaurant = {
      name: this.business.storeName,
      address: this.business.address,
      email: this.business.email
    };

    this.getDestinationData().then(data => {
      if (!data) {
        return;
      }
      this.deliveryDataCache.saveTakeAwayData(data);
      this.processor.sendTakeAwayConfirmation(cart, restaurant, data).then(() => {
        this.cart.flush();
        this.router.navigateByUrl('/home');
        this.toastr.create({ message: 'Your order has been submitted', duration: 3000 }).then(resp => {
          resp.present();
        });
      });
    });
  }

  private getDestinationData() {
    let data = this.deliveryDataCache.getTakeAwayData() || {};

    return new Promise(resolve => {
      let alert = this.alertController
        .create({
          header: 'Confirmation',
          inputs: [
            {
              name: 'fullname',
              placeholder: 'Full name',
              value: data.fullname
            },
            {
              name: 'email',
              placeholder: 'Email',
              value: data.email
            },
            {
              name: 'phone',
              placeholder: 'Phone',
              value: data.phone
            }
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel'
            },
            {
              text: 'Confirm',
              handler: data => {
                if (data.fullname && data.email && data.phone) {
                  if (!Validators.email({ value: data.email } as any)) {
                    resolve(data);
                  } else {
                    this.toastr.create({ message: 'Please enter correct email', duration: 3000 }).then(resp => {
                      resp.present();
                    });
                    return false;
                  }
                } else {
                  this.toastr.create({ message: 'Please fill all fields', duration: 3000 }).then(resp => {
                    resp.present();
                  });
                  return false;
                }
              }
            }
          ]
        })
        .then(resp => {
          resp.present();
        });
    });
  }
}
