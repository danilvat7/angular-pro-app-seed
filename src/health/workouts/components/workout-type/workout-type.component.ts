import { Component, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const TYPE_CONTROL_ACCESOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WorkoutTypeComponent),
  multi: true
};

@Component({
  selector: 'workout-type',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './workout-type.component.html',
  styleUrls: ['./workout-type.component.scss'],
  providers: [TYPE_CONTROL_ACCESOR]
})
export class WorkoutTypeComponent implements ControlValueAccessor {
  selectors = ['strength', 'endurance'];

  value: string;

  private onTouch: Function;
  private onModelChange: Function;

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  writeValue(value:string) {
    this.value = value;
  }

  setSelected(value: string) {
    this.value = value;
    this.onModelChange(value);
    this.onTouch();
  }
}
