
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

// Services
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: [ 'categories.page.scss',]
})

export class CategoriesPage implements OnInit {

  categories: any;
  parent_category: any;

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute) {

  }

  // LifeCycle Angular
  ngOnInit() {
    this.getCategories();
    this.getCategory();
  }

  // Services
  getCategories() {
    //console.log("get categories list function");

    var parent_category_id = this.activatedRoute.snapshot.paramMap.get('parent_category_id');
    //console.log("parent category id");
    //console.log(parent_category_id);

    this.categoriesService.getCategories(parent_category_id).then(
      (result) => {
        this.categories = result;
        console.log(this.categories)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCategory() {
    console.log("get parent categories detail function");

    var parent_category_id = this.activatedRoute.snapshot.paramMap.get('parent_category_id');
    //console.log("parent category id");
    //console.log(parent_category_id);

    this.categoriesService.getCategory(parent_category_id).then(
      (result) => {
        this.parent_category = result;
        console.log(this.parent_category);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Navigate
  goToCategoryList(parent_category_id?:string) {
    console.log('go to subcategories');

    var category = this.categories.find(i => i.id===parent_category_id);

    if (category.parent_category.length>0) {
      this.router.navigateByUrl('/app/categories/' + parent_category_id);
    }
  }

  goToPlaceList(category_id?:string) {
    console.log('go to place list');

    this.router.navigateByUrl('/app/categories/' + category_id + '/places');
  }

  // Navigate
  goBack() {
    console.log('go back function');

    /*var paths = this.router.url.split("/");
    var new_path = "/app";
    for (var i=2; i < paths.length-1; i++) {
      new_path += "/" + paths[i];
    }*/

    this.router.navigate(['/app/categories', { parent_category_id: this.parent_category.categoria_padre }])
  }

  // LifeCycle Ionic
  ionViewWillEnter() {

  }
}
