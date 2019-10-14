import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CustomComponentsModule } from '@components/custom-components.module';
import { PipesModule } from '@pipes/pipes.module';
import { CartPage } from './cart.page';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  }
];

@NgModule({
  imports: [IonicModule, CommonModule, PipesModule, CustomComponentsModule, RouterModule.forChild(routes)],
  declarations: [CartPage]
})
export class CartModule {}
