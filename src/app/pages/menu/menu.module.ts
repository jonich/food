import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CustomComponentsModule } from '@components/custom-components.module';
import { PipesModule } from '@pipes/pipes.module';
import { CategoriesPage } from './categories.page';
import { ProductPage } from './product.page';
import { ProductsPage } from './products.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesPage
  },
  {
    path: 'product/:catId/:id',
    component: ProductPage
  },
  {
    path: 'products/:id',
    component: ProductsPage
  }
];

@NgModule({
  imports: [ReactiveFormsModule, FormsModule, IonicModule, PipesModule, CustomComponentsModule, RouterModule.forChild(routes)],
  declarations: [CategoriesPage, ProductsPage, ProductPage],
  entryComponents: [CategoriesPage, ProductsPage, ProductPage]
})
export class MenuModule {}
