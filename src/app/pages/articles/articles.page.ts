import { Component, OnInit } from '@angular/core';
import { DataProvider } from '@services/data/base.data-provider';

@Component({
  templateUrl: './articles.html'
})
export class ArticlesPage implements OnInit {
  public posts: any[];

  constructor(private data: DataProvider) {}

  ngOnInit(): void {
    this.data.getArticles().then(items => {
      this.posts = items;
    });
  }
}
