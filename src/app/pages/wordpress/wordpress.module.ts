import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PipesModule } from '@pipes/pipes.module';

import { WordPressItemPage } from './item/wordpress.item.page';
import { WordPressListPage } from './list/wordpress.list.page';
import { WordpressService } from './wordpress.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WordPressListPage
  },
  {
    path: ':id',
    component: WordPressItemPage
  }
];

@NgModule({
  imports: [IonicModule, PipesModule, RouterModule.forChild(routes)],
  declarations: [WordPressItemPage, WordPressListPage],
  providers: [WordpressService]
})
export class WordpressModule {}
