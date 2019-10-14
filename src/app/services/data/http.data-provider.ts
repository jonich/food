import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from './base.data-provider';
import { map } from 'rxjs/operators';

@Injectable()
export abstract class HttpDataProvider extends DataProvider {
  protected abstract categoriesUrl;
  protected abstract newsUrl;
  protected abstract businessUrl;
  protected abstract featuredUrl;

  protected constructor(private http: HttpClient) {
    super();
  }

  getFeaturedCategories(): Promise<any[]> {
    return this.getCategories().then(categories => categories.filter(x => x.featured));
  }

  getCategories(): Promise<any> {
    return this.http
      .get<any>(`https://food.jonich.gr/admin/api/categories.php`)
      .toPromise()
      .then(x => x);
  }

  getProducts(id): Promise<any> {
    return this.http
      .get<any>(`https://food.jonich.gr/admin/api/products.php?id=`+id)
      .toPromise()
      .then(x => x);
  }

  getProduct(id): Promise<any> {
    return this.http
      .get<any>(`https://food.jonich.gr/admin/api/product.php?id=`+id)
      .toPromise()
      .then(x => x);
  }



  getHomeSlider(): Promise<any> {
    return this.http
      .get<any>(`https://food.jonich.gr/admin/api/slider.php`)
      .toPromise()
      .then(x => x);
  }


  getFeaturedProducts(): Promise<any> {
    return this.http
      .get<any>(`https://food.jonich.gr/admin/api/feature.php`)
      .toPromise()
      .then(x => x);
  }



 

  getCategory(categoryGuid: string): Promise<any> {
    return this.getCategories().then(categories => {
      return categories.categories.find(x => x.id == categoryGuid)
      //console.log(categoryGuid);
      //console.log(categories.categories[0]);
       //return categories.categories[0];
    });
  }

  getProducts2(categoryGuid): Promise<any[]> {
    return this.getCategory(categoryGuid)
      .then(category => {
        return category.url;
      })
      .then(url => {
        return this.http
          .get<any>(url)
          .toPromise()
          .then(response =>
            response.result.map(p => {
              p.categoryId = categoryGuid;
              return p;
            })
          );
      });
  }

  getBusiness(): Promise<any> {
    return this.http
      .get<any>(`https://food.jonich.gr/admin/api/welcome.php`)
      .toPromise()
      .then(x => x);
  }

  getArticles(): Promise<any> {
    return this.http
      .get<any>(`${this.newsUrl}news.json`)
      .toPromise()
      .then(x => x.result);
  }

  getArticle(guid): Promise<any> {
    return this.http
      .get<any>(`${this.newsUrl}news.json`)
      .toPromise()
      .then(x => {
        return x.result.find(i => i.guid === guid);
      });
  }

  getFeaturedProduct(productId: string): Promise<any> {
    return this.getFeaturedProducts().then(products => products.find(x => x.guid === productId));
  }

  getProduct2(categoryId: string, productId: string): Promise<any> {
    return this.getProducts(categoryId).then(products => products.find(x => x.guid === productId));
  }
}
