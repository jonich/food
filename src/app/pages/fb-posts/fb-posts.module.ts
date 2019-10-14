import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FbPostPage } from './fb-post.page';
import { FbPostsService } from './fb-posts.service';
import { FbPostsPage } from './fb-posts.page';
import { PipesModule } from '@pipes/pipes.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FbPostsPage
  },
  {
    path: ':id',
    component: FbPostPage
  }
];

@NgModule({
  imports: [IonicModule, PipesModule, RouterModule.forChild(routes)],
  declarations: [FbPostsPage, FbPostPage],
  providers: [FbPostsService]
})
export class FbPostsModule {}
