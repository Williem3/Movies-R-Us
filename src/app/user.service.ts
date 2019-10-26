import { Injectable } from '@angular/core';
import {UserAPIService} from './user-api.service';
import {Router} from '@angular/router';

export interface Form {
  username: string;
  password: string;
}

interface LoginResponse {
  id: string;
  token: string;
  userId: string;
}

interface UserInfo {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  username: string;
  token: string;
  userId: string;
}
interface UserInfoBind {
  results: UserInfo;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: UserInfo;

  constructor(public userAPI: UserAPIService, public router: Router) { }

  userLogin(form) {
    this.userAPI.userLogin(form)
      .subscribe((res: UserInfoBind) => {
        sessionStorage.setItem('token', res.results.token);
        sessionStorage.setItem('userId', res.results.userId);
        sessionStorage.setItem('loginResponseId', res.results.id);
        this.populateSessionStorage();
        this.data = res.results;
      });
  }

  populateSessionStorage() {
    this.userAPI.getUserCred(sessionStorage.userId)
      .subscribe((res: UserInfo) => {
        sessionStorage.setItem('userName', res.username);
        sessionStorage.setItem('email', res.email);
        sessionStorage.setItem('firstName', res.firstName);
        sessionStorage.setItem('lastName', res.lastName);
        sessionStorage.setItem('getAppUserId', res.id);
      });
  }
}
