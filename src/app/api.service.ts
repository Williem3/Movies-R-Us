import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  apiKey: '2b9fd2f7326053e8e2cb3c0478856980';

  baseUrl = 'https://api.themoviedb.org/3/';

  getMovie(movieId) {
    return this.http.get(`${this.baseUrl}movie/${movieId}?api_key=${this.apiKey}&language=en-US`);
  }

  getMovies() {
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=2b9fd2f7326053e8e2cb3c0478856980&language=en-US&page=1`);
  }

  getGenre(genre) {
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=2b9fd2f7326053e8e2cb3c0478856980&language=en-US`);
  }
}
