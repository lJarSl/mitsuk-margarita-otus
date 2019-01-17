import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: String = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/users`);
  }

  getOneUser(id) {
    return this.http.get(`${this.url}/users/${id}`);
  }

  addUser(data) {
    // check data
    console.log('adding user width data:');
    console.log(data);
    return this.http.post(`${this.url}/users`, data);
  }
}
