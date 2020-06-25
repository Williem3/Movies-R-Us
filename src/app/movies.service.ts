import { Injectable } from '@angular/core';
import {ApiService} from './api.service';


export interface Movies {
  results: Movie[];
}

export interface Movie {
  favorited: boolean;
  id: number;
  title: string;
  releaseDate: string;
  vote_average: number;
  poster_path: string;
}

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  data: Movie[];
  movieListTitle: string;
  moviesListed: boolean = false;

  constructor(public apiService: ApiService) {
  }

  getMovies() {
    this.apiService.getMovies()
      .subscribe((res: Movies ) => {
        this.data = res.results;
        console.log('movies', this.data);
      });
  }
  getGenre(genreID) {
    this.apiService.getGenre(genreID)
      .subscribe((res: Movies) => {
        this.data = res.results;
        console.log(genreID, this.data);
      });
  }
  getUpcomingMovies() {
    this.apiService.getUpcomingMovies()
      .subscribe((res: Movies) => {
        this.data = res.results;
        console.log('New Movie List', this.data);
      });
  }
  getPopularMovies() {
    this.apiService.getPopularMovies()
      .subscribe((res: Movies) => {
        console.log(res);
        this.data = res.results;
        console.log('Popular Movie List', this.data);
      });
  }
  getMoviesByKeyword(keyword)   {
    this.apiService.getMoviesByKeyword(keyword)
      .subscribe(( res: Movies) => {
        console.log(res);
        this.data = res.results;
        console.log('Movie by users keyword', this.data);
      });
  }
  getMovieById(id) {
    this.apiService.getMovieById(id)
      .subscribe((res: Movies) => {
        console.log(res);
        this.data = res.results;
        console.log('Movie by id', this.data);
      });
  }

}
