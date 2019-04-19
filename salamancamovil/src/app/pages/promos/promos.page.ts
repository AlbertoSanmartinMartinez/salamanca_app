
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

//Services
import { PromosService } from '../../services/promos.service';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.page.html',
  styleUrls: ['./promos.page.scss'],
})
export class PromosPage implements OnInit {

  promos: any;
  highlights: any;
  place_id: any;

  constructor(
    private router: Router,
    private promosService: PromosService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.getPromos();
    //
  }

  // Services
  getPromos() {
    console.log("get promo list function")

    this.place_id = this.activatedRoute.snapshot.paramMap.get('place_id');
    console.log(this.place_id);

    this.promosService.getPromos(this.place_id).then(
      (result) => {
        this.promos = result;
        console.log(this.promos);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  // Navigate
  goToPromoDetail(promo_id?:string) {
    console.log('go to promo detail');
    //console.log(this.router.url);
    this.router.navigateByUrl(this.router.url + '/' + promo_id);
  }

  goBack() {
    console.log('go back function');

    var paths = this.router.url.split("/");
    var new_path = "/app";
    for (var i=2; i < paths.length-1; i++) {
      new_path += "/" + paths[i];
    }
    console.log(new_path);

    this.router.navigateByUrl(new_path);
  }
}
