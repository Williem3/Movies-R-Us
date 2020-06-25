import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  apiKey = '2b9fd2f7326053e8e2cb3c0478856980';

  baseUrl = 'https://api.themoviedb.org/3/';

  getMovies() {
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getGenre(genre) {
    return this.http
      .get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&
      include_adult=false&include_video=false&page=1&with_genres=${genre}`);
  }

  getUpcomingMovies() {
    return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getPopularMovies() {
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getMoviesByKeyword(keyword) {
    return this.http.get(`${this.baseUrl}search/keyword?api_key=${this.apiKey}&query=${keyword}`);
  }

  getMovieById(id) {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

}
