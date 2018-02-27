import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'schedule-controls',
  templateUrl: './schedule-controls.component.html',
  styleUrls: ['./schedule-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleControlsComponent implements OnInit {
  offset = 0;
  @Input()
  selected: Date;

  @Output()
  move = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }

  moveDate(offset:number) {
    this.offset = offset;
    this.move.emit(offset);
  }

}
