import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from "@angular/forms";
import { Meal } from "../../../shared/services/meals/meals.service";

@Component({
  selector: "meal-form",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./meal-form.component.html",
  styleUrls: ["./meal-form.component.scss"]
})
export class MealFormComponent implements OnInit, OnChanges {
  form = this.fb.group({
    name: ["", Validators.required],
    ingredients: this.fb.array([""])
  });

  toggled = false;
  exists = false;

  @Input() meal: Meal;

  @Output() create = new EventEmitter<Meal>();

  @Output() update = new EventEmitter<Meal>();

  @Output() remove = new EventEmitter<Meal>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.meal && this.meal.name) {
      this.exists = true;

      this.emptyIngredients();

      const value = this.meal;
      this.form.patchValue(value);

      if (value.ingredients) {
        for (const item of value.ingredients) {
          this.ingredients.push(new FormControl(item));
        }
      }
    }
  }

  emptyIngredients() {
    while (this.ingredients.controls.length) {
      this.ingredients.removeAt(0);
    }
  }

  get required() {
    const control = this.form.get("name");
    return control.hasError("required") && control.touched;
  }

  get ingredients() {
    return this.form.get("ingredients") as FormArray;
  }

  addIngredients() {
    this.ingredients.push(new FormControl(""));
  }

  removeIngredients(index: number) {
    this.ingredients.removeAt(index);
  }

  createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  removeMeal() {
    this.remove.emit(this.form.value);
  }

  updateMeal() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }
  toggle() {
    this.toggled = !this.toggled;
  }
}
