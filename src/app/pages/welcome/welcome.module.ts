import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { WelcomePage } from './welcome.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: WelcomePage
	}
];


@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [WelcomePage],
	entryComponents: [WelcomePage]
})
export class WelcomeModule {

}