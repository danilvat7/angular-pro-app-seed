import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    ScheduleService,
    ScheduleItem
} from '../../../shared/services/schedule/schedule.service';
import { Store } from 'store';
import { Subscription } from 'rxjs/Subscription';
import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.service';
import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
    selector: 'schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {

    open = false;

    date$: Observable<Date>;
    selected$: Observable<any>;
    list$: Observable<Meal[] | Workout[]>;
    schedule$: Observable<ScheduleItem[]>;
    subscription: Subscription[] = [];

    constructor(
        private store: Store,
        private mealService: MealsService,
        private workoutsService: WorkoutsService,
        private scheduleService: ScheduleService
    ) {}

    changeDate(date: Date) {
        this.scheduleService.updateDate(date);
    }

    ngOnInit() {
        this.date$ = this.store.select('date');
        this.schedule$ = this.store.select('schedule');
        this.selected$ = this.store.select('selected');
        this.list$ = this.store.select('list');
        this.subscription = [
            this.scheduleService.schedule$.subscribe(),
            this.scheduleService.selected$.subscribe(),
            this.scheduleService.list$.subscribe(),
            this.scheduleService.items$.subscribe(),
            this.mealService.meals$.subscribe(),
            this.workoutsService.workouts$.subscribe()
        ];
    }

    ngOnDestroy() {
        this.subscription.forEach(sub => sub.unsubscribe());
    }

    changeSection(event: any) {
        this.open = true;
        this.scheduleService.selectSection(event);
    }

    closeAssign() {
        this.open = false;
    }

    assignItem(items: string[]) {
        this.scheduleService.updateItems(items);
        this.closeAssign();
   }
}
