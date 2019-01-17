import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: String = 'http://localhost:3000';
  private loggedInState: Boolean = false;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`/api/users`);
  }

  getOneUser(id) {
    return this.http.get(`/api/users/${id}`);
  }

  addUser(data) {
    // check data
    console.log('adding user width data:');
    console.log(data);
    return this.http.post(`/api/users`, data);
  }

  login (data) {
    return this.http.post(`/api/login`, data);
  }

  registration (data) {
    return this.http.post(`/api/registration`, data);
  }

  setLoggedIn (value: Boolean) {
    this.loggedInState = value;
  }

  get isLoggedIn() {
    return true;
  }

}
