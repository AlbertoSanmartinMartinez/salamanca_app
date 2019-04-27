
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

//const apiUrl = "http://172.16.130.44:8000/cms/";
const apiUrl = "https://salamancacms.herokuapp.com/cms/";
//const apiUrl = "http://192.168.1.46:8000/cms/";
//const apiUrl = "http://192.168.1.101:8000/cms/";

@Injectable()
export class NewsService {

  data: any;

  constructor(
    private httpClient: HttpClient) {

    }

  getNews() {
    console.log("News list service function");

    let httpHeaders = new HttpHeaders().set('Content-Type', 'text/plain');

    return new Promise(resolve => {
      this.httpClient.get(apiUrl + 'rest_news/', { headers: httpHeaders} )
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  getNew(new_id?:string) {
    console.log("News detail service function");

    let httpParams = new HttpParams().set('new_id', new_id);
    let httpHeaders = new HttpHeaders().set('Content-Type', 'text/plain');

    return new Promise(resolve => {
      this.httpClient.get(apiUrl + 'rest_news/', { params: httpParams, headers: httpHeaders })
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

}
