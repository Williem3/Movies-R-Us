import {Injectable} from '@angular/core';
import {UserAPIService} from './user-api.service';
import {Router} from '@angular/router';
import {Movie, Movies, MoviesService} from './movies.service';
import {forkJoin, Observable} from 'rxjs';
import { of, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http';


export interface Form {
  username: string;
  password: string;
}
export interface RegistrationForm {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}
export interface UserInfo {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  userId: string;
}
export interface MovieForm {
  movieID: string;
  userID: string;
  favoriteMovie: boolean;
  userViewed: boolean;
  savedMovie: boolean;
}

interface LoginResponse {
  id: string;
  token: string;
  userId: string;
}

interface RegistrationResponse {
  username: string;
  email: string;
  id: string;
  token: string;
}
interface MovieFavoriteResponse {
  favoriteMovie: boolean;
}
interface FavoriteMovie {
  movieID: string;
}
interface FavoritedMovies {
  results: FavoriteMovie[];
}

interface UserInfoBind {
  results: UserInfo;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: UserInfo;
  User: string;
  loggedIn = false;
  favorites: any;
  movieData: any[];
  apiKey = '2b9fd2f7326053e8e2cb3c0478856980';
  favorited: boolean = true;

  baseUrl = 'https://api.themoviedb.org/3/';


  constructor(public userAPI: UserAPIService, public router: Router, public http: HttpClient, public movieService: MoviesService) {
  }

  checkUsername() {
    if (sessionStorage.getItem('username') === null) {
      this.User = 'Test';
      this.loggedIn = false;
    } else {
      this.User  = sessionStorage.getItem('username');
      this.loggedIn = true;
    }
  }
  userLogin(form) {
    this.userAPI.userLogin(form)
      .subscribe((res: LoginResponse) => {

        console.log(res.id);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userId', res.userId);
        sessionStorage.setItem('loginResponseId', res.id);
        this.populateSessionStorage();
        this.router.navigateByUrl('home');
      });
  }
  populateSessionStorage() {
    // @ts-ignore
    this.userAPI.getUserCred(sessionStorage.userId)
      .subscribe((res: UserInfo) => {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('email', res.email);
        sessionStorage.setItem('firstName', res.firstName);
        sessionStorage.setItem('lastName', res.lastName);
        sessionStorage.setItem('getAppUserId', res.userId);
        this.checkUsername();
        this.data = res;
      });
  }
  userLogout() {
    this.userAPI.userLogout()
      .subscribe( (res: LoginResponse) => {
        sessionStorage.clear();
        if (sessionStorage.getItem('token') === null) {
          alert('Logout Success!');
          this.checkUsername();
          this.router.navigateByUrl('home');
        } else { alert('There was an error processing your request. Please try again later or contact the Helpdesk.'); }
      });
  }
  userRegistration(form) {
    this.userAPI.userRegistration(form)
      .subscribe( (res: RegistrationResponse) => {
        if (res.token != null) {
          alert('Registration Success!');
          this.router.navigateByUrl('login');
        } else { alert('There was an error processing your request. Please try again later or contact the helpdesk.'); }
      });
  }
  favoriteMovie(userID, movieForm) {
    this.userAPI.favoriteMovie(userID, movieForm)
      .subscribe( (res: MovieFavoriteResponse) => {
        return this.getFavorites(userID);
      });
  }
  getFavorites(userID) {
    this.userAPI.getFavorites(userID)
      .subscribe( (res: FavoritedMovies) => {
        const favMovieIDs = [];
        let favoriteMovies: FavoritedMovies[];
        // @ts-ignore
        favoriteMovies = res;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < favoriteMovies.length; i ++) {
          favMovieIDs.push(res[i].movieID);
        }
        // tslint:disable-next-line:no-shadowed-variable
        this.getData(favMovieIDs).subscribe( (res) => {
          this.movieData = res;
          this.checkFavorites();
          console.log(this.movieData);
        });
      });
  }
  getData(searchID: any[]) {
    return forkJoin(searchID.map(favorite => this.http.get(`${this.baseUrl}movie/${favorite}?api_key=${this.apiKey}&language=en-US`)));
  }

  checkFavorites() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.movieService.data.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < this.movieData.length; j++) {
        if (this.movieService.data[i].id === this.movieData[j].id) {
          this.movieService.data[i].favorited = true;
        }
      }
    }
  }
}
