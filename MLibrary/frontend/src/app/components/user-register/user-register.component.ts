import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userData: Array<Number>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userData = [1,2,3,4];

  }

  saveUser(){
    this.userService.addUser(this.userData).subscribe(data => {
      console.log(data);
    })
  }

}
