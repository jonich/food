import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CustomComponentsModule } from '../../components/custom-components.module';
import { DynamicFormModule } from '../../components/forms/dynamic-form.module';
import { PipesModule } from '@pipes/pipes.module';
import { DeliveryDataCache } from './delivery-data-cache';
import { DeliveryMethodSelectorPage } from './delivery-method-selector.page';
import { DineInPage } from './dine-in.page';
import { HomeDeliveryPage } from './home-delivery.page';
import { OrderProcessor } from './order-processor';
import { TakeAwayPage } from './take-away.page';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule} from '@agm/core';
import { Config } from '../../../config';

const routes: Routes = [
	{
		path: '',
		component: DeliveryMethodSelectorPage
	},
	{
		path: 'take-away',
		component: TakeAwayPage
	},
	{
		path: 'home-delivery',
		component: HomeDeliveryPage
	},
	{
		path: 'dine-in',
		component: DineInPage
	}
];

@NgModule({
	imports: [
		IonicModule,
		PipesModule,
		CustomComponentsModule,
		DynamicFormModule,
		CommonModule,
		AgmCoreModule,
		RouterModule.forChild(routes)
	],
	declarations: [DeliveryMethodSelectorPage, HomeDeliveryPage, TakeAwayPage, DineInPage],
	entryComponents: [DeliveryMethodSelectorPage, HomeDeliveryPage, TakeAwayPage, DineInPage],
	providers: [OrderProcessor, DeliveryDataCache]
})
export class OrderProcessingModule {

}