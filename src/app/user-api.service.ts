import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {

  constructor(public http: HttpClient) { }

  baseUrl = 'localhost:3000/api';

  loginUrl = '/appUsers/login';

  userLogin(credentials) {
    return this.http.post(`${this.baseUrl}/appUsers/login`, credentials);
  }
  //
  // userLogout() {
  //   return this.http.post(`${this.baseUrl}/appUsers/logout`, sessionStorage.getItem('token'), { headers: this.createHeader()});
  // }
  // createHeader() {
  //   return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'));
  // }

  getUserCred(userId: number) {
    return this.http.get(`${this.baseUrl}/appUsers/${userId}`);
  }
}
