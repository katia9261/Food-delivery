import { Component, OnInit } from '@angular/core';
import { FoodService } from './../services/food/food.service';
import { Foods } from '../../shared/models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foods:Foods[] = [];

  constructor(private foodService:FoodService, private ActivatedRoute: ActivatedRoute) {
    const newLocal = 'searchItem';
    ActivatedRoute.params.subscribe((params) => {
      if(params['searchItem'])
      this.foods = this.foodService.getAll();
      else
      this.foods = this.foodService.getAll();
  })
  }

  ngOnInit(): void {

  }
}
