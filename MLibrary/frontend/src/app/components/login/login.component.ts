import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  userData: Object;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  login () {
    if (!this.loginForm.value.login || !this.loginForm.value.password) {
      return;
    }

    this.userData = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    };

    this.userService
    .login(this.userData)
    .subscribe(data => {
      console.log(data);
      this.userService.setLoggedIn(true);
      this.router.navigate(['/admin']);
    });
  }

}
