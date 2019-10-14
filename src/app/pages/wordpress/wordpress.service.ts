import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../../config';
import { WordpressPost } from './models/wordpress-post.model';
import { map } from 'rxjs/operators';

@Injectable()
export class WordpressService {
  private config: Config;
  private articles: WordpressPost[];

  constructor(private http: HttpClient, config: Config) {
    this.config = config;
  }

  public getPosts(): Observable<WordpressPost[]> {
    return this.http.get(this.config.wordpressApiUrl).pipe(
      map((response: any) => {
        this.articles = response.posts.map((item: any) => this.createArticle(item));
        return this.articles;
      })
    );
  }

  public getPost(id: string): Observable<WordpressPost> {
    return this.http.get(this.config.wordpressApiUrl).pipe(
      map((response: any) => {
        this.articles = response.posts.map((item: any) => this.createArticle(item));
        return this.articles.find(a => a.id === parseInt(id));
      })
    );
  }

  private createArticle(item): WordpressPost {
    let imageUrl = item.attachments.length > 0 ? item.attachments[0].images.full.url : null;
    let tags = item.tags.map(x => x.title);

    let contentIndex = item.content.indexOf('</p>') + 4;
    let content = contentIndex === -1 ? item.content : item.content.substring(contentIndex);

    return {
      id: item.id,
      title: item.title,
      brief: item.excerpt,
      image: imageUrl,
      date: item.date,
      content: content,
      author: item.author.name,
      tags: tags,
      url: this.config.wordpressApiUrl
    };
  }
}
