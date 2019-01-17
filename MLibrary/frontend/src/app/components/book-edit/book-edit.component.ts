import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Book } from './../../models/book.model';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  editForm: FormGroup;

  currentBook: Book;

  bookText: String = '';

  selectedFile: File = null;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
  }

  createForm () {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      date_writed: ['', Validators.required],
      desctiption: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  ngOnInit() {

    this.createForm();

    this.activatedRoute.params.subscribe(params => {
      this.bookService
      .getBookById(params['id'])
      .subscribe((data: Book[]) => {
        this.currentBook = data[0];
        this.editForm.get('title').setValue(this.currentBook.title);
        this.editForm.get('author').setValue(this.currentBook.author);
        this.editForm.get('date_writed').setValue(this.currentBook.date_writed);
        this.editForm.get('desctiption').setValue(this.currentBook.desctiption);
        this.editForm.get('state').setValue(this.currentBook.state ? 'On' : 'Off');
      });
    });

  }

  editBook(): void {

    this.currentBook.title = this.editForm.value.title;
    this.currentBook.author = this.editForm.value.author;
    this.currentBook.date_writed = this.editForm.value.date_writed;
    this.currentBook.desctiption = this.editForm.value.desctiption;
    this.currentBook.state = this.editForm.value.state ? 1 : 0;

    const bookData: Object = {
      title: this.currentBook.title,
      author: this.currentBook.author,
      date_writed: this.currentBook.date_writed,
      desctiption: this.currentBook.desctiption,
      state: this.currentBook.state,
    };

    this.bookService
      .updateBook(this.currentBook._id, bookData)
      .subscribe(data => {
        this.router.navigate(['/books']);
      });

  }


  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.bookService
    .uploadFile(fd)
    .subscribe(data => {
      console.log(data);
      /*if (typeof data.state === 'string' && data.state !== 'ok') {
        return;
      }
      if (typeof data.text === 'string') {
        this.bookText = data.text;
      }*/


    });
  }

}
