import { Component, OnInit } from '@angular/core';
import { FacebookApiService } from '@services/facebook-api.service';

@Component({
  selector: 'albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.scss']
})
export class AlbumsPage implements OnInit {
  public albums: any[];

  constructor(private fb: FacebookApiService) {}

  ngOnInit(): void {
    this.fb.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }
}
