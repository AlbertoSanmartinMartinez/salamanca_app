
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Platform } from 'ionic-angular';
import { ActivatedRoute } from '@angular/router';

// Google Maps
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from '@ionic-native/google-maps';

// Services
import { PlacesService } from '../../services/places.service';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: [ 'place-detail.page.scss',]
})

export class PlaceDetailPage implements OnInit {

  place: any;
  category: any;
  place_map: GoogleMap;

  constructor(
    private router: Router,
    private placesService: PlacesService,
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private googleMaps: GoogleMaps,
    //private platform: Platform,
  ) {

  }

  ngOnInit() {
    console.log("angular init page function");

    var category_id = this.activatedRoute.snapshot.paramMap.get('category_id');

    this.initMap();
    this.getPlace();
    this.getCategory(category_id);
  }

  // Service
  getPlace() {
    console.log("get place detail function")

    var place_id = this.activatedRoute.snapshot.paramMap.get('place_id');
    //console.log(place_id);

    this.placesService.getPlace(place_id).then(
        (result) => {
          this.place = result;
          console.log(this.place);

          this.place_map.one(GoogleMapsEvent.MAP_READY).then((data:any) => {

            let position: LatLng = new LatLng(this.place.latitud, this.place.longitud);

            this.place_map.animateCamera({
              target: position,
              zoom: 18
            });

            this.place_map.addMarker({
              position: position,
              title: this.place.titulo
            });

          });
        },
        (error) => {
          console.log(error);
        }
    );
  }

  getCategory(category_id?:string) {
    console.log("get category detail function")

    this.categoriesService.getCategory(category_id).then(
      (result) => {
        this.category = result;
        console.log(this.category);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Map
  initMap() {
    console.log("init place map function")

    this.place_map = GoogleMaps.create('place_map');
  }

  // Navigate
  goToPromoList(place_id?:string) {
    console.log('go to promo list');
    console.log(this.router.url);
    this.router.navigateByUrl(this.router.url + '/promos');
  }

  goBack() {
    console.log('go back function');

    this.router.navigateByUrl('/app/categories/' + this.category.id + '/places')
  }

}
