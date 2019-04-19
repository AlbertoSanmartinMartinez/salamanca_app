
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

//services
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})

export class EventDetailPage implements OnInit {

  event: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService) {

    }

  ngOnInit() {
    this.getEvent();
  }

  // Services
  getEvent() {
    console.log("get event detail function");

    var event_id = this.activatedRoute.snapshot.paramMap.get('event_id');

    this.eventsService.getEvent(event_id).then(
      (result) => {
        this.event = result;
        console.log(this.event);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // Navigate
  goBack() {
    console.log('go back function');

    this.router.navigateByUrl('app/events');
  }

}
