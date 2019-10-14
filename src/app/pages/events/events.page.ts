import { Component, OnInit } from '@angular/core';
import { FacebookApiService } from '@services/facebook-api.service';

@Component({
  selector: 'events',
  templateUrl: './events.page.html'
})
export class EventsPage implements OnInit {
  public events: any[];

  constructor(private service: FacebookApiService) {}

  ngOnInit(): void {
    this.service.getEvents().subscribe(events => {
      this.events = events;
    });
  }
}
