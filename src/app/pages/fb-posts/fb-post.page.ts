import { Component, OnInit } from '@angular/core';
import { InAppBrowserService } from '@services/in-app-browser.service';
import { ActivatedRoute } from '@angular/router';
import { FbPostsService } from './fb-posts.service';

@Component({
  selector: 'news-item',
  templateUrl: 'fb-post.html'
})
export class FbPostPage implements OnInit {
  post: any;

  constructor(private service: FbPostsService, private activatedRoute: ActivatedRoute, private inAppBrowser: InAppBrowserService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      this.service.getPost(id).subscribe(post => {
        this.post = post;
      });
    });
  }

  openLink(url: string) {
    this.inAppBrowser.open(url);
  }
}
