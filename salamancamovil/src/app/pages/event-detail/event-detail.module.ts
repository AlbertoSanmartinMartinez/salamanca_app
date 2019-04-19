
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Components
import { ComponentsModule } from '../../components/components.module';

// Pages
import { EventDetailPage } from './event-detail.page';

// Services
import { EventsService } from '../../services/events.service';

const routes: Routes = [
  {
    path: '',
    component: EventDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EventDetailPage
  ],
  providers: [
    EventsService
  ]
})
export class EventDetailPageModule {}
