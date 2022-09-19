import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FoodService } from './../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  foods:string[] = [];
  constructor(
    public authService: AuthService,
    private fs:FoodService) {}

  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }
  
}
