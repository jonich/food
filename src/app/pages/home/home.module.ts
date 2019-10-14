import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { HomePage } from './home.page';

const routes: Routes = [
	{
		path: '',
		component: HomePage
	}
];

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [HomePage],
	entryComponents: [HomePage]
})
export class HomeModule {

}