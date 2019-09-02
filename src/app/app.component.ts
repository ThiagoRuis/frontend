import { Component, OnInit } from '@angular/core';
import {MoviesAPIService} from './movies-api.service';
import { Movie } from './movie';
import {DetailDialogComponent} from "./detail-dialog/detail-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {empty} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'COisa Linda';
  movies: Movie[];



  constructor( private movieApi: MoviesAPIService, private dialog: MatDialog ) { }

  ngOnInit() {
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.movieApi.listUpcoming().subscribe((upcomingMovies: Movie[]) => {
      this.movies = upcomingMovies;
    });
  }

  getMovieDetail(movieId) {
    this.movieApi.listMovieDetail(movieId).subscribe((movieDetail: Movie) => {
      const dialogRef = this.dialog.open(DetailDialogComponent, {
        width: '400px',
        data: movieDetail,
      });
    });
  }

  searchMovie(movieName) {
    if (movieName.value.trim() == '') {
      this.getUpcomingMovies();
    } else {
      this.movieApi.searchMovie(movieName.value).subscribe((upcomingMovies: Movie[]) => {
        this.movies = upcomingMovies;
      });
    }
  }

  clear(movieName) {
    movieName.value = '';
    this.getUpcomingMovies();
  }

}
