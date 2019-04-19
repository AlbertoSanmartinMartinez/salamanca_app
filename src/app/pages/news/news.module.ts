
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Pages
import { NewsPage } from './news.page';

// Components
import { ComponentsModule } from '../../components/components.module';

// Services
import { NewsService } from '../../services/news.service';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
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
    NewsPage
  ],
  providers: [
    NewsService
  ]
})
export class NewsPageModule {}
