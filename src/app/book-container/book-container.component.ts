import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: [ './book-container.component.scss' ]
})
export class BookContainerComponent implements OnInit {
  books: any;

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.books = this.booksService.getBooks().subscribe();
  }

}
