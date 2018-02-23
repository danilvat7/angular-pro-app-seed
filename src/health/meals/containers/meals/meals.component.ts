import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  MealsService,
  Meal
} from "../../../shared/services/meals/meals.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Store } from "store";

@Component({
  selector: "meals",
  templateUrl: "./meals.component.html",
  styleUrls: ["./meals.component.scss"]
})
export class MealsComponent implements OnInit, OnDestroy {
  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(private store: Store, private mealsService: MealsService) {}

  ngOnInit() {
    this.meals$ = this.store.select<Meal[]>("meals");
    this.subscription = this.mealsService.meals$.subscribe();
  }

  removeMeal(event: Meal) {
    this.mealsService.removeMeal(event.$key);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
