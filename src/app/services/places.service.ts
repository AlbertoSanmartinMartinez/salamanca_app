
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

//const apiUrl = "http://172.16.130.44:8000/cms/";
//const apiUrl = "https://salamancacms.herokuapp.com/cms/";
//const apiUrl = "http://192.168.1.42:8000/cms/";
const apiUrl = "http://192.168.1.101:8000/cms/";

@Injectable()
export class PlacesService {

  data: any;

  constructor(
    private httpClient: HttpClient) {

  }

  getPlaces(category_id?:string) {
    console.log("places list service function");
    //console.log(category_id);

    //filtrar por id de categoria padre
    let httpParams = new HttpParams().set('category_id', category_id);

    let httpHeaders = new HttpHeaders().set('Content-Type', 'text/plain');

    return new Promise(resolve => {

      this.httpClient.get(apiUrl + 'rest_places/', {params: httpParams, headers: httpHeaders})
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  getPlace(place_id?:string) {
    console.log("places detail service function");

    let httpParams = new HttpParams().set('place_id', place_id);
    let httpHeaders = new HttpHeaders().set('Content-Type', 'text/plain');

    return new Promise(resolve => {

      this.httpClient.get(apiUrl + 'rest_places/', {params: httpParams, headers: httpHeaders})
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }
}
