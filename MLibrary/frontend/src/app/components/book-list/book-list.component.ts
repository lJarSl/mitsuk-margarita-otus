import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Book } from './../../models/book.model';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];
  countBooks: Number = 0;
  displayedColumns = ['title', 'author', 'date_writed', 'state', 'actions'];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService
      .getBooks()
      .subscribe((data: Book[]) => {
        this.books = data;
        this.countBooks = data.length;
      });
  }

  deleteBook(id): void {
    console.log(`delete - ${id}`);
    this.bookService
      .deleteBook(id)
      .subscribe((data: Book[]) => {
        this.books = data;
        this.countBooks = data.length;
      });
  }

}
