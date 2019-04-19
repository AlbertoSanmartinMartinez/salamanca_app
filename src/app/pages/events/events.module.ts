
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Pages
import { EventsPage } from './events.page';

// Components
import { ComponentsModule } from '../../components/components.module';

// Services
import { EventsService } from '../../services/events.service';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
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
    EventsPage
  ],
  providers: [
    EventsService
  ]
})
export class EventsPageModule {}
