import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipes/pipes.module';
import { ArticlePage } from './article.page';
import { ArticlesPage } from './articles.page';
import { RouterModule, Routes } from '@angular/router';
import { FacebookApiService } from '@services/facebook-api.service';

const routes: Routes = [
  {
    path: '',
    component: ArticlesPage
  },
  {
    path: ':id',
    component: ArticlePage
  }
];

@NgModule({
  imports: [IonicModule, PipesModule, RouterModule.forChild(routes)],
  declarations: [ArticlesPage, ArticlePage],
  providers: [FacebookApiService]
})
export class ArticlesModule {}
