import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import { Cart } from '../../shared/models/cart';
import { CartService } from '../../components/services/cart/cart.service';
import { ServicesService } from '../services/services.service';
import { SendFormModel } from 'src/app/interfaces/send-form-model';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css'],
})
export class SendFormComponent implements OnInit {
  cart!: Cart;
  FormData: FormGroup;
  constructor(
    private cartService: CartService,
    private builder: FormBuilder,
    private contact: ServicesService
  ) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Comment: new FormControl(''),
      Address: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData: any) {
    this.contact.PostMessage([FormData, this.cart.items]).subscribe(
      (response) => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
