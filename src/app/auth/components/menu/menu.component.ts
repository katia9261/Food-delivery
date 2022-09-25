import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from 'src/app/auth/shared/models/food';
import { FoodService } from './../services/food/food.service';
import { CartService } from '../services/cart/cart.service';
import { ProblemSearchComponent } from '../problem-search/problem-search.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foods: Foods[] = [];

  constructor(
    private foodService: FoodService,
    private cartService: CartService,
    activatedRoute: ActivatedRoute,
    private router: Router)
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
