import { Component, OnInit } from '@angular/core';
import { FacebookApiService } from '@services/facebook-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'album',
  templateUrl: './album.page.html',
  styleUrls: ['./albums.scss']
})
export class AlbumPage implements OnInit {
  pictures: any[];
  album: any;

  constructor(private service: FacebookApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      this.loadPictures(id);
      this.loadAlbum(id);
    });
  }

  private loadAlbum(id) {
    this.service.getAlbum(id).subscribe(album => {
      this.album = album;
    });
  }

  private loadPictures(id) {
    this.service.getAlbumPhotos(id).subscribe(pictures => {
      this.pictures = pictures;
    });
  }
}
