import {Component, OnInit, ViewChild} from '@angular/core';
import {MoviesService} from '../movies.service';
import {MovieForm, UserService} from '../user.service';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieListTitle: string = this.moviesService.movieListTitle;
  username: string = sessionStorage.getItem('username');
  userID: string = sessionStorage.getItem('userId');
  keyword: string;
  editMode: boolean = false;
  favorite: boolean = false;
  constructor(public moviesService: MoviesService, public userService: UserService) {

  }
  movieForm: MovieForm = {
    movieID: null,
    userID: null,
    favoriteMovie: false,
    userViewed: false,
    savedMovie: false,
  };

  ngOnInit() {
    this.getMovies();
    this.userService.getFavorites(this.userID);
  }

  getMovies() {
    this.moviesService.movieListTitle = 'Top Rated Movies';
    this.moviesService.getMovies();
    this.moviesService.moviesListed = true;
    this.userService.checkUsername();
  }

  getUpcomingMovies() {
    this.moviesService.movieListTitle = 'Upcoming Movies';
    this.moviesService.getUpcomingMovies();
    this.moviesService.moviesListed = true;
    this.userService.checkUsername();
  }

  getPopularMovies() {
    this.moviesService.movieListTitle = 'Popular Movies';
    this.moviesService.getPopularMovies();
    this.moviesService.moviesListed = true;
    this.userService.checkUsername();
  }

  getGenre(genreID, genreTitle) {
    this.moviesService.movieListTitle = genreTitle;
    this.moviesService.getGenre(genreID);
    this.moviesService.moviesListed = true;
    this.userService.checkUsername();
  }
  getMoviesByKeyword(keyword) {
    this.moviesService.getMoviesByKeyword(keyword);
  }
  editModeToggle() {
    if (this.editMode === false) {
      this.editMode = true;
    } else {
      this.editMode = false;
    }
    this.userService.checkUsername();
  }

  favoriteMovie(movieID, favorited) {
    this.movieForm.movieID = movieID;
    this.movieForm.favoriteMovie = favorited;
    this.movieForm.userID = this.userID;
    this.userService.favoriteMovie(this.userID, this.movieForm);
  }
}
