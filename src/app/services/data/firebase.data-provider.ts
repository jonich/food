import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { first, map, tap, take } from 'rxjs/operators';
import { DataProvider } from './base.data-provider';

@Injectable()
export class FirebaseDataProvider extends DataProvider {
  constructor(private afDB: AngularFireDatabase) {
    super();
  }

  getArticles(): Promise<any[]> {
    return this.loadItems('news');
  }

  getArticle(guid: string): Promise<any[]> {
    return this.getArticles().then(articles => {
      return articles.find(article => article.guid === guid);
    });
  }

  getBusiness(): Promise<any> {
    return this.afDB
      .object<any>('business')
      .snapshotChanges()
      .pipe(
        map(action => ({ $key: action.key, ...action.payload.val() })),
        tap(item => this.initItem(item)),
        take(1)
      )
      .toPromise();
  }

  getCategories(): Promise<any[]> {
    return this.loadItems('categories').then(items => {
      items.forEach((x: any) => (x.icon = 'restaurant'));
      return items;
    });
  }

  getCategory(guid: string): Promise<any[]> {
    return this.getCategories().then(categories => {
      return categories.find(category => category.guid === guid);
    });
  }

  getFeaturedCategories(): Promise<any[]> {
    return this.getCategories().then(items => {
      return items.filter(x => x.featured);
    });
  }

  getFeaturedProduct(productId: string): Promise<any> {
    return this.getFeaturedProducts().then(items => items.find(x => x.$key === productId));
  }

  getFeaturedProducts(): Promise<any[]> {
    return this.loadItems('menuItems').then(items => {
      return items.filter((x: any) => x.isFeatured);
    });
  }

  getHomeSlider(): Promise<any> {
    return ;
  }

  getProduct(id): Promise<any> {
    return ;
  }

  getProducts(categoryGuid): Promise<any[]> {
    return this.loadItems('menuItems').then(items => items.filter((x: any) => x.category === categoryGuid));
  }

  private loadItems(type: string) {
    return this.afDB
      .list(type)
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(action => ({ $key: action.key, ...action.payload.val() }))),
        tap(items => this.initArray(items)),
        take(1)
      )
      .toPromise();
  }

  private initItem(item) {
    item.guid = item.$key;
  }

  private initArray(array) {
    return array.map(x => this.initItem(x));
  }
}
