import { Component, OnInit } from '@angular/core';
import { BookEntity, BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.scss' ]
})
export class BookDetailComponent implements OnInit {
  book$: Observable<BookEntity>;

  constructor(private booksService: BooksService, private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      map(param => param.get('id')),
      switchMap(id => this.booksService.getBook(id))
    );
  }

  ratingToLength(num: number) {
    return new Array(num);
  }

  addToCart(book: BookEntity) {
    this.cartService.add(book);
  }
}
