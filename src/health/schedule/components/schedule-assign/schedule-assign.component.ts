import {
    Component,
    OnInit,
    Output,
    ChangeDetectionStrategy,
    Input,
    EventEmitter
} from '@angular/core';
import { Workout } from '../../../shared/services/workouts/workouts.service';
import { Meal } from '../../../shared/services/meals/meals.service';

@Component({
    selector: 'schedule-assign',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './schedule-assign.component.html',
    styleUrls: ['./schedule-assign.component.scss']
})
export class ScheduleAssignComponent implements OnInit {
    private selected: string[] = [];
    @Input() section: any;

    @Input() list: Meal[] | Workout[];

    @Output() update = new EventEmitter<any>();

    @Output() cancel = new EventEmitter<any>();
    constructor() {}

    ngOnInit() {
        this.selected = [...this.section.assigned];
    }

    getRoute(name: string) {
       return [`../${name}/new`];
    }

    exists(name: string) {
        return !!~this.selected.indexOf(name);
    }

    toggleItem(name: string) {
        if (this.exists(name)) {
            this.selected = this.selected.filter(item => item !== name);
        } else {
            this.selected = [...this.selected, name];
        }
    }

    updateAssign() {
        this.update.emit({
            [this.section.type]: this.selected
        });
    }

    cancelAssign() {
        this.cancel.emit();
    }

}
