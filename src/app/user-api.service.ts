import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {

  constructor(public http: HttpClient) { }

  baseUrl = 'http://localhost:3000/api';

  userLogin(credentials) {
    return this.http.post(`${this.baseUrl}/appUsers/login`, credentials);
  }
  userLogout() {
    return this.http.post(`${this.baseUrl}/appUsers/logout`, sessionStorage.getItem('token'), {headers: this.createHeader()});
  }
  createHeader() {
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'));
  }
  getUserCred(userId: string) {
    return this.http.get(`${this.baseUrl}/appUsers/${userId}`);
  }
  userRegistration(form) {
    return this.http.post(`${this.baseUrl}/appUsers/`, form);
  }
  favoriteMovie(userID, movieForm) {
    return this.http.post(`${this.baseUrl}/appUsers/${userID}/movies`, movieForm, {headers: this.createHeader()});
  }
  getFavorites(userID) {
    return this.http.get(`${this.baseUrl}/appUsers/${userID}/movies`);
  }
}
