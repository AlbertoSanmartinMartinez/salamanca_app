
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

//const apiUrl = "http://172.16.130.44:8000/cms/";
//const apiUrl = "https://salamancacms.herokuapp.com/cms/";
//const apiUrl = "http://192.168.1.42:8000/cms/";
const apiUrl = "http://192.168.1.101:8000/cms/";

@Injectable()
export class EventsService {

  data: any;

  constructor(
    private httpClient: HttpClient) {

    }

  getEvents() {
    console.log("Events list service function");

    let httpHeaders = new HttpHeaders().set('Content-Type', 'text/plain');

    return new Promise(resolve => {
      this.httpClient.get(apiUrl + 'rest_events/', { headers: httpHeaders })
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  getEvent(event_id?:string) {
    console.log("Events detail service function");

    let httpParams = new HttpParams().set('event_id', event_id);
    let httpHeaders = new HttpHeaders().set('Content-Type', 'text/plain');

    return new Promise(resolve => {
      this.httpClient.get(apiUrl + 'rest_events/', { params: httpParams, headers: httpHeaders })
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

}
