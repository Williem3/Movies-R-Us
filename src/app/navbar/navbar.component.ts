import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 Username = this.userService.User;


  constructor(public movieService: MoviesService, public userService: UserService) {
  }

  ngOnInit() {
    this.userService.checkUsername();
  }

  userLogout() {
    this.userService.userLogout();
    this.userService.checkUsername();
  }
}
