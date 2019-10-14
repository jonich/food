import { Component } from '@angular/core';
import { DataProvider } from '@services/data/base.data-provider';

import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './article.html'
})
export class ArticlePage {
  item: any;

  constructor(private activatedRoute: ActivatedRoute, private data: DataProvider) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      this.data.getArticle(id).then(item => {
        this.item = item;
      });
    });
  }
}
