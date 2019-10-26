import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieListTitle: string = this.moviesService.movieListTitle;
  username: string = this.userService.data.username;

  constructor(public moviesService: MoviesService, public userService: UserService) {
  }

  ngOnInit() {
  }

}
