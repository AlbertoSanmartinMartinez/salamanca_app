
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//services
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage implements OnInit {

  news: any;
  //host = 'http://192.168.0.12:8000';

  constructor(
    private router: Router,
    private newsService: NewsService) { }

  // LifeCycle Angular
  ngOnInit() {
    this.getNews();
  }

  // Services
  getNews() {
    console.log("get places list function");

    this.newsService.getNews().then(
      (result) => {
        this.news = result;
        console.log(this.news);
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Navigate
  goToNewDetail(new_id?:string) {
    console.log('go to new detail');
    this.router.navigateByUrl(this.router.url + '/' + new_id);
  }

}
