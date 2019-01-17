import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  userData: Object;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registrationForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  registration () {
    if (this.registrationForm.value.password !== this.registrationForm.value.confirm) {
      console.log('password !== confirm');
      return;
    }

    this.userData = {
      login: this.registrationForm.value.login,
      password: this.registrationForm.value.password,
      email: this.registrationForm.value.email
    };

    this.userService
    .registration(this.userData)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin']);
    });
  }

}
