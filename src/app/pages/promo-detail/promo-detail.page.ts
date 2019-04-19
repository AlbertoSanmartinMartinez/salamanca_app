
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

//Service
import { PromosService } from '../../services/promos.service';

@Component({
  selector: 'app-promo-detail',
  templateUrl: './promo-detail.page.html',
  styleUrls: ['./promo-detail.page.scss'],
})
export class PromoDetailPage implements OnInit {

  promo: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private promosService: PromosService
  ) {

  }

  ngOnInit() {
    this.getPromo();
  }

  // Services
  getPromo() {
    console.log("get promo detail function");

    var promo_id = this.activatedRoute.snapshot.paramMap.get('promo_id');

    this.promosService.getPromo(promo_id).then(
      (result) => {
        this.promo = result;
        console.log(this.promo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Navigate
  goBack() {
    console.log('go back function');

    var paths = this.router.url.split("/");
    var new_path = "/app";
    for (var i=2; i < paths.length-1; i++) {
      new_path += "/" + paths[i];
    }
    console.log(new_path);

    this.router.navigateByUrl(new_path);
    //this.router.navigate(['/app/categories', { parent_category_id: this.parent_category.categoria_padre }])
  }

}
