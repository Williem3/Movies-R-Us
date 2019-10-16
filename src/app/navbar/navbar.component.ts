import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public movieService: MoviesService) { }

  ngOnInit() {
  }
  getUpcomingMovies() {
    this.movieService.movieListTitle = 'Upcoming Movies';
    this.movieService.getUpcomingMovies();
    this.movieService.moviesListed = true;
  }

  getPopularMovies() {
    this.movieService.movieListTitle = 'Popular Movies';
    this.movieService.getPopularMovies();
    this.movieService.moviesListed = true;
  }

}
