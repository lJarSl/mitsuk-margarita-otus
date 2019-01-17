import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ServersResponseData } from './../models/ServersResponseData.model';

// Todo: https://habr.com/ru/post/425959/


@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: String = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(`/api/books`);
  }

  getBookById(id) {
    return this.http.get(`/api/books/${id}`);
  }

  deleteBook(id) {
    return this.http.get(`/api/books/delete/${id}`);
  }

  getOneBook(id) {
    return this.http.get(`/api/books/${id}`);
  }

  updateBook(id, data) {
    return this.http.post(`/api/books/update/${id}`, data);
  }

  addBook(data) {
    return this.http.post(`/api/books`, data);
  }

  getTextByBookId(id) {
    return this.http.get(`/api/books/${id}/text`);
  }

  uploadFile(file) {
    return this.http.post(`/api/books/uploadfile`, file);
  }
}
