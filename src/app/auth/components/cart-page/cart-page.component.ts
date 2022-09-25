import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../shared/models/cartItem';
import { Cart } from './../../shared/models/cart';
import { CartService } from '../../components/services/cart/cart.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,  quantityInString:string) {
    let quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity)
  }

  increaseQuantity(cartItem: CartItem, quantityInString: string) {
    let q = parseInt(quantityInString);
    if (q < 99) {
      this.cartService.changeQuantity(cartItem.food.id, ++q)
    };
  }

  decreaseQuantity(cartItem: CartItem, quantityInString: string) {
    let q = parseInt(quantityInString);
    if (q > 0) {
      this.cartService.changeQuantity(cartItem.food.id, --q)
    };
  }


}
