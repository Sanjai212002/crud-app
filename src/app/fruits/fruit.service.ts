import { Injectable } from '@angular/core';
import { Fruit } from './fruit.model';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor() { }
  private fruits: Fruit[] = [
    { id: 1, name: 'Apple', color: 'Red', price: 100 },
    { id: 2, name: 'Banana', color: 'Yellow', price: 40 }
  ];

  getFruits() {
    return [...this.fruits];
  }

  addFruit(fruit: Fruit) {
    fruit.id = this.fruits.length + 1;
    this.fruits.push(fruit);
  }

  updateFruit(fruit: Fruit) {
    const index = this.fruits.findIndex(f => f.id === fruit.id);
    if (index > -1) this.fruits[index] = fruit;
  }

  deleteFruit(id: number) {
    this.fruits = this.fruits.filter(f => f.id !== id);
  }
}
