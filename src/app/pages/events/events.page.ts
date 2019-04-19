
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//services
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})

export class EventsPage implements OnInit {

  events: any;

  constructor(
    private router: Router,
    private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  // services
  getEvents() {
    console.log("get events list function");

    this.eventsService.getEvents().then(
      (result) => {
        this.events = result;
        console.log(this.events);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Navigate
  goToEventDetail(event_id?:string) {
    console.log('go to event detail');
    console.log(this.router.url);
    console.log(this.router.url + '/' + event_id);
    this.router.navigateByUrl(this.router.url + '/' + event_id);
  }

}
