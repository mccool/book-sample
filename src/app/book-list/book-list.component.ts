import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BookEntity } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
  @Input() books: BookEntity[];

  constructor(private router: Router) {
  }

  selectBook(book: BookEntity) {
    this.router.navigate([ `/books/${book.isbn}` ]);
  }
}
