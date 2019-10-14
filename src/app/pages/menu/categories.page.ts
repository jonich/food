import { Component, OnInit } from '@angular/core';
import { DataProvider } from '@services/data/base.data-provider';

@Component({
  templateUrl: './categories.html'
})
export class CategoriesPage implements OnInit {
  categories: any[] = [];

  constructor(private data: DataProvider) {}

  ngOnInit(): void {
    this.data.getCategories().then(categories => {
      this.categories = categories["categories"];
      
     console.log(categories);
      });
  }
}
