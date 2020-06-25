import { Injectable } from '@angular/core';
import {MoviesService} from './movies.service';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(public movieService: MoviesService, public userService: UserService) {
  }


  checkFavorites() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.movieService.data.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < this.userService.movieData.length; j++) {
        if (this.movieService.data[i].id === this.userService.movieData[j].id) {
          this.movieService.data[i].favorited = true;
        } else {
          this.movieService.data[i].favorited = false;
        }
      }
    }
  }
}
