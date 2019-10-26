import { Component, OnInit } from '@angular/core';
import {Form, UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService) { }

  form: Form = {
    username: null,
    password: null,
  };

  ngOnInit() {
  }

  userLogin() {
    this.userService.userLogin(this.form);
    console.log('test');
  }
}
