
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Pages
import { PromoDetailPage } from './promo-detail.page';

// Components
import { ComponentsModule } from '../../components/components.module';

// Services
import { PromosService } from '../../services/promos.service';

const routes: Routes = [
  {
    path: '',
    component: PromoDetailPage
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
    PromoDetailPage
  ],
  providers: [
    PromosService
  ]
})
export class PromoDetailPageModule {}
