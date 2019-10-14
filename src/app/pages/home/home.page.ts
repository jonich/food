import { Component } from '@angular/core';
import { DataProvider } from '../../services/data/base.data-provider';
import { Tile } from './models/tile.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomePage {
  tiles: Tile[][] = [];
  products: any[] = [];

  constructor(private data: DataProvider, private router: Router) {
    this.loadCategories();
    this.loadProducts();
  }

  

  private loadProducts() {
    this.data.getHomeSlider().then(products => {
      this.products = products.slider;
      console.log(this.products);
    });
  }

  private loadCategories() {
    this.data.getFeaturedProducts().then(products => {
      this.tiles = products["products"];
      console.log(this.tiles);
    });
  }

  categoryTapped(item) {
    this.router.navigateByUrl('/products/' + item.category.guid);
  }

  productTapped(prodid,catid) {
    this.router.navigateByUrl(`/product/${catid}/${prodid}`);
  }
}
