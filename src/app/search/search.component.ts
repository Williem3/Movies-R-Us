import { Component, OnInit } from '@angular/core';
import {Movie, Movies, MoviesService} from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchMovie: string;
  moviesArray: Movie[];
  data: Movie[];

  constructor(public movieService: MoviesService) { this.obtainAllMovies(); }

  ngOnInit() {
  }
  obtainAllMovies() {
    this.movieService.getMovies();
    this.moviesArray = this.movieService.data;
  }

  // searchByKeyword() {
  //   this.movieService.getMoviesByKeyword(this.searchMovie);
  //   for (const movie in this.moviesArray) {
  //     let i = 0;
  //     if (this.movieService.data[i].name === movie.title) {
  //       this.data.push(this.moviesArray[i]);
  //     }
  //     i++;
  //   }
  //   return this.data;
  // }

}
