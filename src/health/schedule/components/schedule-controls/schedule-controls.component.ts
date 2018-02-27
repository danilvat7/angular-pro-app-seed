import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'schedule-controls',
  templateUrl: './schedule-controls.component.html',
  styleUrls: ['./schedule-controls.component.scss']
})
export class ScheduleControlsComponent implements OnInit {

  @Input()
  selected: Date;

  constructor() { }

  ngOnInit() {
  }

}
