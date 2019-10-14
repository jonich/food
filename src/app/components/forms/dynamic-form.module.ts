import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ControlsService } from './controls.service';
import { DynamicControlsService } from './dynamic-controls.service';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
	imports: [IonicModule, CommonModule, ReactiveFormsModule, FormsModule],
	providers: [DynamicControlsService, ControlsService],
	declarations: [DynamicFormComponent],
	exports: [DynamicFormComponent]
})
export class DynamicFormModule {

}