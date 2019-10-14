import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CustomComponentsModule } from '@components/custom-components.module';
import { DynamicFormModule } from '@components/forms/dynamic-form.module';
import { PipesModule } from '@pipes/pipes.module';
import { ContactUsPage } from './contact-us';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ContactUsPage
	}
];


@NgModule({
	imports: [
		IonicModule,
		PipesModule,
		CustomComponentsModule,
		DynamicFormModule,
		AgmCoreModule,
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [ContactUsPage],
	entryComponents: [ContactUsPage],
	providers: []
})
export class ContactUsModule {

}