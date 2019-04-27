
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//import { Platform } from "ionic-angular";

//Services
import { PlacesService } from '../../services/places.service';

// Google Maps
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['map.page.scss',]
})

export class MapPage implements OnInit {

  places: any;
  map: GoogleMap;

  constructor(
    private router: Router,
    private placesService: PlacesService,
    private activatedRoute: ActivatedRoute,
    public googleMaps: GoogleMaps,
    //public platform: Platform
  ) {

  }

  ngOnInit() {
    console.log("angular init page function");

    //this.platform.ready().then(() => {
    this.initMap();
    //});
    //this.getPlaces();
  }

  initMap() {
    console.log("init map function");

    this.map = GoogleMaps.create('map');
    this.map.one(GoogleMapsEvent.MAP_READY).then((data:any) => {

      let position: LatLng = new LatLng(40.970040, -5.663419);

      this.map.animateCamera({
        target: position,
        zoom: 15
      });

      this.getPlaces();

    }).catch(error => {
      console.log(error);
    });
  }

  // Services
  getPlaces() {
    console.log("get places list function");

    var category_id = null;

    this.placesService.getPlaces().then(
      (result) => {
        this.places = result;
        //console.log(this.places)

        this.addPlaces();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addPlaces() {
    console.log("add places to map function");

    for (var place of this.places) {

      var position: LatLng = new LatLng(place.latitud, place.longitud);

      this.map.addMarker({
        position: position,
        title: place.titulo
      });
    }
  }

  // Navigate
  goBack() {
    console.log('go back function');
    //this.router.navigate(['/app/categories', { parent_category_id: this.category.categoria_padre }])
  }

}
