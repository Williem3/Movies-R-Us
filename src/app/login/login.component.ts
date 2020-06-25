import { Component, OnInit } from '@angular/core';
import {Form, RegistrationForm, UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registration: boolean = false;
  loginPage: boolean = true;
  buttonName = 'Register';

  constructor(public userService: UserService) { }

  form: Form = {
    username: null,
    password: null,
  };
  registrationForm: RegistrationForm = {
    username: null,
    password: null,
    email: null,
    firstName: null,
    lastName: null,
  };

  ngOnInit() {
  }

  userLogin() {
    this.userService.userLogin(this.form);
    console.log('test');
    this.userService.checkUsername();
  }

  showRegistration() {
    if (this.loginPage === true) {
      this.loginPage = false;
      this.registration = true;
      this.buttonName = 'Login';
    } else {
      this.loginPage = true;
      this.registration = false;
      this.buttonName = 'Register';
    }
    this.userService.checkUsername();
  }
  userRegistration(registrationForm) {
     this.userService.userRegistration(registrationForm);
     this.userService.checkUsername();
  }


}
