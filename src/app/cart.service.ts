import { Injectable } from '@angular/core';
import { BookEntity } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: BookEntity[] = [];

  constructor() {
  }

  add(book) {
    this.items.push(book);
  }
}
