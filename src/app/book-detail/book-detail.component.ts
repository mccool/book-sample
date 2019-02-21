import { Component, OnInit } from '@angular/core';
import { BookEntity, BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.scss' ]
})
export class BookDetailComponent implements OnInit {
  book$: Observable<BookEntity>;

  constructor(private booksService: BooksService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
