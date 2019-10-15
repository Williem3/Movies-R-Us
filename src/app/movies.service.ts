import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

export interface ApiResponse {
  title: string;
  releaseDate: string;

}

export interface TopRatedMovies {
  results: Movie[];
}
export interface GenreMovies {
  results: Movie[];
}

class Movie {
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

  constructor(public apiService: ApiService) {
  }


  getMovies() {
    this.apiService.getMovies()
      .subscribe((res: TopRatedMovies ) => {
        console.log(res);
        this.data = res.results;
        console.log('movies', this.data);
      });
  }

  getGenre(value) {
    this.apiService.getGenre(value)
      .subscribe((res: GenreMovies) => {
        console.log(res);
        this.data = res.results;
        console.log(value, this.data);
      });
  }
}
