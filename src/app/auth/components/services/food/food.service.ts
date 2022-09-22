import { Injectable } from '@angular/core';
import { Foods } from 'src/app/auth/shared/models/food';
import { Tag } from 'src/app/auth/shared/models/tag';
import { data_list } from 'src/app/data';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[] {
    return data_list;
  }


    getAllFoodsBySearchItem(searchItem: string) {
      return this.getAll().filter(food => food.name.toLowerCase().includes(searchItem.toLowerCase()))
    }

    getAllFoodsByTag(tag:string): Foods[] {
      return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

    }

    getAllTag():Tag[] {
      return [
      {name: 'Soup', count: 1},
      {name: 'Bowl', count: 3},
    ]}

}

