import { Injectable } from '@angular/core';
import { bookData } from './books.data';
import { of } from 'rxjs/internal/observable/of';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';

export interface BookEntity {
  isbn: string;
  author: string;
  date: string;
  rating: number;
  pages: number;
  title: string;
  price: number;
  summary: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  selected = new BehaviorSubject<BookEntity>(null);

  getBooks(): Observable<BookEntity[]> {
    return of(bookData).pipe(delay(700));
  }

  getBook(isbn: string): Observable<BookEntity> {
    const book = bookData.find(b => b.isbn === isbn);
    return of(book).pipe(tap(() => this.selected.next(book)));
  }
}
