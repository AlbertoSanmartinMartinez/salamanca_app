
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

// Services
import { CategoriesService } from '../../services/categories.service';

@Injectable()
export class CategoriesResolver implements Resolve<any> {

  constructor(
    private categoriesService: CategoriesService
  ) {

  }

  resolve() {
    console.log("categories resolver");

    const shellProviderObservable = this.categoriesService.getCategories();
    console.log(shellProviderObservable);

    // Resolve with Shell Provider
    const observablePromise = new Promise((resolve, reject) => {
      resolve(shellProviderObservable);
    });
    console.log(observablePromise);

    return observablePromise;
  }
}
