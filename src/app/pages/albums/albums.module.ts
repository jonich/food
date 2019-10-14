import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipes/pipes.module';
import { AlbumPage } from './album.page';
import { AlbumsPage } from './albums.page';
import { RouterModule, Routes } from '@angular/router';
import { FacebookApiService } from '@services/facebook-api.service';

const routes: Routes = [
  {
    path: ':id',
    component: AlbumPage
  },
  {
    path: '',
    component: AlbumsPage
  }
];

@NgModule({
  imports: [IonicModule, PipesModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [AlbumPage, AlbumsPage],
  providers: [FacebookApiService]
})
export class AlbumsModule {}
