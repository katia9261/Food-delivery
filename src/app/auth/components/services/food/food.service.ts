import { Injectable } from '@angular/core';
import { Foods } from 'src/app/auth/shared/models/food';
import { Tag } from 'src/app/auth/shared/models/tag';
import { data_list } from 'src/app/data';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getAll():Foods[] {
    return data_list;
  }

    getFoodById(id:number) : Foods {
      return this.getAll().find(food => food.id == id)!;
    }

    getAllFoodsBySearchItem(searchItem: string) {
      return this.getAll().filter(food => food.name.toLowerCase().includes(searchItem.toLowerCase()))
    }

    getAllFoodsByTag(tag:string): Foods[] {
      return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

    }

    getAllTag():Tag[] {
      return [
      {name: 'Сніданок', count: 3},
      {name: 'Обід', count: 16},
      {name: 'Боул', count: 4},
      {name: 'Веган', count: 6},
      {name: 'Салат', count: 1},
      {name: 'Гарячі напої', count: 7},
      {name: 'Лимонад', count: 3},
      {name: 'Смузі', count: 6},
      {name: 'Риба', count: 9},
      {name: "М'ясо", count: 3},
      {name: 'Спрінг-роли', count: 3},
      {name: 'Роли', count: 4},
      {name: 'Екзотика', count: 5},
    ]}

}

