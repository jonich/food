import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { GoogleMapsPage } from './google-maps.page';
import { RouterModule, Routes } from '@angular/router';
import { Config } from '../../../config';

const routes: Routes = [
	{
		path: '',
		component: GoogleMapsPage
	}
];

@NgModule({
	declarations: [GoogleMapsPage],
	entryComponents: [GoogleMapsPage],
	imports: [
		IonicModule,
		CommonModule,
		AgmCoreModule,
		RouterModule.forChild(routes)
	]
})

export class GoogleMapsModule {

}