
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Pages
import { NewDetailPage } from './new-detail.page';

// Components
import { ComponentsModule } from '../../components/components.module';

// Services
import { NewsService } from '../../services/news.service';

const routes: Routes = [
  {
    path: '',
    component: NewDetailPage
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
    NewDetailPage
  ],
  providers: [
    NewsService
  ]
})
export class NewDetailPageModule {}
