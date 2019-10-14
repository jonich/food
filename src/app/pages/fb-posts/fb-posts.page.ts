import { Component, OnInit } from '@angular/core';
import { FbPostsService } from './fb-posts.service';

@Component({
  templateUrl: 'fb-posts.html',
  providers: [FbPostsService]
})
export class FbPostsPage implements OnInit {
  public posts: any[];

  constructor(private service: FbPostsService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
