
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

// Services
import { PlacesService } from '../../services/places.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: [ 'places.page.scss',]
})

export class PlacesPage implements OnInit {

  places: any;
  highlights: any;
  category: any;

  constructor(
    private router: Router,
    private placesService: PlacesService,
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute) {

    }

  ngOnInit() {

    var category_id = this.activatedRoute.snapshot.paramMap.get('category_id');

    this.getPlaces(category_id);
    this.getCategory(category_id);
    //this.getHighlights();
  }

  getHighlights() {
    console.log("get highlights places list function");

  }

  // Services
  getPlaces(category_id?:string) {
    console.log("get places list function");

    this.placesService.getPlaces(category_id).then(
      (result) => {
        this.places = result;
        console.log(this.places)
      },
      (error) => {
        console.log(error);
      }
    );


  }

  getCategory(category_id?:string) {
    console.log("get category detail function");

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

  // Navigate
  goToPlaceDetail(place_id?:string) {
    console.log('go to place detail');
    console.log(this.router.url);
    this.router.navigateByUrl(this.router.url + '/' + place_id);
  }

  goToPromoList(place_id?:string) {
    console.log('go to promo list');
    console.log(this.router.url);
    console.log(place_id);
    this.router.navigateByUrl(this.router.url + '/' + place_id + '/promos' );
  }

  goBack() {
    console.log('go back function');
    
    this.router.navigate(['/app/categories', { parent_category_id: this.category.categoria_padre }])
  }
}
