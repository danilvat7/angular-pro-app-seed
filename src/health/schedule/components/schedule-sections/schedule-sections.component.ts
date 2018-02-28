import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ScheduleItem } from '../../../shared/services/schedule/schedule.service';

@Component({
  selector: 'schedule-sections',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule-sections.component.html',
  styleUrls: ['./schedule-sections.component.scss']
})
export class ScheduleSectionsComponent implements OnInit {

  @Input()
    name: string;
  @Input()
    section: ScheduleItem;

  @Output()
  select = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(type: string, assigned: string[] = []) {
    const data = this.section;
    this.select.emit({
      type,
      assigned,
      data
    })
  }

}
