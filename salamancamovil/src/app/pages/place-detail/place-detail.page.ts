
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Platform } from 'ionic-angular';
import { ActivatedRoute } from '@angular/router';

// Google Maps
//import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng } from '@ionic-native/google-maps/ngx';
//import { Geolocation } from '@ionic-native/geolocation';

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
  //map: GoogleMap;

  constructor(
    private router: Router,
    private placesService: PlacesService,
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    //private googleMaps: GoogleMaps
    //private geolocation: Geolocation
    //private platform: Platform
  ) {

    }

  ngOnInit() {

    var category_id = this.activatedRoute.snapshot.paramMap.get('category_id');

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
          //this.loadMap();
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
  /*loadMap() {
    console.log("load place map function")

    this.map = GoogleMaps.create('map');
    this.map.one(GoogleMapsEvent.MAP_READY).then((data:any) => {

      let myPosition: LatLng = new LatLng(this.place.latitude, this.place.longitude);

      this.map.animateCamera({
        target: myPosition,
        zoom: 20
      });

      this.map.addMarker({
        position: myPosition,
        title: 'First'
      });
    })
  }*/

  // Navigate
  goToPromoList(place_id?:string) {
    console.log('go to promo list');
    console.log(this.router.url);
    this.router.navigateByUrl(this.router.url + '/promos');
  }

  goBack() {
    console.log('go back function');
    /*
    var paths = this.router.url.split("/");
    var new_path = "/app";
    for (var i=2; i < paths.length-1; i++) {
      new_path += "/" + paths[i];
    }
    console.log(new_path)
    */
    this.router.navigate(['/app/categories', { parent_category_id: this.category.categoria_padre }])
  }

}
