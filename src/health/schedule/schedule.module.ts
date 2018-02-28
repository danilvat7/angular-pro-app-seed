import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// shared modules
import { SharedModule } from '../shared/shared.module';

// components
import { ScheduleDaysComponent } from './components/schedule-days/schedule-days.component';
import { ScheduleControlsComponent } from './components/schedule-controls/schedule-controls.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ScheduleSectionsComponent } from './components/schedule-sections/schedule-sections.component';

//containers
import { ScheduleComponent } from './containers/schedule/schedule.component';


export const ROUTES: Routes = [
  { path: '', component: ScheduleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduleDaysComponent,
    ScheduleControlsComponent,
    ScheduleCalendarComponent,
    ScheduleSectionsComponent
  ]
})

export class ScheduleModule { }
