import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.scss']
})
export class ScheduleCalendarComponent implements OnInit {
  selectedDay: Date;

  @Input()
  set date (date: Date) {
    this.selectedDay = new Date(date.getTime());
  };

  constructor() { }

  ngOnInit() {
  }

}
