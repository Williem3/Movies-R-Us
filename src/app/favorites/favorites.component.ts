import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  editMode: boolean = false;
  userID: string = sessionStorage.getItem('userId');
  constructor(public userService: UserService) { }

  ngOnInit() {
  }
  editModeToggle() {
    if (this.editMode === false) {
      this.editMode = true;
    } else {
      this.editMode = false;
    }
    this.userService.checkUsername();
  }

  getFavorites() {
    this.userService.getFavorites(this.userID);
  }

}
