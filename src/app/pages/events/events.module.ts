import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '@pipes/pipes.module';
import { EventPage } from './event.page';
import { EventsPage } from './events.page';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FacebookApiService } from '@services/facebook-api.service';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },
  {
    path: ':id',
    component: EventPage
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, PipesModule, RouterModule.forChild(routes)],
  declarations: [EventPage, EventsPage],
  providers: [FacebookApiService]
})
export class EventsModule {}
