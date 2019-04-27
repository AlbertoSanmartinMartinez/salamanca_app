
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
//import { Platform } from "ionic-angular";

// Components
import { ComponentsModule } from '../../components/components.module';

// Pages
import { MapPage } from './map.page';

// Map
import { GoogleMaps } from '@ionic-native/google-maps';

//Services
import { PlacesService } from '../../services/places.service';

const routes: Routes = [
  {
    path: '',
    component: MapPage
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
    MapPage
  ],
  providers: [
    PlacesService,
    GoogleMaps,
    //Platform,
  ]
})
export class MapPageModule {}
