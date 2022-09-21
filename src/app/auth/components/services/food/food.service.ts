import { Injectable } from '@angular/core';
import { Foods } from 'src/app/auth/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
      id: 1,
      price: 100,
      name: 'pizza',
      favorite: false,
      tags:['FastFood', 'Vegan'],
      imageUrl: '../../../../../assets/1.jpg',
      cookTime: '10-20',
      origins:['italy'],
  },

    {
      id: 2,
      price: 120,
      name: 'burger',
      favorite: true,
      tags:['FastFood', 'Vegan'],
      imageUrl: '../../../../../assets/2.jpg',
      cookTime: '30',
      origins:['italy'],
  },

    {
      id: 1,
      price: 100,
      name: 'pizza',
      favorite: false,
      tags:['FastFood', 'Vegan'],
      imageUrl: '../../../../../assets/1.jpg',
      cookTime: '10-20',
      origins:['italy'],
    },

    {
      id: 3,
      price: 100,
      name: 'pizza',
      favorite: false,
      tags:['FastFood', 'Vegan'],
      imageUrl: '../../../../../assets/3.jpg',
      cookTime: '10-20',
      origins:['italy'],
  },

  {
    id: 4,
    price: 100,
    name: 'pizza',
    favorite: false,
    tags:['FastFood', 'Vegan'],
    imageUrl: '../../../../../assets/4.jpg',
    cookTime: '10-20',
    origins:['italy'],
},

{
  id: 5,
  price: 100,
  name: 'pizza',
  favorite: false,
  tags:['FastFood', 'Vegan'],
  imageUrl: '../../../../../assets/5.jpg',
  cookTime: '10-20',
  origins:['italy'],
},

{
  id: 6,
  price: 100,
  name: 'pizza',
  favorite: false,
  tags:['FastFood', 'Vegan'],
  imageUrl: '../../../../../assets/6.jpg',
  cookTime: '10-20',
  origins:['italy'],
},

{
  id: 7,
  price: 100,
  name: 'pizza',
  favorite: false,
  tags:['FastFood', 'Vegan'],
  imageUrl: '../../../../../assets/7.jpg',
  cookTime: '10-20',
  origins:['italy'],
},
{
  id: 8,
  price: 100,
  name: 'pizza',
  favorite: false,
  tags:['FastFood', 'Vegan'],
  imageUrl: '../../../../../assets/8.jpg',
  cookTime: '10-20',
  origins:['italy'],
},

{
  id: 9,
  price: 100,
  name: 'pizza',
  favorite: false,
  tags:['FastFood', 'Vegan'],
  imageUrl: '../../../../../assets/9.jpg',
  cookTime: '10-20',
  origins:['italy'],
},

{
  id: 10,
  price: 100,
  name: 'pizza',
  favorite: false,
  tags:['FastFood', 'Vegan'],
  imageUrl: '../../../../../assets/10.jpg',
  cookTime: '10-20',
  origins:['italy'],
},

{
  id: 11,
  price: 100,
  name: 'pizza',
  favorite: false,
  tags:['FastFood', 'Vegan'],
  imageUrl: '../../../../../assets/11.jpg',
  cookTime: '10-20',
  origins:['italy'],
},

{
  id: 12,
  price: 100,
  name: 'pizza',
  favorite: false,
  tags:['FastFood', 'Vegan'],
  imageUrl: '../../../../../assets/12.jpg',
  cookTime: '10-20',
  origins:['italy'],
},

{
  id: 13,
  price: 100,
  name: 'pizza',
  favorite: false,
  tags:['FastFood', 'Vegan'],
  imageUrl: '../../../../../assets/13.jpg',
  cookTime: '10-20',
  origins:['italy'],
},

{
  id: 14,
  price: 100,
  name: 'pizza',
  favorite: false,
  tags:['FastFood', 'Vegan'],
  imageUrl: '../../../../../assets/14.jpg',
  cookTime: '10-20',
  origins:['italy'],
},
    ]

  }
}

