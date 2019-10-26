import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(public movieService: MoviesService) { }

  ngOnInit() {
  }

  getMovies() {
    this.movieService.movieListTitle = 'Top Rated Movies';
    this.movieService.getMovies();
    this.movieService.moviesListed = true;
  }

  getGenre(genreID, genreTitle) {
    this.movieService.movieListTitle = genreTitle;
    this.movieService.getGenre(genreID);
    this.movieService.moviesListed = true;
  }

}
