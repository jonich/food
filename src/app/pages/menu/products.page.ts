import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProvider } from '@services/data/base.data-provider';

@Component({
  templateUrl: './products.html'
})
export class ProductsPage implements OnInit {
  products: any[];
  category: any;

  constructor(private data: DataProvider, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    
    this.data.getCategory(id).then(category => {
       this.category = category
      });

    this.data.getProducts(id).then(products => {
      this.products = products["products"];
      console.log(products);
    });
  }

  itemTapped(item) {
    this.router.navigateByUrl(`/product/${this.category.id}/${item.id}`);
  }
}
