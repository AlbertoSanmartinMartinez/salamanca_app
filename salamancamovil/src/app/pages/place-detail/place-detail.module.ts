
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

//Maps
//import { GoogleMaps } from '@ionic-native/google-maps';
//import { Geolocation } from '@ionic-native/geolocation';

// Pages
import { PlaceDetailPage } from './place-detail.page';

// Components
import { ComponentsModule } from '../../components/components.module';

//Services
import { PlacesService } from '../../services/places.service';
import { CategoriesService } from '../../services/categories.service';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailPage,
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
    PlaceDetailPage
  ],
  providers: [
    PlacesService,
    CategoriesService,
    //GoogleMaps
  ]
})
export class PlaceDetailPageModule {}
