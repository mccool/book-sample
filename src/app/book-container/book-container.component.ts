import { Component } from '@angular/core';
import { BookEntity, BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: [ './book-container.component.scss' ]
})
export class BookContainerComponent {

  books$ = this.booksService.getBooks();
  selectedBook$ = this.booksService.selected;

  constructor(private booksService: BooksService, private router: Router) {
  }

  onSelected(book: BookEntity) {
    this.router.navigate([ `/books/${book.isbn}` ]);
  }
}
