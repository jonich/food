import { Injectable } from '@angular/core';
import { FacebookApiService } from '../../services/facebook-api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FbPostsService {
  private facebookApiService: FacebookApiService;

  constructor(facebookApiService: FacebookApiService) {
    this.facebookApiService = facebookApiService;
  }

  public getPosts(): Observable<any[]> {
    return this.facebookApiService.getPosts().pipe(map(posts => posts.filter(post => post.name)));
  }

  public getPost(id?: string): Observable<any[]> {
    return this.facebookApiService.getPost(id);
  }
}
