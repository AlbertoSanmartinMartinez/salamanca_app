
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Components
import { ComponentsModule } from '../../components/components.module';

// Pages
import { PlacesPage } from './places.page';

//Services
import { PlacesService } from '../../services/places.service';
import { CategoriesService } from '../../services/categories.service';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage,
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
    PlacesPage
  ],
  providers: [
    PlacesService,
    CategoriesService
  ]
})
export class PlacesPageModule {}
