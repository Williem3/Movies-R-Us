import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public movieService: MoviesService) { }

  ngOnInit() {
  }

  getMovies() {
    this.movieService.getMovies();
  }

  getGenre(value) {
    this.movieService.getGenre(value);
    this.movieService.getMovies();
  }

}
