import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ControlDescriptor } from '@components/forms/control';
import { ControlBase } from '@components/forms/control-base';
import { ControlsService } from '@components/forms/controls.service';
import { DataProvider } from '@services/data/base.data-provider';
import { DeliveryDataCache } from './delivery-data-cache';
import { OrderProcessor } from './order-processor';
import { Cart } from '../cart/cart';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home-delivery.html'
})
export class HomeDeliveryPage {
  submitted: boolean = false;
  controls: ControlBase<any>[];
  form: FormGroup;
  initialModel: any;

  private descriptors: ControlDescriptor[] = [
    { type: 'text', name: 'firstName', required: true, title: 'First name' },
    { type: 'text', name: 'lastName', required: true, title: 'Last name' },
    { type: 'text', name: 'phoneNumber', required: true, title: 'Phone' },
    { type: 'text', name: 'email', required: true, title: 'Email', validators: [Validators.email] },
    { type: 'text', name: 'address', required: true, title: 'Address' },
    { type: 'text', name: 'zipCode', required: true, title: 'Zip' },
    { type: 'text', name: 'city', required: true, title: 'City' },
    { type: 'text', name: 'country', required: true, title: 'Country' }
  ];
  private business: any;

  constructor(
    private controlsService: ControlsService,
    private processor: OrderProcessor,
    private cart: Cart,
    private data: DataProvider,
    private deliveryDataCache: DeliveryDataCache,
    private toastr: ToastController,
    private route: Router
  ) {
    this.controls = controlsService.getControls(this.descriptors);
    this.form = new FormGroup({});

    data.getBusiness().then(business => {
      this.business = business;
    });

    this.initialModel = deliveryDataCache.getHomeDeliveryData();
  }

  async submit() {
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }

    let cart = this.cart.getAll();
    let deliveryData = this.form.value;

    this.processor.performHomeDelivery(cart, deliveryData, this.business.email).then(() => {
      this.cart.flush();
      this.form.reset();
      this.deliveryDataCache.saveHomeDeliveryData(deliveryData);
      this.route.navigateByUrl('/home');
      this.toastr.create({ message: 'Your order has been submitted', duration: 3000 }).then(resp => {
        resp.present();
      });
    });
  }
}
