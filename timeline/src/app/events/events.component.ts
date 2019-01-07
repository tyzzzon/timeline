import { Component, OnInit } from '@angular/core';
import { Event } from "../event";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event: Event = {
    id: 1,
    title: 'Саша открыл офис в Новосибирске.',
    description: 'Very beginning of .WRK',
    date: '09.01.2011'
  };

  constructor() { }

  ngOnInit() {
  }

}
