import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Book } from './../../models/book.model';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private bookService: BookService, private router: Router, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      date_writed: ['', Validators.required],
      desctiption: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addBook(title, author, date_writed, desctiption): void {

    let bookData: Object = {
      title: title,
      author: author,
      date_writed: date_writed,
      desctiption: desctiption,
    };

    this.bookService
      .addBook(bookData)
      .subscribe(data => {
        this.router.navigate(['/books']);
      });
  }

}
