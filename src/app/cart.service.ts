import { Injectable } from '@angular/core';
import { BookEntity } from './books.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = new BehaviorSubject<BookEntity[]>([]);

  constructor() {
  }

  get totalCost() {
    return this.items.value.reduce((a, b) => a + b.price, 0);
  }

  add(book) {
    this.items.next([...this.items.value, book]);
  }
}
