import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  logout = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  logoutUser() {
    this.logout.emit()
  }
}
