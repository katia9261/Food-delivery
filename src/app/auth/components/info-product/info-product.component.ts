import { Component, OnInit } from '@angular/core';
import { Foods } from 'src/app/auth/shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {
  food!:Foods;

  constructor(activatedRoute:ActivatedRoute,
              foodService:FoodService,
              private cartService:CartService,
              private router: Router) {
      activatedRoute.params.subscribe((params) =>{
      if(params['id'])
        this.food = foodService.getFoodById(params['id'])
      }
      )
    }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    //this.router.navigateByUrl('/cart-page');
  }
}
