import { Component } from '@angular/core';

import { WordpressPost } from '../models/wordpress-post.model';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../wordpress.service';

@Component({
  templateUrl: 'wordpress.item.html'
})
export class WordPressItemPage {
  post: WordpressPost;

  constructor(private activatedRoute: ActivatedRoute, private wordpressService: WordpressService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      this.wordpressService.getPost(id).subscribe(item => {
        this.post = item;
      });
    });
  }
}
