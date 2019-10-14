import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class ChangeQuantityService {
	constructor(private alertController: AlertController) {

	}

	async changeQuantity(quantity: number = null): Promise<number> {
		let title;
		let okButton;
		if (quantity) {
			title = 'Update quantity';
			okButton = 'Update';
		} else {
			title = 'Add to cart';
			okButton = 'Add';
			quantity = 1;
		}

		let resolveFunction: (value: any) => void;
		let promise = new Promise<number>(resolve => {
			resolveFunction = resolve;
		});

		const alert = await this.alertController.create({
			header: title,
			inputs: [
				{
					name: 'quantity',
					placeholder: 'Quantity',
					value: quantity as any,
					min: 1,
					type: 'number'
				}
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: okButton,
					handler: (data) => {
						if (data.quantity > 0) {
							resolveFunction(parseInt(data.quantity, 10));
						} else {
							resolveFunction(0);
						}
					}
				}
			]
		});
		alert.present();

		return promise;
	}
}
