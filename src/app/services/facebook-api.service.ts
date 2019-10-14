import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../../config';

@Injectable()
export class FacebookApiService {
  constructor(private http: HttpClient) {}

  getEvents() {
    let fields = 'description,name,place,start_time,end_time,cover,category';
    return this.http.get<any>(Config.facebook.apiUrl + Config.facebook.pageName + '/events', this.options(fields)).pipe(
      map((result: any) => {
        return result.data;
      })
    );
  }

  getEvent(id) {
    let fields = 'description,name,place,start_time,end_time,cover,category';
    return this.http.get<any>(Config.facebook.apiUrl + Config.facebook.pageName + '/events', this.options(fields)).pipe(
      map((result: any) => {
        return result.data.find(e => e.id === id);
      })
    );
  }

  getAlbums() {
    let fields = 'cover_photo,name,description';
    return this.http.get<any>(Config.facebook.apiUrl + Config.facebook.pageName + '/albums', this.options(fields)).pipe(
      map((result: any) => {
        let albums = [];
        result.data.forEach(album => {
          let coverPhoto = album['cover_photo'];
          if (coverPhoto) {
            let cover = `${Config.facebook.apiUrl}${coverPhoto.id}/picture?access_token=${Config.facebook.permanentAccessToken}`;
            albums.push({
              id: album.id,
              cover: cover,
              title: album.name,
              description: album.description
            });
          }
        });

        return albums;
      })
    );
  }

  getAlbum(id) {
    let fields = 'cover_photo,name,description';
    return this.http.get<any>(Config.facebook.apiUrl + id, this.options(fields)).pipe(
      map((album: any) => {
        return {
          id: album.id,
          title: album.name,
          description: album.description
        };
      })
    );
  }

  getAlbumPhotos(albumId: string): Observable<any> {
    let fields = 'name,place,picture,images,created_time';
    let url = Config.facebook.apiUrl + albumId + '/photos';
    return this.http.get<any>(url, this.options(fields)).pipe(map((x: any) => x.data));
  }

  getPosts(): Observable<any> {
    let fields = 'posts{created_time,description,picture,full_picture,caption,message,story,type,object_id,link,from,name,place}';
    return this.http.get(Config.facebook.apiUrl + Config.facebook.pageName, this.options(fields)).pipe(
      map((x: any) => {
        return x.posts.data;
      })
    );
  }

  getPost(id: string): Observable<any> {
    let fields = 'created_time,description,picture,full_picture,caption,message,story,type,object_id,link,from,name,place';
    return this.http.get(Config.facebook.apiUrl + id, this.options(fields)).pipe(
      map((x: any) => {
        return id ? x : x.posts.data;
      })
    );
  }

  private options(fields: string = null, accessToken?: string) {
    let httpParams = new HttpParams().set('access_token', accessToken || Config.facebook.permanentAccessToken);
    if (fields) {
      httpParams = httpParams.set('fields', fields);
    }

    const requestOptions = {
      params: httpParams
    };

    return requestOptions;
  }
}
