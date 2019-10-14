import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CustomComponentsModule } from '@components/custom-components.module';
import { PipesModule } from '@pipes/pipes.module';
import { FavoritesPage } from './favorites.page';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPage
  }
];

@NgModule({
  imports: [IonicModule, CommonModule, PipesModule, CustomComponentsModule, RouterModule.forChild(routes)],
  declarations: [FavoritesPage],
  entryComponents: [FavoritesPage]
})
export class FavoritesModule {}
