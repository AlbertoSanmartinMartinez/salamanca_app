
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

//const apiUrl = "http://172.16.130.44:8000/cms/";
//const apiUrl = "http://192.168.1.46:8000/cms/";
const apiUrl = "https://salamancacms.herokuapp.com/cms/";
//const apiUrl = "http://192.168.1.101:8000/cms/";

@Injectable()
export class CategoriesService {

  data: any;

  constructor(
    private httpClient: HttpClient
  ) {

  }

  public getCategories(parent_category_id?:string): any {
    console.log("categories list service function");

    let httpParams = new HttpParams().set('parent_category_id', parent_category_id);
    let httpHeaders = new HttpHeaders().set('Content-Type', 'text/plain');

    return new Promise(resolve => {
      this.httpClient.get(apiUrl + 'rest_category_list/', { params: httpParams, headers: httpHeaders })
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  getCategory(category_id?:string): any {
    console.log("category detail service function");

    let httpParams = new HttpParams().set('category_id', category_id);
    let httpHeaders = new HttpHeaders().set('Content-Type', 'text/plain');

    return new Promise(resolve => {
      this.httpClient.get(apiUrl + 'rest_category_detail/', { params: httpParams, headers: httpHeaders })
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }
}
