import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foods } from 'src/app/auth/shared/models/food';
import { FoodService } from './../services/food/food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foods: Foods[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute)
    { activatedRoute.params.subscribe((params) => {
      if (params['searchItem'])
        this.foods = this.foodService.getAllFoodsBySearchItem(params['searchItem']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag'])
      else
        this.foods = foodService.getAll();
    })
  }
  ngOnInit(): void {

  }
}
