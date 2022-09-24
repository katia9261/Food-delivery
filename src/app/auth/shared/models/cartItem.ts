import { Foods } from 'src/app/auth/shared/models/food';

export class CartItem {
  constructor(public food:Foods) { }
  quantity: number = 1;
  price: number = this.food.price * this.quantity;
}
