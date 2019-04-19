
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

//services
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})

export class NewDetailPage implements OnInit {

  new: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService) {

    }

  ngOnInit() {
    this.getNew();
  }

  // Services
  getNew() {
    console.log("get new detail function");

    var new_id = this.activatedRoute.snapshot.paramMap.get('new_id');

    this.newsService.getNew(new_id).then(
      (result) => {
        this.new = result;
        console.log(this.new);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Navigate
  goBack() {
    console.log('go back function');

    this.router.navigateByUrl('app/news');
  }

}
