import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  Meal,
  MealsService
} from "../../../shared/services/meals/meals.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "meal",
  templateUrl: "./meal.component.html",
  styleUrls: ["./meal.component.scss"]
})
export class MealComponent implements OnInit, OnDestroy {
  meal$: Observable<Meal>;
  subscription: Subscription;

  constructor(
    private mealsService: MealsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.mealsService.meals$.subscribe();
    this.meal$ = this.route.params.switchMap(param =>
      this.mealsService.getMeal(param.id)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addMeal(event: Meal) {
    await this.mealsService.addMeal(event);
    this.backtoMeals();
  }

  async updateMeal(event: Meal) {
    const key = this.route.snapshot.params.id;
    await this.mealsService.updateMeal(key, event);
    this.backtoMeals();
  }

  async removeMeal(event: Meal) {
    const key = this.route.snapshot.params.id;
    await this.mealsService.removeMeal(key);
    this.backtoMeals();
  }
  backtoMeals() {
    this.router.navigate(["meals"]);
  }
}
