import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ControlDescriptor } from '../../components/forms/control';
import { ControlBase } from '../../components/forms/control-base';
import { ControlsService } from '../../components/forms/controls.service';
import { DataProvider } from '../../services/data/base.data-provider';
import { Cart } from '../cart/cart';
import { HomePage } from '../home/home.page';
import { DeliveryDataCache } from './delivery-data-cache';
import { OrderProcessor } from './order-processor';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dine-in.html'
})
export class DineInPage {
  submitted: boolean = false;
  controls: ControlBase<any>[];
  form: FormGroup;
  business: any;
  initialModel: any;

  private descriptors: ControlDescriptor[] = [
    {
      type: 'select',
      name: 'table',
      required: true,
      title: 'Table',
      options: [{ key: 'code1', label: 'AB121' }, { key: 'code2', label: 'BA101' }, { key: 'code3', label: 'CC207' }]
    },
    { type: 'text', name: 'email', required: true, title: 'Email', validators: [Validators.email] },
    { type: 'text', name: 'phone', required: true, title: 'Phone' },
    { type: 'textarea', name: 'notes', title: 'Order notes' }
  ];

  constructor(
    private controlsService: ControlsService,
    private data: DataProvider,
    private orderProcessor: OrderProcessor,
    private cart: Cart,
    private deliveryDataCache: DeliveryDataCache,
    private toastr: ToastController,
    private router: Router
  ) {
    this.controls = controlsService.getControls(this.descriptors);
    this.form = new FormGroup({});

    data.getBusiness().then(business => {
      this.business = business;
    });

    this.initialModel = deliveryDataCache.getDineInData();
  }

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      let restaurant = {
        name: this.business.storeName,
        address: this.business.address,
        email: this.business.email
      };
      let destination = this.form.value;
      destination.table = this.form.value.table.label;

      this.orderProcessor.sendDineInConfirmation(this.cart.getAll(), restaurant, destination).then(() => {
        this.deliveryDataCache.saveDineInData(destination);
        this.cart.flush();
        this.router.navigateByUrl('/');
        this.toastr.create({ message: 'Your order has been submitted', duration: 3000 }).then(resp => {
          resp.present();
        });
      });
    }
  }
}
