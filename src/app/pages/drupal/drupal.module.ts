import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PipesModule } from '@pipes/pipes.module';

import { DrupalItemPage } from './item/drupal.item.page';
import { DrupalListPage } from './list/drupal.list.page';
import { DrupalService } from './drupal.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DrupalListPage
  },
  {
    path: ':id',
    component: DrupalItemPage
  }
];

@NgModule({
  imports: [IonicModule, PipesModule, RouterModule.forChild(routes)],
  declarations: [DrupalItemPage, DrupalListPage],
  providers: [DrupalService]
})
export class DrupalModule {}
